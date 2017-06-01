import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Mines from './Mine.js';
import TextWidth from './search.js';

const App = () => (
    <MuiThemeProvider>
        <Mines/>
    </MuiThemeProvider> 
);

ReactDOM.render(
    <App/>, document.getElementById('app')
);
