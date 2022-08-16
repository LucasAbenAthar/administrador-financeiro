import Form from 'react-bootstrap/Form';
import { toAbsoluteUrl } from "../../helpers/AssetHelpers.ts"
import { Link } from "react-router-dom"

function Formulario() {
    return (
        <div className='App-main coluna'>
            <p className='texto'>Entrar na INVEST
                <p id='criacao'>Novo Aqui?<a href="#" target="_blank" rel="noreferrer"> Criar Conta</a></p></p>
            <p className='info-alerta'>
                <p className='info'>Olá novamente</p>coloque seu <span>Email e Senha </span> para prosseguir</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="nome@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha <Link className='senha' to="/ForgotPassword">Esqueceu a Senha ?</Link></Form.Label>
                <Form.Control type="password" placeholder="Nome192@!##" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembre de mim" />
            </Form.Group>
            <Link className="entrar" to='/Dashboard'>Entrar</Link>
            <p className='criacao'>OU</p>
            {/* begin::Google link */}
            <a href='#' className='continuar'>
                <img
                    alt='Logo'
                    src={toAbsoluteUrl('/media/svg/logos/google-icon.svg')}
                />
                Continuar com Google
            </a>
            {/* end::Google link */}

            {/* begin::Google link */}
            <a href='#' className='continuar'>
                <img
                    alt='Logo'
                    src={toAbsoluteUrl('/media/svg/logos/facebook-4.svg')}
                />
                Continuar com Facebook
            </a>
            {/* end::Google link */}

            {/* begin::Google link */}
            <a href='#' className='continuar'>
                <img
                    alt='Logo'
                    src={toAbsoluteUrl('/media/svg/logos/apple-black.svg')}
                />
                Continuar com Apple
            </a>
            {/* end::Google link */}
        </div>
    );
}
export default Formulario;