import "./Card.css"
function Card(Props){
    return (
    <div className="Card-container">
    <div className="Card-title">
    </div>
    <h2>{Props.title}</h2>
    <div className="Card-image">
    <img src = {Props.my_image} className="image-item"></img>
    </div>
    <div className="Card-link">
    <a href = "" className='card-item-link'>See your collected offers</a>
    </div>
    </div>
  )
}
export default Card;
