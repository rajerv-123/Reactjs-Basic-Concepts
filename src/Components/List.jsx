import { useState } from "react"

const List =()=>{
    let [abc , setAbc] = useState(["hii" , " helloWorld " , "bye"])
    let btn = 
    ()=>{
        setAbc("helloWorld")
    }
    return(
        <div>
            <h1>
            <button onClick={btn}></button>
                {abc[5]}
            </h1>
        </div>
    )
}
export default List 