import "./Layout.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ProductSlider from '../Product_Slider/ProductSlider'
import Promo from "../Promo/Promo";
import MobileMenu from "../Mobile_Menu/MobileMenu";

export default function Layout() {
    return (
        <div id="main-layout">
            <header>
                <Header />
            </header>
            <main>
                <Hero/>
                <ProductSlider/>
                <Promo/>
            </main>
            <MobileMenu/>
        </div>
    );
}
