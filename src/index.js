import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'turn.js';

import './styles.css';

import Turn from './Turn.js';

const pages = [
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg',
];

const App = () => {
  const options = {
    width: '100%',
    height: '98dvh',
    autoCenter: true,
    display: 'single',
    acceleration: true,
    elevation: 98,
    gradients: true,
    when: {
      turned: function (e, page) {
        console.log('Current view: ', $(this).turn('view'));
      },
    },
  };

  return (
    <Turn options={options} className='magazine'>
      {pages.map((page, index) => (
        <div key={index} className='page'>
          <img src={page} alt='' />
        </div>
      ))}
    </Turn>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
