import { useState } from "react"
import dummyDatas from "./userData.json"

const FetchData = () => {
    let [content] = useState(dummyDatas)
    return (
        <div>
            {content.map((x) => {
                console.log(x);
                return (
                    <div>
                    <h1>link</h1>
                    <img src="{x.avatar_url}" alt=""/>
                    </div>
                )
            })}

        </div>
    )
}
export default FetchData