import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import state from "./redux/state";
import {renderEntireFree} from "./render";

renderEntireFree(state);

