
import { ABundle, Chunk } from 'a-bundle';
import MODULES from '../src/modules.js';
import CHUNK_NAME from '../src/chunk-name.js';


const chunk = new Chunk();
chunk.putAll(MODULES);

ABundle.put(CHUNK_NAME, chunk);

export default chunk;