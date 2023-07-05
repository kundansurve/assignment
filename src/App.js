import "./styles.css";
import {useState} from 'react';
export default function App() {
  const [state,setState]=useState(4);
  return (
    <div className="App" style={{color:"#707070",fontWeight:"700",padding:"24px", backgroundColor:"#24232B"}}>
      <div style={{color:"white", display:"flex",justifyContent:"space-between", }}> PS3SVBIA 
      <span>
        copy
</span></div>
      <div >
      <div style={{fontSize:"20px",margin:"6px auto", display:"flex",justifyContent:"space-between"}}>
      <span style={{}}>Character Length</span>
        <span style={{color:"white"}}>
          {state}
        </span>
        </div>
        <input onChange={(e)=>{setState(e.target.value)}}  style={{width:"100%"}} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
        </div>
      <div style={{fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
        <div style={{margin:"6px"}}><input class="input-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> I have a bike</label>
      </div>
      <div style={{margin:"6px"}}><input class="input-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> I have a bike</label>
      </div>
      <div style={{margin:"6px"}}><input class="input-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> I have a bike</label>
      </div>
      <div style={{margin:"6px"}}><input class="input-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> I have a bike</label>
      </div>
      </div>
      <div style={{padding:"1em",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span>STRENGTH</span>
        <span>___</span>
      </div>
      <button style={{backgroundColor:"#2A8B8B", padding:"1em", borderRadius:"10px", border:"none",margin:"6px", margin:"auto", width:"100%"}}>
        GENERATE
      </button>
    </div>
  );
}
