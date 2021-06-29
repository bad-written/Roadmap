import _ from 'lodash';
import printMe from './print.js';

import Icon from './search.png';

import './style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack-demo'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
