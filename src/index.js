import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HermeSidebar from './HermeSidebar';
import * as serviceWorker from './serviceWorker';

const sidebarOpen = window.sidebarOpen;
const sidebarSelected = window.sidebarSelected;
const sidebarItems = window.sidebarItems;

ReactDOM.render(<HermeSidebar sidebarOpen={sidebarOpen} sidebarSelected={sidebarSelected} sidebarItems={sidebarItems} />, document.getElementById('sidebarReact'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
