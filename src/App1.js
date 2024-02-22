import Gc from "./Gc"
import X from "./X"
let App1=()=>{
    let obj={name:"sumit"}
    return(
        <Gc.Provider value={obj}>
            <X/>
        </Gc.Provider>
    )
}
export default App1