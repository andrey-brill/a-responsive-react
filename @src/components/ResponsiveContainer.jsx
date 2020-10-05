
import { React, AResponsiveContainers } from '../chunk-e';
import { ResponsiveContext } from '../context/ResponsiveContext.jsx';
import { createRo, isFunction } from '../utils/Utils';


export class ResponsiveContainer extends React.Component {

    static contextType = ResponsiveContext;

    render () {

        if (!this.container || !this.container.isInitialized) {
            return (null);
        }

        return (
            <ResponsiveContext.Provider value={this.container}>
                { this.props.children }
            </ResponsiveContext.Provider>
        )
    }

    shouldComponentUpdate () {
        return false;
    }

    componentDidMount() {

        this.unsubscribers = [];

        const { gridWidth, gridHeight, top, listenResizeOf } = this.props;

        this.container = new AResponsiveContainers.ResponsiveContainer({
            gridWidth,
            gridHeight,
            top,
            onInitialize: () => {
                this.forceUpdate();
            }
        });

        if (listenResizeOf) {
            this.unsubscribers.push(this.container.listenResizeOf(listenResizeOf));
        }

        const { roCreator, roResize, roElement = listenResizeOf } = this.props;

        if (roCreator || roResize) {

            if (!roElement) {
                throw new Error('roElement is undefined');
            }

            const ro = createRo(roCreator, roResize);
            this.unsubscribers.push(this.container.register(roElement, ro));
        }

        if (this.context && this.props.onParent) {
            const u = this.props.onParent(this.context, this.container);
            if (isFunction(u)) {
                this.unsubscribers.push(u);
            }
        }
    }

    componentWillUnmount () {

        for (let u of this.unsubscribers) {
            u();
        }
        this.unsubscribers = [];

        if (this.container) {
            this.container.dispose();
        }
    }

}
