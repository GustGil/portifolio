import style from "./landingPage.module.css"
import Header from "./header"
import Text from "./text"

function LandingPage(){
    return(
        <div className={style.gradientBackground}>
            <Header />
            <Text />
        </div>
    )

}
export default LandingPage