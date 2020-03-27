

import { React } from '../chunk-e';
import { ResponsiveContext } from '../context/ResponsiveContext';
import { createRo } from '../utils/Utils';


export class ResponsiveListener extends React.Component {

  static contextType = ResponsiveContext;

  render () {

    if (this.props.children.length === 0) {
      return (null);
    }

    return this.props.children;
  }

  componentDidMount () {

    const { roCreator, roResize } = this.props;
    const ro = createRo(roCreator, roResize);

    this.unsubscriber = this.context.register(ro);
  }

  componentWillUnmount () {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }
}