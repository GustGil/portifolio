import Lottie from "lottie-react"
import AnimationDev from "../assets/Animation - 1722540443025.json"
import style from "./landingPage.module.css"
import { Link } from "react-scroll";

function Text(){
    return(
        <div className={style.externalText}>
            <div className={style.innerText}>
                <div>
                    <h1 style={{fontWeight: "300",color: "#ffffff"}}>Ola<br/>
                    Meu nome é <span style={{fontWeight: "500",color: "#FCEB57"}}>Gustavo</span>,<br/>
                    mas voce pode me <br/>  chamar de 
                    <span style={{fontWeight: "500",color: "#FCEB57"}}> Gil</span>!</h1>
                    <h3 style={{fontWeight: "300",color: "#949191"}}>
                        &gt; Desenvolvedor front-end, web designer
                    </h3>
                </div>
                <div>
                    <h2 style={{fontWeight: "300",color: "#ffffff"}}>Eleve o nivel do seu negocio com o <br/>
                    design de sites de qualidade!<span style={{fontWeight: "500",color: "#FCEB57"}}> Entre em Contato</span></h2>
                    <h3 className={style.contatoButton}>
                        <Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>&lt; contatos /&gt;</Link>
                    </h3>
                </div>
            </div>
            <Lottie animationData={AnimationDev} className={style.animationDev}/>
        </div>
    )
}
export default Text