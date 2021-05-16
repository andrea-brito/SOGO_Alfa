import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Sidebar.css"
import logo from "../../assets/alfalogo.png"
import {faTimes,
         faHome,
         faUserCog,
         faFileContract,
         faSignal
        } from '@fortawesome/free-solid-svg-icons'
import { faClipboard, faFile } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

const Sidebar = ( {sidebarOpen, closeSidebar}) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"></img>
                </div>
                <i id="sidebarIcon" onClick={() => closeSidebar()}>
                    <FontAwesomeIcon icon={faTimes}/>
                </i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i>
                        <FontAwesomeIcon icon={faHome}/>
                    </i>
                    <Link to='/'>Dashboard</Link>
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faUserCog}/>
                    </i>
                    <Link to='/peoples'>Cadastro de Pessoas</Link>
                    
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faFileContract}/>
                    </i>
                    <Link to='/contract'>Cadastro de contratos</Link>
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faClipboard}/>
                    </i>
                    <a href="#">Lista de contratos</a>
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faSignal}/>
                    </i>
                    <Link to='/estatistica'>Estatísticas</Link>
                </div>                
            </div>
        </div>
    )
}

export default Sidebar;