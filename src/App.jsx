import Weather from "./components/weather"
import back from "./assets/images/bac1.jpg"


function App(){
  return(
    <>
    
    
    <div className="app" style={{backgroundImage:`url(${back})`}}>
   
   <h1 style={{fontSize:"40px",color:"#fff"}}>Today's Forecast</h1>
   
   <Weather></Weather>

</div>
    </>
    
    
  )
}
export default App