import Weather from "./components/weather"
import back from "./assets/images/back.jpg"


function App(){
  return(
    <>
   
   
   
   
    
    
    <div className="app">
      <div>
      <h1 className="word-transition "><span>W</span>eatherly</h1>
    
       <h2 style={{fontSize:"40px",color:"#fff"}}>Today's Forecast</h2>
       </div>
   
       <Weather></Weather>

     </div>
    </>
    
    
  )
}
export default App