import './login.css'
import Logo from '../../img/Logo (Beta).png'

import Formulario from '../../components/layout/Form/form';

function Login() {
    return (
        <div className='background-image'>
            <header className='Logo'>
                <img src={Logo} alt="Logo" />
            </header>
            <div className="p-10 pb-lg-20">
                <Formulario />
                <div id='criacao1'>
                    <div>
                        <a href='#' className='criacao1'>
                            Sobre
                        </a>

                        <a href='#' className='criacao1'>
                            Contato
                        </a>

                        <a href='#' className='criacao1'>
                            Contate-nos
                        </a>
                    </div>
                </div>
            </div>
            {/* end::Footer */}
        </div>
    )
}
export default Login;