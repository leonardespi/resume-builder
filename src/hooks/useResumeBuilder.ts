import { useState } from 'react';
import type { ResumeData, PdfConfig } from '../types';

const defaultResume: ResumeData = {
  contact: {
    fullName: 'Jane Doe',
    headline: 'Software Engineer',
    phone: '+52 55 1234 5678',
    email: 'jane.doe@example.com',
    location: 'CDMX, MX',
    website: 'https://janedoe.dev',
    linkedin: 'https://www.linkedin.com/in/janedoe'
  },
  education: [
    { school: 'Harvard University', degree: 'B.Sc. Computer Science', startDate: '2016', endDate: '2020', notes: 'GPA: 3.8/4.0', location: 'Cambridge, MA' }
  ],
  experience: [
    { company: 'Acme Corp', title: 'Frontend Engineer', startDate: '2022', endDate: 'Present', location: 'Remote', bullets: 'Built modern UI with React and Chakra UI\nDrove performance improvements (TTI -30%)' },
    { company: 'Startup XYZ', title: 'Software Engineer', startDate: '2020', endDate: '2022', location: 'CDMX', bullets: 'Implemented CI/CD pipelines\nLed migration to TypeScript' }
  ],
  projects: [
    { name: 'Resume Builder', url: 'https://github.com/you/resume-builder', description: 'ATS-friendly PDF export\nDynamic forms with React' }
  ],
  skills: 'React, TypeScript, Chakra UI, Node.js, REST APIs, Git, Testing'
};

const defaultPdfConfig: PdfConfig = {
  fontSize: 10.5,
  asLinks: {
    email: true,
    linkedin: true,
    website: true
  }
};

export function useResumeBuilder() {
  const [form, setForm] = useState<ResumeData>(defaultResume);
  const [compiled, setCompiled] = useState<ResumeData | null>(defaultResume);
  const [config, setConfig] = useState<PdfConfig>(defaultPdfConfig);

  const compile = () => {
    // snapshot form to compiled
    setCompiled(JSON.parse(JSON.stringify(form)));
  };

  return {
    form, setForm,
    compiled,
    compile,
    config, setConfig,
  };
}
