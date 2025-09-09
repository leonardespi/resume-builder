# Resume Builder (React + TypeScript + Chakra UI + pdfmake)

A minimal, ATS-friendly Harvard-style résumé builder.

## Quick Start

```bash
npm install
npm run dev
```

- **Compile** updates the preview with the current form (not automatic).
- **Export** downloads a PDF generated with **pdfmake** (text-based; no images/canvas).

## Tech
- React + TypeScript
- Chakra UI (light theme)
- pdfmake for PDF
- i18next (English/Spanish)

Project layout:
```
src/
 ├── components/
 ├── hooks/
 ├── pages/
 ├── utils/
 ├── locales/
 └── App.tsx
```

## Notes
- PDF export uses the **last compiled snapshot** to ensure reproducibility.
- Minimal PDF configuration: font size and hyperlink toggles (email, LinkedIn, portfolio).
- Code is modular to allow future AI/ATS integrations.
