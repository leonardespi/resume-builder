import { useState } from 'react';
import type { ResumeData, PdfConfig } from '../types';

const defaultResume: ResumeData = {
  contact: {
    fullName: 'Leonardo Espinosa',
    headline: 'Automation Test Lead',
    phone: '+52 55 1234 5678',
    email: 'leointhecode@gmail.com',
    location: 'CDMX, MX',
    website: 'https://leonardespi.me',
    linkedin: 'https://www.linkedin.com/in/leonardespi'
  },
  education: [
    { school: 'UNAM', degree: 'B.Sc. Linguistics', startDate: '2025', endDate: 'Present', notes: 'GPA: 4.0/4.0', location: 'CDMX, MX' },
    { school: 'COS', degree: 'A.Sc. Informatics', startDate: '2017', endDate: '2019', notes: 'GPA: 3.9/4.0', location: 'CDMX, MX' },
    { school: 'UTEL', degree: 'B.Sc. Computer Engineering', startDate: '2021', endDate: '2025', notes: 'GPA: 3.8/4.0', location: 'CDMX, MX' },
    { school: 'ISTQB', degree: 'Certified Tester Foundation Level (CTFL)', startDate: '2024', endDate: '2024', notes: '100%', location: 'CDMX, MX' },
    { school: 'Google', degree: 'Google Cloud Computing Foundations', startDate: '2024', endDate: '2024', notes: '100%', location: 'Remote' },
    { school: 'Postman', degree: 'Postman API Fundamentals Student Expert', startDate: '2024', endDate: '2024', notes: '100%', location: 'Remote' },
    { school: 'Google', degree: 'BigQuery: Analytics & Machine Learning', startDate: '2021', endDate: '2021', notes: '100% & 4th place', location: 'Google CDMX' },
    { school: '', degree: '', startDate: '', endDate: '', notes: '', location: '' },
    

  ],
  experience: [
    { company: 'Zurich Insurance', title: 'L4 Test Automation Lead', startDate: 'Jun 2025', endDate: 'Present', location: 'Hybrid', bullets: 'Automated testing with Python, Selenium and Guidewire\nManually tested complex insurance workflows on tight deadlines\nPerformed testing on LLM Model with red teaming techniques\nUsed Azure DevOps pipeline to ensure CI / CD\nPerformed regression testing for minor and major releases.\nMigrated legacy test cases to a new environment.\nLed a QA team of 3 in Agile Development' },
    { company: 'Applica Inc', title: 'L3 Test Automation Engineer', startDate: 'Jun 2024', endDate: 'June 2025', location: 'Remote', bullets: 'Automated testing with CodeceptJS, Appium, Robot Framework, and Selenium — cut manual effort by 4 hours/sprint.\nImproved test speed by 30% on new products via TestRail-based plans and cases.\nDesigned test plan and strategy reaching 95% of requirements coverage with zero critical defects escaping prod.\nRan cross-browser/device tests with Sauce Labs to ensure consistent UX.\nLogged and tracked 300+ defects, contributing to a 30% reduction in post-release critical bugs.\nConducted UX testing with AXE devtools to validate usability and accessibility for vulnerable communities.\nBuilt fintech-focused automation frameworks — boosted script reuse and maintainability.\nBuilt and maintained CI/CD pipelines with Azure DevOps & Jenkins — sped up defect detection by 60%.\nLed a team of 5 test engineers in Agile envs — ensured timely delivery of quality deliverables.\nMentored new hires, standardized QA processes — cut ramp-up time by 50%.' },
    { company: 'Wipro', title: 'L2 Test Automation Engineer', startDate: 'Feb 2024', endDate: 'June 2024', location: 'On site', bullets: 'Automated regression tests with Selenium, Cucumber (BDD), and Slash — cut test time by 20%.\nBuilt API tests in Postman to ensure backend reliability.\nMentored 4 junior QAs — boosted team’s automation skills.' },
    { company: 'Keywords Studios', title: 'L2 Test Automation Engineer', startDate: 'Nov 2022', endDate: 'Feb 2024', location: 'On site', bullets: 'Led manual QA for high-traffic game titles — ensured functional & localization quality.\nExecuted full regression testing for major and minor patches and releases.\nAssisted on design of test plan and strategy reducing regression cycle time by 40%.\nPiloted AI-driven testing for internal tools — evaluated efficiency and ethical implications.' },
    { company: 'UNAM', title: 'L1 Automation Engineer', startDate: 'Aug 2020', endDate: 'Nov 2022', location: 'On site', bullets: 'Developed Selenium scripts in Python — saved 6 hours/week in manual tasks.\nCreated RESTful APIs for seamless system integration.\nWorked on debian based Linux servers.' },

  ],
  projects: [
    { name: 'Politcs QA', url: 'https://polqa-framework.github.io/polqa-site/', description: 'A modular CLI framework to evaluate LLM outputs with reproducible runs, curated datasets, and prompt variants—covering both functional and qualitative criteria.' },
    { name: 'README Wizard', url: 'https://www.leonardespi.me/readme-wizard/', description: 'Generate a clean, minimal README (User or Project) that helps you craft professional, elegant markdowns without clutter — simple, structured, and beautiful.' },
    { name: 'Resume Builder', url: 'https://www.leonardespi.me/resume-builder/', description: 'A web application to create Harvard-style, ATS-friendly resumes with pixel-precise PDF export.' },
    { name: 'Blog', url: 'https://www.leonardespi.me/', description: 'Personal website built using Jekyll & Ruby and maintained on Github Pages.' },

  ],
  skills: 'Python, Java, JavaScript, Lua (basic)\nSelenium, Robot-Framework, Appium, Pytest, CodeceptJS, Cucumber, Cypress\nPostman, SoapUI, JMeter\nGit, Jenkins, Azure DevOps, Github Actions, Docker, Kubernetes\nGoogle Cloud Platform, Azure DevOps, Big Data GC\nAdversarial Testing, Red-team Testing, Bias Testing\nSQL Databases, PostgreSQL, Big Data Concepts\nStrategy & plan design, Jira, Confluence, TestRail, Xray, Zephyr'
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
