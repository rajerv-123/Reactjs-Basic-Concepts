import { React, useRef } from 'react';
const Form = () => {
    let name = useRef()
    let mail = useRef()
    let getData = (e) => {
        e.preventDefault()
        let username = name.current.value
        let usermail = mail.current.value
        console.log(username)
        console.log(usermail)
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" ref={name}/>
                <br></br>
                <label htmlFor="">Mail id</label>
                <input type="text" ref={mail}/>
            </form>
            <br></br>
            <button onClick={getData}>submit</button>
        </div>
    )
}
export default Form