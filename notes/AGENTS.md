# Study booklet instructions

Apply the project-root `AGENTS.md` together with these booklet-specific rules.

## Learner and teaching approach
- Assume the reader has not passed Digital Electronics and is not confident in mathematics. Introduce the required digital-logic, circuit, algebra, graph-reading, and unit concepts before relying on them.
- Explain new notation and each symbol when it first appears. State what each equation describes, how it follows from the preceding relation, its assumptions and units, and what the result means physically or logically.
- Show meaningful intermediate algebra. Explain sign choices, substitutions, square-root branch selection, limiting cases, and checks rather than relying on unexplained jumps.
- Build intuition with simple examples before applying a concept to MOS devices or VLSI circuits. Keep explanations technically precise and avoid unnecessary simplification that changes the claim.

## Scope and continuity
- Use the designated textbook as the main reference and consult the relevant local lecture slides. Verify section, figure, equation, and page references against the source itself.
- Keep each booklet in its own `booklet-NN/` directory and shared LaTeX settings in `common/`.
- Assemble `notes/complete.tex` from the same fragments used by the standalone booklets. Keep chapter, section, equation, figure, table, bibliography, and link numbering coherent in both forms. In the complete edition, chapter 2 continues sequentially across the booklets.
- State course-specific assumptions and explain notation changes when a source uses a different convention.
- Give every display formula an introduction and explain its consequence where it is not self-evident. Prefer readable display equations to inline chains of formulas or conditions.
- For operating-region conditions, align the governing relation on the left and its corresponding conditions on the right.

## Review
- Before delivery, build both the changed standalone booklet and the complete edition. Check Persian digits and decimal-point identifiers, Persian/Latin direction, equations, references, bookmarks, page breaks, and the rendered PDF.
