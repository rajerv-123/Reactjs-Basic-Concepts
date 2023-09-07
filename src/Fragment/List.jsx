import {useState,Fragment} from "React"
import abc from "./userData.json"

const List = ()=>{
    let [content] =useState(abc)
    return(
        <div>
        <h1>https://api.github.com/users</h1>
        {content.map((x)=>{
            return (
                <Fragment key={x.id}>
                    <h1>{x.login}</h1>
                    <img src="{x.avatar_url}" alt=""/>
                </Fragment>
            )
        })}

        </div>
    )
}
export default List