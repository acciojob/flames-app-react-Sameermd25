import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
            const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [flameResult, setFlameResult] = useState("");
  function flamesLogic(n1,n2){
    if (n1 === "" || n2 === "") {
      return "Please Enter valid input";
    }
    let flamesArr=["Siblings","Friend","Love","Affection","Marriage","Enemy"]
    
    let a1=n1.split("");
    let a2=n2.split("");
    for(let i=0;i<a1.length;i++){
        let currIndx=a2.indexOf(a1[i])
        if(currIndx!=-1){
          a1[i]="";
          a2[currIndx]="";
        }
    }
    let size=a1.filter((ch)=>ch!="").length+a2.filter((ch)=>ch!="").length
    return flamesArr[size%6];
  }
        return(
            <div id="main">
                           <h3>Flames:</h3>
            
            <form onSubmit={(e) => {
                e.preventDefault();
                let resultLogic = flamesLogic(name1, name2);
                setFlameResult(resultLogic)
            }}>
                <input type='text' placeholder='name1' onChange={(e) => setName1(e.target.value)} />
                <input type='text' placeholder='name2' onChange={(e) => setName2(e.target.value)} />
                <input type='submit' value='calculate_relationship' />
            </form>
            <button onClick={()=>{
              setName1("")
              setName2("")
              setFlameResult("")
            }
            }>clear</button>
            <h3>{flameResult}</h3>
            </div>
        )
    }
}


export default App;
