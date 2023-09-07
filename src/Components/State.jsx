import { useState } from "react";

const State = ()=>{
    let [abc ,setAbc] = useState(" hello how are you ")
    let btn = ()=>{
        setAbc("i am good how are you")
    }
    
    return (
        <div>
            {abc}
            <button onClick={btn}>food</button>
        </div>
    )
}
export default State 