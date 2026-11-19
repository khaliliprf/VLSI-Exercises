# Comprehensive course notes

Apply the project-root `AGENTS.md` together with these rules for the course notes.

## Learner and teaching approach
- Assume the reader has not passed Digital Electronics and is not confident in mathematics. Introduce the required digital-logic, circuit, algebra, graph-reading, and unit concepts before relying on them.
- Explain new notation and each symbol when it first appears. State what each equation describes, how it follows from the preceding relation, its assumptions and units, and what the result means physically or logically.
- Show meaningful intermediate algebra. Explain sign choices, substitutions, square-root branch selection, limiting cases, and checks rather than relying on unexplained jumps.
- Build intuition with simple examples before applying a concept to MOS devices or VLSI circuits. Keep explanations technically precise and avoid unnecessary simplification that changes the claim.

## Scope and continuity
- Use the designated textbook as the main reference and consult the relevant local lecture slides. Verify section, figure, equation, and page references against the source itself.
- Keep the cover and PDF title focused on the work as a whole. Put textbook coverage in a single source map in the opening study guide, with links to the corresponding topics throughout the notes.
- Write one opening study guide. State that prior Digital Electronics coursework is optional. Explain how to study the notes on a first pass and when reviewing. For each mathematical skill used, identify the assumed starting level, where the skill is taught or reviewed, and the analysis that uses it. Include the circuit and digital-logic foundations in this map. Teach specialized techniques and device conventions near their first use.
- Open each chapter with a short guide to its central questions, prerequisites, and reading sequence. Choose a chapter title that covers all its major topics. Place any section-specific refresher under the heading for the topic it supports.
- Read across source-file boundaries when writing transitions, captions, tables, exercises, and summaries. Refer to the topic by name and link to its chapter or section. Keep local reviews beside their topics and title them by scope. Reserve the final review for a synthesis of the whole work.
- State course-specific assumptions and explain notation changes when a source uses a different convention.
- Give every display formula an introduction and explain its consequence where it is not self-evident. Prefer readable display equations to inline chains of formulas or conditions.
- For operating-region conditions, align the governing relation on the left and its corresponding conditions on the right.

## Equation numbering and references
- Use chapter.section.equation numbering with an automatic reset at each numbered section. Assign a section's heading before its first numbered equation. Number governing relations, reusable results, and equations cited elsewhere. Leave one-off substitutions and intermediate arithmetic unnumbered unless readers need to refer to them.
- Give numbered equations semantic labels and use `\eqref` for internal equation references. Identify textbook or slide numbers explicitly as external references and preserve the original numbering. After reorganizing material, check prose, tables, captions, and exercises for typed internal numbers and verify each changed reference against the intended equation.

## Review
- For changes to the notes, build `notes/complete.tex` until cross-references stabilize. Check for undefined references and duplicate destinations. Inspect the rendered cover, opening guide, chapter openings, section transitions, and final review. Match the table of contents and PDF bookmarks to their destinations. Check page breaks, Persian/Latin direction, and the order of Persian digits and separators in both equation tags and in-text references.
