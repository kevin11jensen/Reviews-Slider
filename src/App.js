import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TweenLite, Power3 } from 'gsap';
import './App.css';

import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';

import { testimonials } from './testimonials';

function App() {

  let testimonials = useRef(null);

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: true,
    isActive5: false,
    isActive6: false,
    isActive7: false
  })

  useEffect(() => {
    TweenLite.to(testimonials.children[0], 0, {
      opacity: 1
    });
  }, []);

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonials.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonials.children[index], duration, {
      opacity: 1,
      delay: 1
    });
  };

  return (
    <div className="App">
      hello from app
    </div>
  );
}

export default App;
