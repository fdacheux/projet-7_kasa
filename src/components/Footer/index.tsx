import WhiteLogo from '../../assets/images/white-logo.svg'
import style from './Footer.module.scss'

function Footer() {
    
    return (
        <footer className={style.footer}>
            <img className={style.logo} src={WhiteLogo} alt="kasa logo" />
            <div className={style.div}>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer