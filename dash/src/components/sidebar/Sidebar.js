import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Sidebar.css"
import logo from "../../assets/alfalogo.png"
import {faTimes,
         faHome,
         faBuilding,
         faUserSecret,
         faWrench,
         faArchive,
         faHandshake,
         faQuestion,
         faSignOutAlt,
         faCalendarCheck,
         faPowerOff,
         faMoneyBill,
         faBriefcase,
         faUserCog,
         faFileContract
        } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons';

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
                    <a href="#">Dashboard</a>
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faUserCog}/>
                    </i>
                    <a href="#">Cadastro de Pessoas</a>
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faFileContract}/>
                    </i>
                    <a href="#">Cadastro de contratos</a>
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faWrench}/>
                    </i>
                    <a href="#">Lista de contratos</a>
                </div>
                <div className="sidebar__link">
                    <i>
                        <FontAwesomeIcon icon={faArchive}/>
                    </i>
                    <a href="#">Estatísticas</a>
                </div>                
            </div>
        </div>
    )
}

export default Sidebar;