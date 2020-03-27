
import { React, ResponsiveContainers } from '../chunk-e';
import { ResponsiveContext } from '../context/ResponsiveContext';


export class ResponsiveContainer extends React.Component {

  static contextType = ResponsiveContext;

  render () {

    let { container } = this.props;
    container = container.isResponsiveContainer ? container : new ResponsiveContainers.Container(this.props.container);

    if (!this.context) {
      throw new Error('Parent container is undefined');
    }

    this.unsubscriber = this.context.register(container);

    return (
      <ResponsiveContext.Provider value={container}>
        { this.props.children }
      </ResponsiveContext.Provider>
    )
  }

  shouldComponentUpdate () {
    return false;
  }

  componentWillUnmount () {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

}
