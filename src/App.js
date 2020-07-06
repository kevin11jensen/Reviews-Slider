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

  const nextSlide = () => {
    if (testimonials.children[0].classList.contains('active')) {
      setState({isActive1: false, isActive2: true});

      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (testimonials.children[1].classList.contains('active')) {
      setState({isActive2: false, isActive3: true});

      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (testimonials.children[2].classList.contains('active')) {
      setState({isActive3: false, isActive4: true});

      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  }

  const prevSlide = () => {
    if (testimonials.children[0].classList.contains('active')) {
      setState({isActive1: false, isActive3: true});

      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (testimonials.children[1].classList.contains('active')) {
      setState({isActive2: false, isActive1: true});

      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (testimonials.children[2].classList.contains('active')) {
      setState({isActive2: true, isActive3: false});

      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  }


  return (
    <div className="App">
      <Reviews>
        <div className = 'arrow-left' onClick = {prevSlide}>
          <img src = {leftArrow} alt = 'left arrow' />
        </div>
        <div className = 't-content'>
          <ul ref = {el => (testimonials = el)}>
            <li className = {state.isActive1 ? 'active' : ''}>
              <div className = 'content-inner'>
                <p className = 'text'>{testimonials[0].text}</p>
                <h3 className = 'name'>{testimonials[0].name}</h3>
                <h4 className = 'location'>{testimonials[0].location}</h4>
              </div>
            </li>
            <li className = {state.isActive2 ? 'active' : ''}>
              <div className = 'content-inner'>
                <p className = 'text'>{testimonials[1].text}</p>
                <h3 className = 'name'>{testimonials[1].name}</h3>
                <h4 className = 'location'>{testimonials[1].location}</h4>
              </div>
            </li>
            <li className = {state.isActive3 ? 'active' : ''}>
              <div className = 'content-inner'>
                <p className = 'text'>{testimonials[2].text}</p>
                <h3 className = 'name'>{testimonials[2].name}</h3>
                <h4 className = 'location'>{testimonials[2].location}</h4>
              </div>
            </li>
            <li className = {state.isActive4 ? 'active' : ''}>
              <div className = 'content-inner'>
                <p className = 'text'>{testimonials[3].text}</p>
                <h3 className = 'name'>{testimonials[3].name}</h3>
                <h4 className = 'location'>{testimonials[3].location}</h4>
              </div>
            </li>
            <li className = {state.isActive5 ? 'active' : ''}>
              <div className = 'content-inner'>
                <p className = 'text'>{testimonials[4].text}</p>
                <h3 className = 'name'>{testimonials[4].name}</h3>
                <h4 className = 'location'>{testimonials[4].location}</h4>
              </div>
            </li>
            <li className = {state.isActive6 ? 'active' : ''}>
              <div className = 'content-inner'>
                <p className = 'text'>{testimonials[5].text}</p>
                <h3 className = 'name'>{testimonials[5].name}</h3>
                <h4 className = 'location' >{testimonials[5].location}</h4>
              </div>
            </li>
            <li className = {state.isActive7 ? 'active' : ''}>
              <div className = 'content-inner'>
                <p className = 'text'>{testimonials[6].text}</p>
                <h3 className = 'name'>{testimonials[6].name}</h3>
                <h4 className = 'location'>{testimonials[6].location}</h4>
              </div>
            </li>
          </ul>
        </div>
        <div className = 'arrow-right' onClick = {nextSlide}>
          <img src = {rightArrow} alt = 'right arrow' />
        </div>
      </Reviews>
    </div>
  );
}

export default App;

const Reviews = styled.div `
  
  .arrow-left {

  }
  .arrow-right {

  }
  .t-content {

    ul {

      li {

        .content-inner {

          .text {

          }
          .name {

          }
          .location {

          }
        }
      }
    }
  }
`