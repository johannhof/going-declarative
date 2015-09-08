import React from 'react';
import {Spring} from 'react-motion';

export function animateTo(n, t, color){
  const node = document.getElementById(n);
  const target = document.getElementById(t);
  if(node && target){
    const nodeRect = node.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const container = document.createElement('div');
    document.body.appendChild(container);
    React.render(
      <Spring
        defaultValue={{ val: {
            left: nodeRect.left + nodeRect.width / 2,
            top: nodeRect.top + nodeRect.height / 2,
            opacity: 1
        }}}
        endValue={{val: {
          left: targetRect.left + targetRect.width / 2,
          top: targetRect.top + targetRect.height / 2,
          opacity: 0
        }}}>
          {interpolated =>
            <div className="color-ball" style={{
              backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
              left: interpolated.val.left,
              top: interpolated.val.top,
              opacity: interpolated.val.opacity
            }} />
          }
      </Spring>
    , container);
    setTimeout(function(){
      container.remove();
    }, 1000);
  }
}
