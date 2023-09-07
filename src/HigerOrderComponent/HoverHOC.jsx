import { useState } from "react"

const HOC1=(WrappedComp)=>{
    function Hoc (){
        let [count ,setCount] = useState(0)

        let Incre =()=>{
            setCount(count+1)
        }
        return (
            <div>
                <WrappedComp data={count} Func={Incre}></WrappedComp>
            </div>
        )
    }
    return Hoc
}
export default HOC1