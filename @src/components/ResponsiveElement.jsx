
import { React } from '../chunk-e';
import { ResponsiveContext } from '../context/ResponsiveContext.jsx';
import { createRo } from '../utils/Utils';


export class ResponsiveElement extends React.Component {

  static contextType = ResponsiveContext;

  constructor (props) {
    super(props);

    this.el = React.createRef();
  }

  render () {
    return (
      <div ref={this.el} id={this.props.id} className={this.props.className} style={this.props.style} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }

  componentDidMount () {

    if (!this.context) {
        throw new Error('Responsive element is not in any responsive container');
    }

    const { roCreator, roResize, roElement } = this.props;
    const ro = createRo(roCreator, roResize);

    this.unsubscriber = this.context.register(roElement || this.el.current, ro);
  }

  componentWillUnmount () {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }
}
