
import { AResponsiveContainers } from '../chunk-e';


export function createRo (roCreator, roResize) {

    const ro = isFunction(roCreator) ? roCreator(AResponsiveContainers.rv) : roCreator;

    if (!roResize) {
        return ro;
    }

    if (ro.onResize) {
        throw new Error('onResize already defined');
    }

    ro.onResize = roResize;

    return ro;
}

export function isFunction (obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
}