//structure of project

interface Project {
  id: number;
  title: string;
  image: string;
  codeLink: string;
  liveLink: string;
  isLiveDisabled: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/your-repo/project-one',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
  {
    id: 2,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/your-repo/project-one',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
  {
    id: 3,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/your-repo/project-one',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
  {
    id: 4,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/your-repo/project-one',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
  {
    id: 5,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/your-repo/project-one',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
  {
    id: 6,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/your-repo/project-one',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: true,
  },
  {
    id: 7,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/your-repo/project-one',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
];
