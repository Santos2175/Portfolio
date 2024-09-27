import chatApp from '../../assets/img/chatApp.png';
import devSocialApp from '../../assets/img/devSocialApp.png';
import filteringSystem from '../../assets/img/filteringSystem.png';
import shoesWebsite from '../../assets/img/shoesWebsite.png';
import shoppingCart from '../../assets/img/shoppingCart.png';
import hateTextDetection from '../../assets/img/hateTextDetection.png';
import dynamicForm from '../../assets/img/dynamicForm.png';
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
    image: devSocialApp,
    codeLink: 'https://github.com/Santos2175/Dev-Social-App',
    liveLink: 'https://dev-social-app.onrender.com/',
    isLiveDisabled: false,
  },
  {
    id: 2,
    title: 'Chat App',
    image: chatApp,
    codeLink: 'https://github.com/Santos2175/Chat-App',
    liveLink: 'https://chat-app-qo06.onrender.com/login',
    isLiveDisabled: false,
  },
  {
    id: 3,
    title: 'Shopping-Cart',
    image: shoppingCart,
    codeLink: 'https://github.com/Santos2175/Shopping-Cart',
    liveLink: 'https://shopping-cart-henna-ten.vercel.app/',
    isLiveDisabled: false,
  },
  {
    id: 4,
    title: 'Filtering-System',
    image: filteringSystem,
    codeLink: 'https://github.com/Santos2175/Filtering-System',
    liveLink: 'https://filtering-system-omega.vercel.app/',
    isLiveDisabled: false,
  },
  {
    id: 5,
    title: 'Shoes Website',
    image: shoesWebsite,
    codeLink: 'https://github.com/Santos2175/SHOES-WEBSITE',
    liveLink: 'https://shoes-website-six.vercel.app/',
    isLiveDisabled: false,
  },
  {
    id: 6,
    title: 'Hate text detection',
    image: hateTextDetection,
    codeLink: 'https://github.com/Santos2175/toxicFrontend',
    liveLink: 'https://your-live-site.com/project-one',
    isLiveDisabled: true,
  },
  {
    id: 7,
    title: 'Dynamic Form',
    image: dynamicForm,
    codeLink: 'https://github.com/Santos2175/Dynamic-Form',
    liveLink: 'dynamic-form-azure.vercel.app/',
    isLiveDisabled: false,
  },
];
