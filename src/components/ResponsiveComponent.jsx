
import { React } from '../chunk-e';
import { ResponsiveContext } from '../context/ResponsiveContext.jsx';
import { createRo } from '../utils/Utils';


class ResponsiveComponent extends React.Component {

  static contextType = ResponsiveContext;

  state = {
    renderCounter: 0
  }

  render () {

    if (this.state.renderCounter === 0) {
      return (null);
    }

    return React.createElement(this.props.component, this.calculatedProps);
  }

  componentDidMount () {

    const that = this;
    const { toProps, originProps } = this.props;

    function roResize (resolvedRo) {
      const props = toProps(resolvedRo, originProps);
      that.calculatedProps = Object.assign(props, originProps)
      that.setState({ renderCounter: (that.state.renderCounter + 1) });
    }

    const ro = createRo(this.props.roCreator, roResize);
    this.unsubscriber = this.context.register(ro);
  }

  componentWillUnmount () {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }
}


export function makeResponsive (component, roCreator, toProps = (x => x)) {
  return (props = {}) => (
    <ResponsiveComponent component={component} roCreator={roCreator} toProps={toProps} originProps={props} />
  )
}
