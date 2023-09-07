import { useState } from "react"

const Task =()=>{

    let [sum,setSum] = useState('')
    let [sub,setSub] = useState('')
    let [div,setDiv] = useState('')

    let sumIs = ()=>{
        setSum(sum+sub)
    }
    let subIs = ()=>{
        setSub(sum-sub)
    }
    let divIs = ()=>{
        setDiv(sum*sub)
    }

    return(
       <section>
         <form>
        <label>Enter first number</label>
        <input type="number" value={sum} onChange={sumIs} />
        <br />
        <label>Enter second number</label>
        <input type="number" value={sub} onChange={subIs}/>
        <br />     
        <label>The Result is {}</label>
        </form>
        <button>Sum +{sumIs}</button>
        <button>Sub -{subIs}</button>
        <button>Div *{divIs}</button>
       </section>

    )
}
export default Task