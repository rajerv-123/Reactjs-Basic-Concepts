const Welcome =(z)=>{
    console.log(z)
    return(
        // <div id="style"> // module css
        //     <h1>
        //         Global css {z.data}
        //     </h1>
        // </div>
        <div style={{background:"green"}}> 
            <h1>
                Global css {z.data}
            </h1>
        </div>
    )
}
export default Welcome