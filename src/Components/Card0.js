import "./Card0.css"
function Card0(Props){
  return (
    <div className="Card0-container">
    <div className="Card0-image">
    <div className="Card0-image1">
    <img src = {Props.my_image1} id="img1" className="image-item1"></img>
    <input type = "text" id ="Search" placeholder="Search"></input>
    <img src = {Props.my_image2} id="img2" className="image-item1"></img>
    </div>
    </div>
    </div>
  )
}
export default Card0;
