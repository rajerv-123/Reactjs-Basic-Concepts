import React, { useEffect, useState } from "react"

const SideEff = () => {
    let [count, setCount] = useState(0)
    let [count1,setCount1] =useState(1)
    useEffect(()=>{
        console.log("components is rendered");
    },[count])
    return (
        <div>
            {count}
            <button onClick={() => { setCount(count + 1) }}>Incre</button>
            <Button onClick={() => { setCount(count - 1) }}>Decre</Button>

            <br />
            {count1}
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>


    ) 
}

export default SideEff

