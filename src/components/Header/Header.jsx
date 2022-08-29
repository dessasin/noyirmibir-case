import "./Header.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import burgerToggler  from '../../assets/burger-toggler.svg'
export default function Header() {
    const mobileMenuHandler =()=>{
        const menu = document.getElementById('mobile_menu');
        if (menu.classList.contains('mobile_menu-active')) {
            menu.classList.remove('mobile_menu-active');
        }else{
            menu.classList.add('mobile_menu-active');
        }
    }
    return (
        <div id="header">
            <Logo />
            <nav>
                <Navbar />
            </nav>
        <img src={burgerToggler} onClick={mobileMenuHandler} className="mobile_menu_toggler" />
        </div>
    );
}
