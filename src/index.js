import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import 'turn.js';

import './index.css';
// import './styles.css';

// import Turn from './Turn.js';

// const pages = [
//   'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg',
//   'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg',
//   'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg',
//   'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg',
//   'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg',
//   'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg',
// ];

const App = () => {
  // const options = {
  //   width: '100%',
  //   height: '98dvh',
  //   autoCenter: true,
  //   display: 'single',
  //   acceleration: true,
  //   elevation: 98,
  //   gradients: true,
  //   when: {
  //     turned: function (e, page) {
  //       console.log('Current view: ', $(this).turn('view'));
  //     },
  //   },
  // };

  return (
    // <Turn options={options} className='magazine'>
    //   {pages.map((page, index) => (
    //     <div key={index} className='page'>
    //       <img src={page} alt='' />
    //     </div>
    //   ))}
    // </Turn>

    <div className='flex flex-row'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.9987945805372!2d104.94176913514953!3d11.55418639589777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310956cd6c21950f%3A0xa570b88d1d5d175e!2sBuilding%20J%2C%20Koh%20Pich!5e0!3m2!1sen!2skh!4v1727935865790!5m2!1sen!2skh'
        width='600'
        height='450'
        style={{ border: '0' }}
        allowfullscreen=''
        loading='lazy'
        title='map'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>

      <a href='https://maps.app.goo.gl/a2mVUUjDNyWpkbze7'>
        <p className='font-xl'>Open in Map</p>
      </a>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
