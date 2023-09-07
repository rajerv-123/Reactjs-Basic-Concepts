import React from "react";
import HOC1 from "./HigerOrderComponent/HOC1";
const Click=(x)=>{
    console.log(x);
    return(
        <div>
            [x.data]
            <button onClick={x.Func}>Click here:  --- </button>
        </div>
    )
}
export default HOC1(Click)

// rce => to create class component 
