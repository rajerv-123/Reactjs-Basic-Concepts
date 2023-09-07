import React from "react"
const Button =(x)=>{
    console.log("rendering" ,x.childern)
    return(
        <div>
            <button onClick={x.Func}>{x.childern}</button>
        </div>
    )
}
export default React.memo(Button)




