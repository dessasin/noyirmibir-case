import './Hero.scss'
import ContentButton from '../Content_Button/ContentButton'
export default function Hero() {
  return (
    <section className='hero' >
      <div className="hero_content">
            <h1>Nothing can stop <br></br>you</h1>
            <ContentButton title="Find Out More"/>
      </div>
    </section>
  )
}
