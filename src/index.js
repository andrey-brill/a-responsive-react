
import { ResponsiveContainers, React } from './chunk-e';


class ResponsiveElement extends React.Component {

    constructor () {
        this.containers = new ResponsiveContainers();
    }

}


export { ResponsiveElement };