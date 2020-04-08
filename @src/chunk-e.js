
import { CHUNK_NAME } from './chunk-name.js';
import { ABundle } from 'a-bundle';


const chunk = ABundle.get(CHUNK_NAME);

const React = chunk.get('react');
const AResponsiveContainers = chunk.get('a-responsive-containers');

export { React, AResponsiveContainers };