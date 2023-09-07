import { useState } from "react"

    const B=()=>{
        let [count , setCount] = useState(0)
        let incre = ()=>{setCount(count+1)}
    
    return(
        <div>
            {count}
            <button onMouseOver={incre}>Increment</button>
            <br />
            <button onMouseMove={incre}>Decrement</button>
            <br />
            <button onMouseMoveCapture={incre}>Decrement</button>
        </div>
    )
}
export default B 