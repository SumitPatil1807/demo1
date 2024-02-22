import { useState } from "react"
import Inc from "./Inc"
import Dec from "./Dec"

let App2=()=>{
    let [c,setC]=useState(0)
    let incr=()=>setC(c+1)
    let dec=()=>setC(c-1)
    return(
        <div>
            <h1>{c}</h1>
            <Inc fun={incr}/>
            <Dec fun={dec}/>
        </div>
    )
}
export default App2