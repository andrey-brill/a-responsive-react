
import { ABundle, Chunk } from 'a-bundle';
import { MODULES } from '../@src/modules.js';
import { CHUNK_NAME } from '../@src/chunk-name.js';


const AChunk = new Chunk();
AChunk.putAll(MODULES);

ABundle.put(CHUNK_NAME, AChunk);

export { AChunk };