import style from "./projeto.module.css"

function projeto(){
    return(
        <div className={style.gradient}>
            <div className={style.carrossel}>
                <button className={style.button}>&lt;</button>
                <button className={style.button}>&gt;</button>
            </div>
            <div className={style.descricao}>
                desc
            </div>
        </div>
    )
}
export default projeto