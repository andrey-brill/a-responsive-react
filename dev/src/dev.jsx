
import { Chunk } from './chunk-i.js';
import { ResponsiveWindow } from '../../src/index.js';

import ReactDOM from 'react-dom';

const React = Chunk.get('react');

ReactDOM.render(<ResponsiveWindow/>, document.getElementById("root"));
