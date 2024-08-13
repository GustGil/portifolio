import style from "./sobreMim.module.css"
import htmlLogo from "./logos/HTMLlogo.png"
import cssLogo from "./logos/CSS3_logo.svg.png"
import jsLogo from "./logos/JavaScript-logo.png"
import reactLogo from "./logos/react_logo-512.webp"
import figmaLogo from "./logos/Figma-logo.svg"




function SobreMim(){
    return(
        <div className={style.gradient} id='sobreMim'>
            <div className={style.externSobre}>
                <div className={style.textSobre}>
                    <h1 style={{fontWeight: "300",color: "#ffffff"}}>&lt; Sobre Mim /&gt;</h1>
                    <p style={{fontWeight: "300",color: "#ffffff"}}>
                        Tenho 18 anos, sou desenvolvedor front-end,< br/>
                        trabalho com <span style={{fontWeight: "500",color: "#FCEB57"}}>HTML, CSS, JavaScript, React </span>e <br />
                        faço os design dos sites no <span style={{fontWeight: "500",color: "#FCEB57"}}>Figma</span>!
                    </p>
                    <p style={{fontWeight: "300",color: "#ffffff"}}>
                        Adoro o desenvolvimento e design de sites,< br/>
                        não me contento com o pouco, sempre estou < br/>
                        buscando novas tecnologias que posso emplementar< br/>
                        um projeto e novos designs de paginas!
                    </p>
                </div>
                <div className={style.boxImg}>
                    <div><img src={htmlLogo} alt="HTML" style={{width:"123px",height:"140px"}} className={style.img}/></div>
                    <div><img src={cssLogo} alt="CSS" style={{width:"140px",height:"140px"}} className={style.img} /></div>
                    <div><img src={jsLogo} alt="JavaScript" style={{width:"140px",height:"140px"}} className={style.img} /></div>
                    <div><img src={reactLogo} alt="React" style={{width:"140px",height:"140px"}} className={style.img} /></div>
                    <div><img src={figmaLogo} alt="Figma" style={{width:"140px",height:"140px"}} className={style.img} /></div>
                </div>
            </div>
        </div>
    )

}
export default SobreMim