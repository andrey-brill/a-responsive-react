
import { ABundle, Chunk } from 'a-bundle';
import { CHUNK_NAME } from '../../@src/chunk-name.js';


const AChunk = new Chunk();
AChunk.putAll(window.Modules.default);

ABundle.put(CHUNK_NAME, AChunk);

export { AChunk };