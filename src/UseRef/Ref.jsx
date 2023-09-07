import { useRef } from "react"

const Ref = ()=>{
    let demoRef = useRef()
    let btn=()=>{
        demoRef.current.style.background="red";
    }
    console.log(demoRef)

    return (
        <div>
            <h1 ref={demoRef}>Hello</h1>
            <button onClick={btn}>Click Me</button>
        </div>
    )
}
export default Ref 