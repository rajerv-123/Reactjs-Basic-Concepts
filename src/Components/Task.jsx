import { useState } from "react"

const Task = ()=>{
     let [count,setCount] = useState(0)

    let incre=()=>{
        setCount(count + 1)
    }

    let decre=()=>{
        setCount(count - 1)
    }

    let reset=()=>{
        setCount(0)
    }

    return (
        <div>
        {count}
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Task