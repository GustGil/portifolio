import style from "./contact.module.css"
import GitHub from "./assets/25231.png"
import Linkedin from "./assets/circle-linkedin-512.webp"
import CV from "./assets/Curriculo_Gustavo_Gil_Gomes.pdf"

function Contact(){
    return(
        <div className={style.gradientBackground} id='contacts'>
            <div className={style.innerContact}>
                <div><h1 style={{fontWeight: "300",color: "#ffffff"}}>
                Entre em contato <br /> comigo e vamos<br /> <span style={{fontWeight: "500",color: "#FCEB57"}}>trabalhar juntos</span>!
                </h1></div>
                <div style={{display:"flex", gap:"50px"}}>
                    <a href="https://github.com/GustGil"><div className={style.boxContacts}><img src={GitHub} style={{width:"50px"}}/></div></a>
                    <a href="https://www.linkedin.com/in/gustavo-gil-b36704261/"><div className={style.boxContacts}><img src={Linkedin} alt="" style={{width:"50px"}}/></div></a>
                    
                </div>
                <div>
                    <a className={style.cvDownload} href={CV} download="Curriculo - Gustavo Gil Gomes.pdf">&lt;Download CV /&gt;</a>
                </div>
            </div>
        </div>
    )

}
export default Contact