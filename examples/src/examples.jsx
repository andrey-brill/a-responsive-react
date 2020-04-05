
import { AChunk } from './chunk-i.js';
import { ResponsiveWindow, ResponsiveElement, ResponsiveContainer } from '../../src/index.js';
import ReactDOM from 'react-dom';
import './index.scss';


const React = AChunk.get('react');
const AResponsiveContainers = AChunk.get('a-responsive-containers');

const isEnoughSpaceRv = AResponsiveContainers.rv.is(65, '<=', '50w');

const container = {
    rcResize: AResponsiveContainers.rcResize,
    rxResize: (parentDimensions, calc) => {

        const dimensions = AResponsiveContainers.rcResize(parentDimensions);

        if (calc(isEnoughSpaceRv)) {
            dimensions.width = dimensions.width / 2;
        }

        return dimensions;
    }
 }

const ro = {
    gMenuHeight: '12R',
    onResize: function (rp, calc) {
        const enough = calc(isEnoughSpaceRv);
        rp.gColumnsContainerDirection = enough ? 'row' : 'column';
    }
};

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

const App = () => (
    <ResponsiveWindow>
        <ResponsiveContainer container={container}>
            <ResponsiveElement id="app" roCreator={AResponsiveContainers.commonProperties(ro)}>
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
    </ResponsiveWindow>
);

ReactDOM.render(<App/>, document.getElementById("root"));

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