
import { ResponsiveContainers } from '../chunk-e';


export function createRo (roCreator, roResize) {

    const ro = isFunction(roCreator) ? roCreator(ResponsiveContainers.rv) : roCreator;

    if (!roResize) {
        return ro;
    }

    if (ro.onResize) {
        throw new Error('onResize already defined');
    }

    ro.onResize = roResize;

    return ro;
}

function isFunction (obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
}