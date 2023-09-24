interface MenuItem {
  title: string;
  url: string;
  cName: string;
  icon?: string;
}

const MenuData: MenuItem[] = [
  {
    title: 'About Me',
    url: '#',
    cName: 'nav-links',
    icon: 'fa-solid fa-circle-info',
  },
  {
    title: 'My Projects',
    url: '#',
    cName: 'nav-links',
    icon: 'fa-solid fa-book',
  },
  {
    title: 'Contact',
    url: '#',
    cName: 'nav-links',
    icon: 'fa-solid fa-address-book',
  },
  {
    title: 'My Resume',
    url: '#',
    cName: 'nav-links',
    icon: 'fa-solid fa-briefcase',
  },
  {
    title: 'Sign Up',
    url: '#',
    cName: 'nav-links-mobile',
  },
];

export default MenuData;
