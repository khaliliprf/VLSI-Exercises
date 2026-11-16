// Run after building 3/main.tex and extracting build/hw03-pdf.txt.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const files = ['3/main.tex', ...['2-16', '2-17', '2-20'].map(n => `3/solutions/${n}.tex`)];
const source = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
assert(!/[\ufb50-\ufdff\ufe70-\ufeff\u0654\u066a]/u.test(source));
assert(!source.includes('$$') && !source.includes('\\\\('));
const labels = [...source.matchAll(/\\label\{([^}]+)\}/g)].map(m => m[1]);
assert.equal(labels.length, new Set(labels).size);
const refs = [...source.matchAll(/\\(?:eqref|ref)\{([^}]+)\}/g)].map(m => m[1]);
refs.forEach(r => assert(labels.includes(r), r));
const bib = [...source.matchAll(/\\bibitem\{([^}]+)\}/g)].map(m => m[1]);
const cites = [...source.matchAll(/\\cite(?:\[[^\]]*\])?\{([^}]+)\}/g)].map(m => m[1]);
cites.forEach(r => assert(bib.includes(r), r));
let evaluations = 0, residual = 0, symmetry = 0;
const B = (v,d,t) => v+t+Math.sqrt((d-2*v)*(d-2*t));
const D = (v,d,t) => v-t-Math.sqrt((2*v-d)*(d-2*t));
for (const d of [0.8,1,1.8,3.3]) for (const ratio of [0.05,0.15,0.25,0.35,0.45]) {
  const t=d*ratio;
  for (let k=1;k<100;k++) {
    const v=t+(d/2-t)*k/100, out=B(v,d,t), w=d-v, low=D(w,d,t);
    assert(out>v+t && out>=v-t && out<=d);
    assert(low>=0 && low<w-t && low<=w+t);
    const y=d-out;
    residual=Math.max(residual,Math.abs((v-t)**2/2-((d-v-t)*y-y*y/2)),
      Math.abs((w-t)*low-low*low/2-(d-w-t)**2/2));
    symmetry=Math.max(symmetry,Math.abs(low-(d-out)));
    evaluations+=2;
  }
  assert(Math.abs(B(t,d,t)-d)<1e-12);
  assert(Math.abs(D(d-t,d,t))<1e-12);
}
assert.equal(evaluations,3960);
assert(residual<1e-12 && symmetry<1e-12);
const vil=37/80, vih=43/80, vol=3/80, voh=77/80, nm=17/40;
assert(Math.abs(B(vil,1,0.35)-voh)<1e-14);
assert(Math.abs(D(vih,1,0.35)-vol)<1e-14);
assert(Math.abs(vil-vol-nm)<1e-14 && Math.abs(voh-vih-nm)<1e-14);
const h=1e-6;
const slopes=[(B(vil+h,1,0.35)-B(vil-h,1,0.35))/(2*h),
  (D(vih+h,1,0.35)-D(vih-h,1,0.35))/(2*h)];
slopes.forEach(s=>assert(Math.abs(s+1)<1e-8));
const log=fs.readFileSync('build/main.log','utf8');
assert(!/Missing character|Overfull|Underfull|LaTeX Warning|Package .* Warning|^!/m.test(log));
const pdf=fs.readFileSync('build/hw03-pdf.txt','utf8');
// Poppler may use presentation glyphs in PDFs without ActualText. This document uses ActualText.
assert(!/[\ufb50-\ufdff\ufe70-\ufeff]/u.test(pdf));
const latinLines=pdf.split(/\r?\n/).filter(l=>/[0-9]/.test(l));
assert(latinLines.every(l=>/03-DC Char Sec 2\.5\.pdf|Version 2\.0 completed 12\/23\/04/.test(l)),JSON.stringify(latinLines));
const result={files,labels:labels.length,references:refs.length,citations:cites.length,
  evaluations,maxKclResidual:residual,maxSymmetryError:symmetry,slopes,
  noiseMarginVolts:nm,pages:pdf.split('\f').filter(p=>p.trim()).length,latinDigitLines:latinLines,
  compilerWarnings:0};
fs.writeFileSync('build/hw03-audit.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
