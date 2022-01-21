import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const ele = React.createContext(h1, null, ['Hello from React'])

    ReactDOM.render(<Root />, root);
})