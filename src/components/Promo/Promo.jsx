import ContentButton from "../Content_Button/ContentButton";
import './Promo.scss'
export default function Promo() {
    return (
        <section id="promo">
                <h3>Feel the excellent wet braking <br/> with Driveways!</h3>
                <ContentButton title='Watch All Videos'/>
            <iframe
                src="https://www.youtube.com/embed/fgXgcLIIsjc"
                frameborder="0"
                title="Youtube Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </section>
    );
}
