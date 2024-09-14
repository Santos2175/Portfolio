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
    title: 'DevCommunity',
    image: 'dfa',
    codeLink: 'https://github.com/Santos2175/Dev-Social-App',
    liveLink: 'https://dev-social-app.onrender.com/',
    isLiveDisabled: false,
  },
  {
    id: 2,
    title: 'Chat App',
    image: 'dfa',
    codeLink: 'https://github.com/Santos2175/Chat-App',
    liveLink: 'https://chat-app-qo06.onrender.com/login',
    isLiveDisabled: false,
  },
  {
    id: 3,
    title: 'Shopping-Cart',
    image: 'dfa',
    codeLink: 'https://github.com/Santos2175/Shopping-Cart',
    liveLink:
      'https://shopping-cart-cib196cbi-santos2175s-projects.vercel.app/',
    isLiveDisabled: false,
  },
  {
    id: 4,
    title: 'Filtering-System',
    image: 'dfa',
    codeLink: 'https://github.com/Santos2175/Filtering-System',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
  {
    id: 5,
    title: 'Shoes Website',
    image: 'dfa',
    codeLink: 'https://github.com/Santos2175/SHOES-WEBSITE',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: false,
  },
  {
    id: 6,
    title: 'Hate text detection',
    image: 'dfa',
    codeLink: 'https://github.com/Santos2175/toxicFrontend',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: true,
  },
];
