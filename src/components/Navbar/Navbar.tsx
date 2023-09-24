import React, { useState } from 'react';
import './Navbar.css';
import MenuData, { MenuItem } from './MenuData';

interface NavbarState {
  clicked: boolean;
}

const Navbar: React.FC = () => {
  const [state, setState] = useState<NavbarState>({ clicked: false });

  const handleClick = () => {
    setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  return (
    <nav className='NavbarItems'>
      <div className='ImgLogo'>
        <img src='/src/assets/images/levos.png' alt='Logo' />
      </div>
      <div className='menu-burger' onClick={handleClick}>
        <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuData.map((item: MenuItem, index: number) => (
          <li key={index}>
            <a href={item.url} className={item.cName}>
              {item.icon && <i className={item.icon} />}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
