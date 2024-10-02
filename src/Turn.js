import React, { useRef, useEffect } from 'react';
import $ from 'jquery';

const Turn = (props) => {
  let fadeClass = useRef('');

  useEffect(() => {
    if (fadeClass) {
      $(fadeClass).turn(Object.assign({}, props.options));
    }
  }, [props.options]);

  return (
    <div
      className={props.className}
      style={Object.assign({}, props.style)}
      ref={(el) => {
        fadeClass = el;
      }}
    >
      {props.children}
    </div>
  );
};

export default Turn;
