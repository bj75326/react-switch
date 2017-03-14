/**
 * Created by jibin on 17/3/2.
 */
import React from 'react';
import {render} from 'react-dom';
import Test from './components/Test.js';
import initReactFastClick from 'react-fastclick';

initReactFastClick();

render(<Test />, document.querySelector("#App"));