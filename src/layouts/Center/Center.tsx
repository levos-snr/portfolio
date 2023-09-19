import React from 'react';
import Introduction from 'components/Introduction/Introduction';
import './center.scss';
import About from '@components/About/About';
import LazyLoad from 'react-lazyload';
import Project from '@components/Projects/Projects';
import OtherProjects from '@components/OtherProjects/OtherProjects';
import Touch from '@components/Touch/Touch';

const Center = () => (
  <div>
    <Introduction />
    <LazyLoad once height={566}>
      <About />
    </LazyLoad>
    <LazyLoad once height={566}>
      <Project />
    </LazyLoad>
    <LazyLoad once height={566}>
      <OtherProjects />
    </LazyLoad>
    <LazyLoad once height={566}>
      <Touch />
    </LazyLoad>
  </div>
);

export default Center;
