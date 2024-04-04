export interface ISource {
  title: string;
  link: string;
}

const sources: ISource[] = [
  {
    title: 'What is accessibility?',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility',
  },
  {
    title: 'Website Accessibility for Blind Folks',
    link: 'https://blog.hubspot.com/website/website-accessibility-for-blind',
  },
  {
    title: 'WAI-ARIA Overview',
    link: 'https://www.w3.org/WAI/standards-guidelines/aria/',
  },
  {
    title: 'Complete guide to Narrator',
    link: 'https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1',
  },
  {
    title: 'Chapter 1: Introducing Narrator',
    link: 'https://support.microsoft.com/en-us/windows/chapter-1-introducing-narrator-7fe8fd72-541f-4536-7658-bfc37ddaf9c6',
  },
];

export default sources;
