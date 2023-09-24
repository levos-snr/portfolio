import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'01. About Me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='about'>
      <div className='about__left'>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <div className='about__description'>
          Hey! My name is <span className='about__link'>Lewis&nbsp;Odero.</span>{' '}
          Welcome to my digital world, where software development is an art
          form. I&apos;m an enthusiastic explorer who thrives on the excitement
          of solving complex problems and crafting software that leaves a
          lasting impression. Collaborating with brilliant minds to transform
          ideas into impactful digital experiences is where my passion truly
          shines. My journey is marked by a love for data manipulation, the
          creation of software masterpieces, and the relentless pursuit of new
          challenges. I actively contribute to the open-source community, and as
          I approach the culmination of my Computer Science degree at{' '}
          <a
            href='https://Kcau.com'
            target='_blank'
            rel='noreferrer'
            className='intro__link'
          >
            KCAU - University
          </a>
          , I&apos;m on the brink of unveiling a groundbreaking project. Beyond
          that, my world is filled with side projects that are both personally
          fulfilling and avenues for experimenting with innovative ideas and
          cutting-edge technologies.
          <br />
          <br />
          Fun of Gaming sports, outdoor activities, TV series and Japanese
          anime. Join me in this electrifying digital adventure, where every
          click promises excitement and innovation without limits.
          <br />
          <br />
          Here are the few technologies that I&apos;have been working recently:
          <br />
          <ul className='about__skillsList'>
            <li className='about__skillsItems'>Javascript(ES6+)</li>
            <li className='about__skillsItems'>Python</li>
            <li className='about__skillsItems'>HTML5 / CSS</li>
            <li className='about__skillsItems'>Nodejs</li>
            <li className='about__skillsItems'>Expressjs</li>
            <li className='about__skillsItems'>React.js & Redux</li>
            <li className='about__skillsItems'>MongoDB</li>
            <li className='about__skillsItems'>Next.js</li>
            <li className='about__skillsItems'>SQL</li>
            <li className='about__skillsItems'>Tailwind css</li>
          </ul>
        </div>
      </div>
      <div className='about__right'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <img src='/src/assets/images/me.png' alt='me' />
            </div>
            <div className='face2'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-css3' />
              </svg>
            </div>
            <div className='face3'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-javascript' />
              </svg>
            </div>
            <div className='face4'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-mongodb' />
              </svg>
            </div>
            <div className='face5'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-node-dot-js' />
              </svg>
            </div>
            <div className='face6'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-react' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
