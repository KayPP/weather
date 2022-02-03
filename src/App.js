import './App.css'
import Card from './Components/Card'
import Card1 from './Components/Card1'
import Card0 from './Components/Card0'
import Counter from './Components/Counter.js'
import A1 from "./Images/Navbar/A1.png"
import A2 from "./Images/Navbar/A2.png"
import Ama1 from "./Images/Ama1.jpg"
import Ama2 from "./Images/Ama2.jpg"
import Ama3 from "./Images/Ama3.jpg"
import Ama4 from "./Images/Ama4.jpg"
import Bma1 from "./Images/Bma1.jpg"
import Bma2 from "./Images/Bma2.jpg"
import Bma3 from "./Images/Bma3.jpg"
import Bma4 from "./Images/Bma4.jpg"
import Cma1 from "./Images/Cma1.jpg"
import Cma2 from "./Images/Cma2.jpg"
import Cma3 from "./Images/Cma3.jpg"
import Cma4 from "./Images/Cma4.jpg"
import Dma1 from "./Images/Dma1.jpg"
import Dma2 from "./Images/Dma2.jpg"
import Dma3 from "./Images/Dma3.jpg"
import Dma4 from "./Images/Dma4.jpg"
import Pma1 from "./Images/Pma1.jpg"
import Pma2 from "./Images/Pma2.jpg"
import Pma3 from "./Images/Pma3.jpg"
import Pma4 from "./Images/Pma4.jpg"
function App(){
  let p1 = "Har Ghadi Badal Rahi Hai Roop Zindagi";
  let p2 = "Chav Hai Kabhie Kabhie Hai Dhoop Zindagi";
  let p3 = "Har Pal Yahan, Jee Bhaar Jio";
  let p4 = "Jo Hai Samah, Kal Ho Na Ho";
  let t1 = "Me Pal Do Pal Ka Shayr Hu";
  let t2 = "Pal Do Pal Meri Jawani Hai";
  let t3 = "Pal Do Pal Meri Hasti Hai";
  let t4 = "Pal Do Pal Meri Kahani Hai";
  return (
    //<Counter/>
    <div className='container'>
    <div className="Nav-bar">
    <Card0 my_image1={A1} my_image2={A2}/>
    </div>
    <div className="app-container">
    <Card title={p1} my_image={Ama1}/>
    <Card title={p2} my_image={Ama2}/>
    <Card title={p3} my_image={Ama3}/>
    <Card title={p4} my_image={Ama4}/>
    </div>
    <div className="app-container1">
    <Card1 title={t1} my_image1={Bma1} my_image2={Bma2} my_image3={Bma3} my_image4={Bma4}/>
    <Card1 title={t2} my_image1={Cma1} my_image2={Cma2} my_image3={Cma3} my_image4={Cma4}/>
    <Card1 title={t3} my_image1={Dma1} my_image2={Dma2} my_image3={Dma3} my_image4={Dma4}/>
    <Card1 title={t4} my_image1={Pma1} my_image2={Pma2} my_image3={Pma3} my_image4={Pma4}/>
    </div>
    </div>
  )
}
export default App;
