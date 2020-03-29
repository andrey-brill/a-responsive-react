
import { React, AResponsiveContainers } from '../chunk-e';
import { ResponsiveContext } from '../context/ResponsiveContext';


export class ResponsiveWindow extends React.Component {

  state = {
    initialized: false
  }

  render () {

    if (!this.state.initialized || this.props.children.length === 0) {
      return (null);
    }

    return (
      <ResponsiveContext.Provider value={this.windowContainer}>
        { this.props.children }
      </ResponsiveContext.Provider>
    )
  }

  componentDidMount () {

    let { name, rcResize, rxResize } = this.props;

    this.windowContainer = new AResponsiveContainers.WindowContainer({
      name,
      rcResize,
      rxResize,
      onInitialize: () => this.setState({ initialized: true })
    });

    this.unsubscriber = this.windowContainer.autoResize();
  }

  componentWillUnmount () {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

}
