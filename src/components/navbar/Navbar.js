import "./Navbar.css";
import avatar from "../../assets/bussiness-man.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i> <FontAwesomeIcon icon={faBars}/></i>
            </div>
            <div className="navbar__left">
                {/* <a href="#">Cadastro de Funcionários</a>
                <a href="#">Cadastro de contrato</a>
                <a href="#">Lista de contratos</a>
                <a href="#">Estatística</a> */}
            </div>
            <div className="navbar__right">
                {/* <a href="#">
                    <i><FontAwesomeIcon icon={faSearch}/></i>
                </a>
                <a href="#">
                    <i><FontAwesomeIcon icon={faClock}/></i>
                </a> */}
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"></img>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;