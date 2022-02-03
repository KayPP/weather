import "./Card1.css"
function Card1(Props){
  return (
    <div className="Card1-container">
    <div className="Card1-title">
    </div>
    <h2>{Props.title}</h2>
    <div className="Card1-image">
    <div className="Card1-image1">
    <img src = {Props.my_image1} className="image-item1"></img>
    <img src = {Props.my_image2} className="image-item1"></img>
    </div>
    <div className="Card1-image2">
    <img src = {Props.my_image3} className="image-item1"></img>
    <img src = {Props.my_image4} className="image-item1"></img>
    </div>
    <div className="Card1-link">
    <a href = "" className='card1-item-link'>See your collected offers</a>
    </div>
    <h2>Order kar na bhai</h2>
    </div>
    </div>
  )
}
export default Card1;
