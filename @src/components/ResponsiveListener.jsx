

import { React } from '../chunk-e';
import { ResponsiveContext } from '../context/ResponsiveContext.jsx';
import { createRo } from '../utils/Utils';


export class ResponsiveListener extends React.Component {

  static contextType = ResponsiveContext;

  render () {

    const { children } = this.props;
    if (children && children.length > 0) {
      return children;
    }

    return (null);
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