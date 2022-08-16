import React, { useState } from "react";
import Logo from "../../../img/Logo.png";
import logo from "../../../img/Logo Side-Bar.png";
import Popup from "../Popup/popup";


/**
* @author
* @function SideMenu 
**/

function SideMenu(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    const [inactive, setInactive] = useState(false);

    const [expand, setExpand] = useState(false);

    const list = document.querySelectorAll('.list');

    function activeLink() {
        list.forEach((item) =>
            item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
        item.addEventListener('click', activeLink));

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div onClick={() => { setInactive(!inactive) }} className="logo">
                    {inactive ? (<img id="Sidebar-Logo" src={logo} alt="Logo" />) : (<img id="Sidebar-Logo" src={logo} alt="logo" />)}
                </div>
                <div onClick={() => { setInactive(!inactive) }} className="toggle-menu-btn">
                    {inactive ? (<i class="bi bi-chevron-double-right"></i>) : (<i class="bi bi-chevron-double-left"></i>)}
                </div>
            </div>
            <div className="sub-categoria"></div>
            <div className="navegation">
                <ul>
                    <li className="list active">
                        <a href="#">
                            <i className="icon bi bi-grid-1x2"></i>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-toggles"></i>
                            <span className="title">Layout</span>
                        </a>
                    </li>
                </ul>
                <div className="sub-categoria">
                    Editar
                </div>
                <ul>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-window-stack"></i>
                            <span className="title">Pagínas
                                <a className="sub-menu">Seus Projetos</a>
                                <a className="sub-menu">Comentários</a>
                            </span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-person-circle"></i>
                            <span className="title">Conta</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-x-circle"></i>
                            <span className="title">Erros
                                <a className="sub-menu">Error404</a>
                                <a className="sub-menu">Error500</a></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-ui-checks-grid"></i>
                            <span className="title">Widgets
                                <a className="sub-menu">Lista</a>
                                <a className="sub-menu">Estatistica</a>
                                <a className="sub-menu">Graficos</a>
                                <a className="sub-menu">Tabela</a>
                                <a className="sub-menu">Misturado</a>
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="sub-categoria">
                    App
                </div>
                <ul>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-chat-left-dots"></i>
                            <span className="title">Chat
                                <a className="sub-menu">Grupos</a>
                                <a className="sub-menu">Equipe</a>
                                <a className="sub-menu">Gerenciamento</a>
                            </span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-robot"></i>
                            <span className="title">Ajuda</span>
                        </a>
                    </li>
                </ul>
                <div className="divider"></div>
                <ul>
                    <li className="list">
                        <a href="#">
                            <i className="icon bi bi-gear"></i>
                            <span className="title">Config</span>
                        </a>
                    </li>
                    <li className="list" onClick={() => setButtonPopup(true)}>
                        <a href="#">
                            <i className="icon bi bi-door-open"></i>
                            <span className="title">Sair</span>
                        </a>
                    </li>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
                </ul><br></br>
            </div>
        </div>
    )
}
export default SideMenu;