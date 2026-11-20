# Persistent Rules for VLSI Exercises

## Purpose and scope
- This project contains master's-level VLSI course exercises prepared for clear, professional submission to the instructor.
- Prepare submission-ready solutions and reports in LaTeX. Persian is the primary language for document text and explanations.
- Apply these rules to all exercises and files in this project unless the user explicitly instructs otherwise for a specific case.

## Maintaining these rules
- Keep this file's instructions in English while preserving the Persian-language requirements for exercise documents.
- Whenever the user explicitly establishes a rule or asks for something to be followed "always," record it here or update the relevant rule, and apply it to subsequent work.
- Do not turn temporary preferences or instructions for a single exercise into general rules without evidence that they are intended to persist.
- Read this file before working on the project. Preserve existing rules; when the user explicitly changes a preference, update the relevant rule to avoid contradictions.
- Write new rules precisely and make them actionable. Do not attribute unconfirmed requirements to the user.

## Language, fonts, and typesetting
- Use XeLaTeX with `xepersian` for Persian and right-to-left support. Load `xepersian` after other ordinary packages as required by the package.
- The Persian text font must be B Nazanin (`B Nazanin`), configured with `\settextfont{B Nazanin}` or by specifying files for that same font.
- If the font is unavailable, report this and investigate its location or installation. Do not substitute another font without informing the user and obtaining their agreement.
- Use readable, compatible Latin and mathematics fonts with the required symbols. The B Nazanin requirement applies to Persian text.
- Typeset Persian right to left and English phrases, identifiers, and Latin technical terms left to right. Use `\lr{...}` for inline Latin text and an appropriate environment such as `latin` for separate English paragraphs.
- Use consistent Persian orthography, including Persian yeh (ی), Persian kaf (ک), appropriate zero-width non-joiners, and correct punctuation.
- Follow the latest applicable edition of the Academy of Persian Language and Literature's *Persian Orthography* (`دستور خط فارسی`) for spelling, word joining, affixes, compounds, punctuation, and spacing. When a case is not covered or is genuinely disputed, choose one defensible convention and use it consistently throughout the project.
- All prose must use Unicode logical-order Persian text. Never paste Arabic presentation forms or visually shaped glyphs such as `ﺗﻤﺮﻳﻦ`; write normal Unicode Persian such as `تمرین` and let XeLaTeX shape it.
- Use Persian digits (`۰۱۲۳۴۵۶۷۸۹`) in Persian prose, headings, exercise and section numbers, dates, page numbers, captions, table entries written in Persian, equation numbers, and references generated in a Persian context. Thus an exercise heading must render as `تمرین ۲.۲`, not `تمرین 2.2`.
- Use Latin digits only inside explicitly left-to-right Latin material when required by the source or convention, such as an English bibliographic title, a code fragment, a filename, a device model, or an identifier whose spelling must be preserved. Do not wrap an exercise number or an ordinary numeric value in `\lr{...}` merely to control direction.
- Use the Persian decimal separator in Persian running text where appropriate. Preserve conventional mathematical and engineering notation inside formulas and source-specific identifiers. Keep digit style consistent within each semantic unit; never mix Persian, Arabic-Indic, and Latin digit code points in one number.
- Use Persian punctuation in Persian prose: Persian comma `،`, semicolon `؛`, and question mark `؟`. Place punctuation according to Persian sentence direction and avoid a space before punctuation; add one space after it when text continues.

## Persian scientific writing
- Apply scientific-writing and Persian academic-writing principles to every submission, not only final proofreading. Write precise, formal, concise Persian with complete sentences and an explicit logical progression from assumptions to method, derivation, result, and interpretation.
- Prefer direct, unambiguous statements. Remove conversational fillers, inflated claims, vague pronouns, needless repetition, and decorative language. Define every nonstandard term, symbol, abbreviation, and assumption at first use.
- Keep terminology stable. Preserve established English technical terms as required above, but integrate them grammatically into Persian sentences and set their direction correctly. Do not alternate between multiple Persian or English names for the same concept without explaining the distinction.
- Use headings that describe content and maintain a consistent hierarchy. Do not create a heading for a single isolated sentence, skip heading levels, or use excessive subdivision.
- Each paragraph must develop one main idea. Put claims near their evidence or derivation, state causal and conditional relations explicitly, and use transitions only when they clarify the argument.
- Distinguish facts supported by sources, assumptions, deductions, approximations, simulation results, and interpretations. Qualify the scope of conclusions and never imply greater precision, generality, or certainty than the analysis supports.
- Cite any borrowed definition, equation, figure, table, dataset, or nontrivial claim. Cite the source at the point of use and include enough bibliographic information to identify it. Quotations must be exact and visibly marked; prefer paraphrase when the wording itself is not under discussion.
- Introduce every displayed equation in prose and explain its role or consequence afterward when it is not self-evident. Sentences containing equations must retain grammatically correct punctuation. Define symbols before or immediately after first use.
- Typeset scalar variables and physical quantities in italic, mathematical functions and textual subscripts in upright roman, vectors and matrices consistently, and units in upright roman. Do not use italic text as a substitute for emphasis in Persian prose.
- Follow SI conventions for quantities and units: use standard unit symbols, insert a nonbreaking space between the numerical value and unit, attach SI prefixes directly to unit symbols, and do not pluralize unit symbols or end them with a period unless the sentence ends there. Use `siunitx` rather than manually spacing numeric values and units.
- Report numerical precision honestly. Use significant figures consistent with the inputs, include units for dimensional results, define rounding, and distinguish exact equalities from approximations using `=` and `\approx` correctly.
- Refer to numbered equations, figures, tables, and sections in the prose before or near their appearance. Use semantic `\label` and `\ref`/`\eqref`; do not use positional phrases such as “the equation below” when a stable reference is available.
- Tables and figures must be understandable without relying on surrounding guesswork: provide concise Persian captions, define symbols and abbreviations, show units in headers or axes, cite external material, and discuss the item in the prose. Do not duplicate the same data in both a table and a figure without a clear analytical reason.
- Before submission, perform a dedicated language and scientific-style pass in addition to technical verification: check spelling, half-spaces, digit scripts, punctuation, terminology, sentence clarity, cross-references, captions, units, significant figures, source attribution, and consistency between the stated result and the derivation.

## Technical terminology and mathematics
- Preserve established VLSI and electrical engineering technical terms in English, consistent with the local academic guidelines. Write surrounding explanations in Persian and expand important abbreviations with their full English names on first use when helpful. Preserve original identifiers and notation.
- Write inline mathematics with `\(...\)` and display mathematics with `\[...\]` or appropriate environments such as `equation` and `align`. Do not use `$$...$$`.
- Use appropriate mathematics packages such as `amsmath` and `amssymb`. Keep symbols, subscripts, units, and quantity names consistent throughout each exercise.
- Keep multiline equations aligned and readable. Use `\label`, `\ref`, and `\eqref` for numbering and references instead of hard-coded numbers.
- Insert Persian text within mathematics using mechanisms compatible with `xepersian`, such as `\text{\rl{...}}`, and verify its direction in the output.
- For identifiers with decimal points, preserve the complete number as one left-to-right unit and use Persian digits in Persian text and headings, for example `\secnum{۲.۲}`. Verify that dots and digits render in the intended order.
- Move long or condition-heavy inline formulas to display math. For piecewise operating conditions, place the principal expression on the left and the conditions on the right, with aligned rows where needed.
- Use the same symbol meanings, subscripts, sign conventions, and notation across related notes and exercise solutions. Define any necessary variation explicitly.

## Academic quality and presentation
- In exercise solutions and study booklets, avoid the Persian word "محلی" and workspace-relative descriptions such as "نسخه محلی" or "اسلایدهای محلی". Identify each cited resource for an external reader by its verified title, author or organization, edition or version, year when known, and relevant section, page, or slide. Do not invent missing bibliographic metadata.
- Clearly distinguish the problem statement, assumptions, solution steps, and final result. Explain the solution sufficiently for the reasoning to be followed.
- Do not fabricate data, technology specifications, parameter values, simulation results, or references. State necessary assumptions explicitly and raise ambiguities that affect the answer.
- Keep page layout, spacing, headings, tables, and figures clean and consistent throughout the project. Avoid unnecessary decoration.
- Include student names, instructor names, exercise numbers, and dates only when based on actual information provided by the user. Do not guess missing details.
- Give figures and tables captions and reference labels when appropriate, and ensure their text, units, and symbols are readable.

## Local course sources
- The primary course resource directory is `assets/` inside this project. Prefer these project-local copies so the project remains usable without the parent directory. Use `../` only as a fallback for missing resources; `../video/` remains outside the project. Treat supplied course resources in either location as read-only references, and keep generated documents and working artifacts inside this project unless the user requests otherwise.
- Consult the relevant original exercise statement and accessible course materials before solving or reviewing an exercise. Prioritize explicit instructor requirements, lecture slides and notes, instructor examples, and then the designated textbook. Explain source conflicts instead of silently mixing incompatible conventions.
- `assets/summary.txt` identifies the main reference as Weste and Harris, *CMOS VLSI Design: A Circuits and Systems Perspective*, fourth edition. This is also confirmed by page 2 of `assets/Course Description Fall 1405.pdf` and the textbook's internal title and copyright pages. Confirm exercise numbering, figures, notation, and assumptions against the actual textbook content, not filenames alone.
- `assets/` contains slides `00` through `12`: introduction, MOSFET fundamentals, nonideal behavior, DC characteristics, logical effort, power, variations, scaling, combinational circuits, advanced CMOS, sequential circuits, datapaths, and SRAM. Select relevant slides by topic rather than assuming their numbering matches textbook chapters or that section numbers in filenames define the official course scope.
- Other project-local sources include `assets/Course Description Fall 1405.pdf`, `assets/VLSI_compressed.pdf`, solution-manual PDFs, past project statements, and exam images. Confirm their content and applicability before using them; past projects and exams do not establish current assignment requirements or deadlines.
- Use `assets/Course Description Fall 1405.pdf` for the semester's stated course scope and assessment structure. Page 2 distinguishes the final examination, exercises and quizzes, project, and research report as separate assessed components. Do not infer a current assignment, research topic, deliverable, or deadline from this overview; consult the relevant assignment statement or explicit instructor announcement.
- `assets/VLSI_compressed.pdf` is a 104-page scanned handwritten-notes document, not another verified edition of the textbook. Its opening pages have no extractable text. Inspect relevant page images or use OCR with visual verification; empty text extraction does not establish that a topic is absent. Do not infer the notes' author, semester, or status as official instructor instructions from their filename or scanner metadata.
- Slide 2 of `assets/00-introduction.pdf` attributes the original lecture notes to David Money Harris (2011) and states that they were adapted. Preserve the original attribution when reusing or adapting slide material; distinguish course adaptations from the original textbook and slides.
- `assets/Academic Assistant Guidelines.txt` contains existing learning preferences. Apply its relevant guidance: Persian explanations, English technical terms, source-grounded reasoning, meaningful derivations, and no emojis. Adapt depth to the user's request; do not require a guided-question format when a full solution is requested.
- Cite consulted sources accurately by document title and section or page when available. Distinguish PDF page indices from printed page numbers when they differ. Never claim to have inspected unread PDFs, images, or videos, and report access or extraction limitations.
- In exercise and course-note documents, never use the Persian word `محلی` or labels such as `نسخه محلی` and `اسلایدهای محلی`. Write for readers receiving the document independently of this workspace; storage location is not a source identity.
- Identify every file and source in the references by its verified bibliographic identity: actual title, author or responsible institution, edition or version and date when known, and relevant page, section, or slide. Preserve attribution for adapted material. A filename or workspace path must not substitute for a proper reference; explicitly acknowledge unknown metadata rather than inventing it.
- The two solution-manual PDFs in `assets/`, labeled fourth edition (2011) and fifth edition (2022), have identical SHA-256 hashes. Their internal opening identifies them as `Solutions`, `Version 2.0 completed 12/23/04`; neither filename establishes the actual edition. Do not treat them as independent sources or use their numbering without matching the actual exercise statement.
- Treat existing Markdown solutions as drafts to verify against original statements and independent algebra before converting them to LaTeX. Repair escaped math delimiters when converting; do not copy doubled backslashes from Markdown into LaTeX math delimiters.
- Assignment 2's finalized editable solutions are `2/solutions/*.tex`, assembled by `2/main.tex`. They include scientific and editorial corrections beyond `2/*.md`; `2/review-followup.md` records that reconciliation. `2/review.tex` is the earlier review, not a list of necessarily unresolved defects in the final version. Do not run `scripts/convert-exercise-markdown.js` over the finalized fragments as a routine build step: it performs a raw conversion and would replace the reviewed edits.
- Check operating-region assumptions, physical root selection, units, and boundary cases in MOSFET derivations. Do not carry an unverified derivation into a polished submission merely because its final expression looks plausible.

## Output verification
- Shared LaTeX settings live in `tex/preamble.tex`. Keep exercise solutions separate from the preamble and assemble chapter 2 through `2/main.tex`.
- The shared assignment title page lives in `tex/cover-page.tex`. Keep the official source emblem at `assets/aut-logo.png` and use its exact monochrome derivative at `assets/aut-logo-black.png` on the cover. Do not duplicate cover markup in individual assignments. Set only `\AssignmentNumber{...}` and `\AssignmentDate{...}` in each main document, then call `\MakeAssignmentCover` immediately after `\begin{document}`.
- Stable cover metadata is: Amirkabir University of Technology (Tehran Polytechnic), Faculty of Computer Engineering, the course `طراحی مدارهای مجتمع پرتراکم پیشرفته`, student `محمد خلیلی اصل`, and instructor `دکتر مهدی صدیقی`. Update these shared values only when the user explicitly corrects them.
- The cover page has no printed page number. Reset numbering so the first content page is page 1.
- The shared preamble loads the bundled `assets/B-NAZANIN.TTF`. This font has no separate bold face, lacks combining hamza U+0654, and lacks Arabic percent U+066A. The preamble explicitly synthesizes bold and uses locally installed Arial only for localized digits and their required punctuation; Persian prose remains B Nazanin. Avoid unsupported glyphs in document prose (rephrase or use an appropriate supported Persian spelling), and investigate any missing-character warnings rather than silently ignoring them.
- Build from the project root with `powershell -NoProfile -ExecutionPolicy Bypass -File ./build.ps1 -Document 2/main.tex`. Working PDFs, compiler outputs, extracted source text, and preview images belong in `build/`; user-designated final submission PDFs may also be archived in the corresponding assignment directory. `setup-check.tex` is only a typesetting diagnostic, not a submitted solution.
- The final submissions for the first and second Chapter 2 exercise series are `exercises/2/HW01-403131033.pdf` and `exercises/3/HW02-403131033.pdf`, respectively. The number after `HW` identifies the exercise series. Preserve the submission filenames and contents during routine builds and source maintenance. Update a finalized submission only as part of a requested revision or replacement. Compare contents or hashes before reporting that an archived PDF matches a build.
- When creating or modifying LaTeX files, compile with XeLaTeX if the tools are available, and resolve compilation errors, unresolved references, and significant layout problems.
- Repeat compilation when needed to resolve references, or use `latexmk -xelatex`.
- When possible, inspect the PDF for correct B Nazanin rendering, Persian and Latin text direction, inline and display mathematics, and overflowing content.
- Inspect every generated PDF for accidental Latin digits in Persian contexts and for presentation-form Arabic glyphs. Treat either as a typesetting defect unless it falls under an explicit Latin-context exception above.
- If missing tools or fonts prevent compilation or visual inspection, report the limitation explicitly. Do not claim that an unperformed check passed.
- Publish the course notes as one comprehensive PDF assembled from `notes/complete.tex`. Keep editable sources in topic or chapter subfolders under `notes/` and shared settings in `notes/common/`. The subfolders support editing and navigation. Apply `notes/AGENTS.md` to the structure and verification of the course notes.
- Keep exercise series in `exercises/2/` and `exercises/3/`. Update project documentation and build or verification entry points when files move, and verify that referenced inputs exist.

## Normative writing and typesetting references
- For Persian spelling and orthography, use the Academy of Persian Language and Literature's current *Persian Orthography* (`دستور خط فارسی`) as the primary reference.
- For Persian/Latin directionality, digit localization, counters, and XeLaTeX behavior, use the documentation for the installed `xepersian` version and verify the rendered PDF.
- For scientific quantities, symbols, numerical values, and units, follow the current BIPM *SI Brochure* and implement the conventions through `siunitx` where possible.
- Prefer current primary or official standards and documentation. If a style requirement is uncertain, verify it before editing submission files and record any new persistent project convention in this file.

## Source discovery workflow
- Use focused text search and direct inspection of the textbook, slides, notes, and exercise sources for project work.
- Graphify is paused for this project. Use or rebuild its graph only when the user explicitly requests it.

## Academic reference descriptions
- In exercise solutions and study booklets, avoid the Persian word "محلی" and workspace-relative descriptions such as "نسخه محلی" or "اسلایدهای محلی". Identify each cited resource for an external reader by its verified title, author or organization, edition or version, year when known, and relevant section, page, or slide. Do not invent missing bibliographic metadata.
