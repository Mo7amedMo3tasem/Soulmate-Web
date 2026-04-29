// css
import '../css/components.css';
import '../css/master.css';

import imgLogo from '../images/logo2-removebg-preview.png';

export default function Loader() {
    return (
        <div className="loaderOverlay">
            <div className="loaderBox">
                <img src={imgLogo} alt="logo" className="loaderLogo" />
            </div>
        </div>
    );
}