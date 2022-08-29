import './Navbar.scss'
import Navlink from "../Navlink/Navlink";
import { navLinks } from '../../navlinks';
export default function Navbar() {

    return (
        <div className="navbar">
            {navLinks.map((x,index) => {
               return <Navlink key={index} title={x.title} link={x.link} />;
            })}
        </div>
    );
}
