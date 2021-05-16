import "./Main.css"
import hello from "../../assets/hello.png"
import Chart from "../charts/Charts"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar, faUser, faHandshake} from '@fortawesome/free-regular-svg-icons'
import { faAlignCenter, faUserEdit } from "@fortawesome/free-solid-svg-icons";
// import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons'


const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="Boas Vindas"/>
                    <div className="main__greeting">
                        <h1>Bem vindo!</h1>
                        <p>Dashboard do Administrador</p>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <i className="text-lightblue">
                            <FontAwesomeIcon icon={faUser}/>
                        </i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Número de funcionários
                            </p>
                            <span className="font-bold text-title">100</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="text-red">
                            <FontAwesomeIcon icon={faCalendar}/>
                        </i>
                        <div className="card_inner">
                            <p className="text-primary-p">Horas trabalhadas</p>
                            <span className="font-bold text-title">100</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="text-green">
                            <FontAwesomeIcon icon={faHandshake}/>
                        </i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de contratos assinados</p>
                            <span className="font-bold text-title">100</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="text-yellow">
                            <FontAwesomeIcon icon={faAlignCenter}/>
                        </i>
                        <div className="card_inner">
                            <p className="text-primary-p">Pilares</p>
                            <span className="font-bold text-title">100</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>
                                  Estatísticas do contratos  
                                </h1>
                            </div>
                            <i>
                                <FontAwesomeIcon icon={faUserEdit}/>
                            </i>
                        </div>
                        <Chart/>
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                Relatório de estatística 
                            </div>
                            <i>
                                <FontAwesomeIcon icon={faUser}/>
                            </i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Custo</h1>
                                <p>R$: 200.000,00</p>
                            </div>
                            <div className="card2">
                                <h1>Custo</h1>
                                <p>R$: 200.000,00</p>
                            </div>
                            <div className="card3">
                                <h1>Custo</h1>
                                <p>R$: 200.000,00</p>
                            </div>
                            <div className="card4">
                                <h1>Custo</h1>
                                <p>R$: 200.000,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;