import "./Peoples.css"

const Peoples = () => {
    return(
        <div className="boby1">

        <div className="container1">
            <div className="title">
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Nome Completo</span>
                            <input type="text" placeholder="Seu nome" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">CPF</span>
                            <input type="text" placeholder="CPF" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Endereço</span>
                            <input type="text" placeholder="Endereço" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">CEP</span>
                            <input type="text" placeholder="CEP" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">E-mail</span>
                            <input type="text" placeholder="Seu E-mail" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Número de Telefone</span>
                            <input type="text" placeholder="Telefone" required/>
                        </div>
                    </div>
                    <div className="gender-details">
                        <input type="radio" nome="gender" id="dot-1"/>
                        <input type="radio" nome="gender" id="dot-2"/>
                        <input type="radio" nome="gender" id="dot-3"/>
                        <span className="gender-title">Gênero</span>
                        <div className="category">
                            <label for="">
                                <span className="dot one"></span>
                                <span className="gender">Masculino</span>
                            </label>
                            <label for="">
                                <span className="dot two"></span>
                                <span className="gender">Feminino</span>
                            </label>
                            <label for="">
                                <span className="dot three"></span>
                                <span className="gender">Outros</span>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register"/>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Peoples;