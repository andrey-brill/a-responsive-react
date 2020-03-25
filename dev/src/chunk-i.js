
import { ABundle, Chunk } from 'a-bundle';
import CHUNK_NAME from '../../src/chunk-name.js';


const chunk = new Chunk();
chunk.putAll(window.modules);

ABundle.put(CHUNK_NAME, chunk);
