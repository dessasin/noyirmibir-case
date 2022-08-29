import './ProductSlideCard.scss'
import SliderButton from '../Slider_Button/SliderButton'
export default function ProductSlideCard(props) {

  return (
    <div className="slide_card">
        <div className="slide_card_content">
        <h5>{props.title}</h5>
        <p>{props.content}</p>
        </div>
        <div className='slide_card_actions'>
            <SliderButton title="Learn More" primary={false}/>
            <SliderButton title="Find A Dealer" primary={true}/>
        </div>
    </div>
  )
}
