const Theme =()=>{
    let dark=()=> document.body.style.background="#1f1b24"; 
    let light=()=> document.body.style.background="#121212";    
    return (
        <div>
            <h1>Dark and Light Theme</h1>
            <input type="radio" name ="a" onClick={dark}/>
            Dark
            <input type="radio" name="a" onClick={light}/>
            Light
        </div>
    )
}
export default Theme