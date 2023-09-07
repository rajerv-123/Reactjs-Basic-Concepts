import { useState } from "react"

    const Controlled =()=>{
//     let [name,setName] =useState(" ")
//     let nameData = (e)=>{
//         console.log(e)
//         console.log(e.target)
//         console.log(e.target.value)
//         setName(e.target.value)
//     }
//     let formHandle=(e)=>{
//         e.preventDefault()
//         console.log(name)
//     }
        let [name ,setName] = useState ("")
        let [email , setEmail] = useState ("")
        let [pass , setPass] = useState ("")

        let nameData = (e)=>{
            setName(e.target.value)
        }
        let emailData = (e)=>{
            setEmail(e.target.value)
        }
        let passData = (e)=>{
            setPass(e.target.value)
        }
        let formHandle = (e)=>{
            e.preventDefault()
            console.log(name, email,pass)
        }


    return (
        <section>
              <form>
            <label>Name</label>
            <input type="text" value={name} onChange={nameData}/>
            <br />
            <label>Email</label>
            <input type="email" value={email} onChange={emailData}/>
            <br />
            <label>Password</label>
            <input type="password" value={pass} onChange={passData}/>
            <br />
            <button onClick={formHandle}>Submit</button>
        </form>
        <h1>name:  {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Password: {pass}</h1>


        </section>
      
    )
}
export default Controlled