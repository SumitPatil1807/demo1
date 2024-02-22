import { useContext } from "react"
import Gc from "./Gc"
let Z=()=>{
    let obj=useContext(Gc)
    return(
        <h1>{obj.name}</h1>
    )
}
export default Z