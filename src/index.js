import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NewsSummary } from './app';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper)

ReactDOM.render(<NewsSummary/>, document.getElementById('root'))