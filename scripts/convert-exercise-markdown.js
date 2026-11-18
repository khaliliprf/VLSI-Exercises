// Convert the existing chapter-2 Markdown drafts to XeLaTeX fragments.
// This is a formatting conversion; mathematical and explanatory content is kept.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outputDir = path.join(root, 'exercises', '2', 'solutions');
fs.mkdirSync(outputDir, { recursive: true });

function formatInline(raw) {
  const math = [];
  let text = raw.replace(/\\\\\[([^]*?)\\\\\]|\\\\\(([^]*?)\\\\\)/g, (_, display, inline) => {
    const body = (display ?? inline).replace(/\\text\{([^{}]*)\}/g, (_, content) =>
      /[\u0600-\u06ff]/.test(content)
        ? `\\text{\\rl{${content}}}`
        : `\\text{\\lr{${content}}}`);
    const formula = display === undefined ? `\\(${body}\\)` : `\\[${body}\\]`;
    // The long numerical line in 2.7 exceeds the text width by a few points.
    math.push(display !== undefined && body.startsWith('= \\sqrt{3.2 \\times 10^{-19}')
      ? `{\\small ${formula}}` : formula);
    return `¤${math.length - 1}¤`;
  });

  // Escape literal TeX special characters only outside mathematics.
  text = text.replace(/([&%#$\{\}_])/g, '\\$1');
  // Put runs of Latin technical vocabulary in left-to-right boxes.
  text = text.replace(/[A-Za-z][A-Za-z0-9./-]*(?:(?:,[ \t]+|[ \t]+\\&[ \t]+|[ \t]+)[A-Za-z0-9][A-Za-z0-9./-]*)*/g,
    match => `\\lr{${match}}`);
  text = text.replace(/\*\*([^*]+)\*\*/g, '\\textbf{$1}');
  text = text.replace(/\*([^*]+)\*/g, '\\emph{$1}');
  text = text.replace(/¤(\d+)¤/g, (_, n) => math[Number(n)]);
  return text;
}

function convert(source) {
  const out = [];
  const stack = [];
  let inQuote = false;
  let inTable = false;
  const lines = source.replace(/\r\n/g, '\n').split('\n');

  function closeLists(targetIndent = -1) {
    while (stack.length && stack[stack.length - 1].indent >= targetIndent) {
      out.push(`\\end{${stack.pop().type}}`);
    }
  }
  function closeQuote() {
    if (inQuote) { out.push('\\end{quote}'); inQuote = false; }
  }
  function closeTable() {
    if (inTable) { out.push('\\end{tabularx}', '\\end{center}', '\\end{small}'); inTable = false; }
  }

  for (const line of lines) {
    const trimmed = line.trimEnd();
    if (!trimmed.trim()) { out.push(''); continue; }

    const table = /^\|(.+)\|$/.exec(trimmed);
    if (table) {
      closeLists(); closeQuote();
      if (/^\|[\s:|-]+\|$/.test(trimmed)) continue;
      if (!inTable) {
        out.push('\\begin{small}', '\\begin{center}',
          '\\begin{tabularx}{\\textwidth}{|X|X|>{\\raggedleft\\arraybackslash}X|}', '\\hline');
        inTable = true;
      }
      out.push(table[1].split('|').map(s => formatInline(s.trim())).join(' & ') + ' \\\\', '\\hline');
      continue;
    }
    closeTable();

    const quote = /^> ?(.*)$/.exec(trimmed);
    if (quote) {
      closeLists();
      if (!inQuote) { out.push('\\begin{quote}'); inQuote = true; }
      out.push(formatInline(quote[1].trimEnd()), '');
      continue;
    }
    closeQuote();

    if (/^---+$/.test(trimmed)) { closeLists(); out.push(''); continue; }

    const heading = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (heading) {
      closeLists();
      const command = heading[1].length <= 3 ? 'subsection' : 'subsubsection';
      out.push(`\\${command}*{${formatInline(heading[2])}}`);
      continue;
    }

    const list = /^(\s*)(?:([*+-])|(\d+)\.)\s+(.*)$/.exec(trimmed);
    if (list) {
      const indent = list[1].length;
      const type = list[3] ? 'enumerate' : 'itemize';
      while (stack.length && (stack[stack.length - 1].indent > indent ||
          (stack[stack.length - 1].indent === indent && stack[stack.length - 1].type !== type))) {
        out.push(`\\end{${stack.pop().type}}`);
      }
      if (!stack.length || stack[stack.length - 1].indent < indent) {
        stack.push({ indent, type }); out.push(`\\begin{${type}}`);
      }
      out.push(`\\item ${formatInline(list[4].trimEnd())}`);
      continue;
    }

    const indent = /^\s*/.exec(trimmed)[0].length;
    if (!stack.length || indent <= stack[stack.length - 1].indent) closeLists();
    out.push(formatInline(trimmed.trim()));
  }
  closeTable(); closeQuote(); closeLists();
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

for (const number of ['2-2', '2-3', '2-6', '2-7', '2-8', '2-9', '2-10']) {
  const markdown = fs.readFileSync(path.join(root, 'exercises', '2', `${number}.md`), 'utf8');
  const fragment = `% Generated from 2/${number}.md; technical content preserved.\n` +
    `\\exercise{${number.replace('2-', '۲.').replace(/[0-9]/g, n => '۰۱۲۳۴۵۶۷۸۹'[Number(n)])}}\n` +
    convert(markdown);
  fs.writeFileSync(path.join(outputDir, `${number}.tex`), fragment, 'utf8');
}
