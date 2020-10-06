
import { AChunk } from './chunk-i.js';
import { ResponsiveElement, ResponsiveContainer } from '../../@src/index.js';
import ReactDOM from 'react-dom';
import './index.scss';


const React = AChunk.get('react');
const AResponsiveContainers = AChunk.get('a-responsive-containers');

AResponsiveContainers.initializeWebContext();

const TextPanel = () => (
    <div className="column">
        <div className="title">
            <span>Responsive title</span>
        </div>
        <div className="sub-title">
            <span>Responsive sub title</span>
        </div>
        <div className="text">
            <div>Responsive test. Some very very very very very very very very very very very very very very very very very very long text.</div>
            <div>Responsive test. Some very very very very very very very very very very very very very very very very very very very very very very very long text.</div>
            <div>Responsive test. Some very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text.</div>
            <div>Responsive test. Some very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text.</div>
            <div>Responsive test. Some very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text.</div>
        </div>
    </div>
);

const IFramePanel = () => (
    <div className="column">
        <div className="title">
            <span>Mobile version</span>
        </div>
        <div className="sub-title">
            <span>Same url as src of IFrame</span>
        </div>
        <div className="iframe-container">
            <iframe src="/"/>
        </div>
    </div>
);

const windowRp = Object.assign(AResponsiveContainers.commonProperties(AResponsiveContainers.WindowPrefix), {
    onResize: (rp) => {
        const { wuw100: width, wuh100: height } = rp;
        const responsiveColumn = AResponsiveContainers.toResponsiveColumn(width, height);
        rp.wColumnsContainerDirection = responsiveColumn.numberOfColumns > 1 ? 'row' : 'column';
    }
});

const rootRp = Object.assign(AResponsiveContainers.commonProperties(), {
    rMenuHeight: '96rx'
});

const onParent = (parentContainer, container) => parentContainer.register({
    width: '100uw',
    height: '100uh',
    onResize: (ro) => {
        const responsiveColumn = AResponsiveContainers.toResponsiveColumn(ro.width, ro.height);
        container.resize(responsiveColumn.width, responsiveColumn.height);
    }
})

const root = document.getElementById('root');

const App = () => (
    <ResponsiveContainer top={true} listenResizeOf={document.body} roCreator={windowRp}>
        <ResponsiveContainer onParent={onParent}>
            <ResponsiveElement id="app" roCreator={rootRp} roElement={root}>
                <div className="menu">
                    <div className="content-container">
                        <div className="content menu-items-container">
                            <div className="menu-item">Responsive Containers</div>
                            <div className="menu-item">Menu</div>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <div className="content columns-container">
                        <TextPanel/>
                        { isInIframe() ? <TextPanel/> : <IFramePanel/> }
                    </div>
                </div>
            </ResponsiveElement>
        </ResponsiveContainer>
    </ResponsiveContainer>
);

ReactDOM.render(<App/>, root);

if (isInIframe()) {
    document.head.parentElement.classList.add('no-scrollbar');
}

function isInIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true; // don't have access to the top window
    }
}