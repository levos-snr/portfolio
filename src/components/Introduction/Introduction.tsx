import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Lewis  Odero,'];
  const jobArray = [...'oftware Developer'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <h1 className='intro__headingPrimary'>
          &nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <img
            src='https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png'
            className='intro__logos'
            alt=''
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={19}
          />
        </h1>
        <h2 className='intro__headingSecondary'>
          Full Stack Developer / Software Developer
        </h2>
        <Link to='/contact' className='intro__button'>
          Contact Me
        </Link>
      </div>
      <div className='intro__right'>
        <div className='right-img'>
          <img src='/src/assets/images/3d.png' alt='3d' />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
