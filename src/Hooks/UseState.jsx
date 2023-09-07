import { useState } from "react"

const UseState = () => {
    let [abc] = useState(["hi", "hello reactjs ", " hello progammer "])
    console.log(abc)
    return (
        <div>
            {abc.map((x) => {
                console.log(x)
                return (
                    <h1>
                        {x}
                    </h1>
                )
            })}
        </div>
    )
}
export default UseState