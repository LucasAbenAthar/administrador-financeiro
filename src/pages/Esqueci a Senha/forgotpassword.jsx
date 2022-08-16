import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo (Beta).png";
import "./forgotpassword.css"

function ForgotPassword() {
    return (
        <>
            <div className='background-Image'>
                <header className='Logo'>
                    <img src={Logo} alt="Logo" />
                </header>
                <div className="p-10 pb-lg-20">
                    <div className='App-Main coluna'>
                        <p className='texto'>Recuperação da Senha</p>
                        <p className='info-alerta'>
                            <p className='info'>Coloque seu <span>Email</span> para mandarmos o link de recuperação</p></p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="nome@gmail.com" />
                            </Form.Group>
                        </Form>
                        <div className="lado">
                            <Link className="Entrar" to="/" type="submit">Enviar</Link>
                            <Link className="Voltar" to='/'>Cancelar</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div id='rodape'>
                        <div>
                            <a href='#' className='rodape'>
                                Dificuldades ?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;