import style from "./landingPage.module.css"
import { Link } from "react-scroll";

function Header(){


    return(
        <div className={style.externalHeader}>
            <div className={style.logo}>
                <h1>
                    G.
                </h1>
            </div>
            <div className={style.innerHeader}>
                <div className={style.titles} >
                    <Link to="sobreMim" spy={true} smooth={true} offset={50} duration={500} >Sobre Mim</Link>
                </div>
                {/*<div className={style.titles}>
                    Projetos
                    
                </div>*/}
                <div className={style.titles}>
                    <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} >Contato</Link>

                </div>
            </div>
        </div>
    )
}
export default Header