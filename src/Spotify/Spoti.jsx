import React from "react"
import styles from "./spoti.module.css"
import img from "./bubble.svg"

const Spoti = () => {
    return (
        <div>
            <header id={styles.nav}>

                <article>

                    <div className="{style.menu}">
                        <ol>
                            <li><a href="">Premium</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">|</a></li>
                            <li><a href="">Sign Up</a></li>
                            <li><a href="">log In</a></li>
                        </ol>
                    </div>
                    
                </article>
            </header>
            <section id={img.bcakgound}>
                        <img src="{spotify.svg}"></img>
            </section>
        </div>

    )
}


export default Spoti


//combibator selector
//0. decendent selector (' ')
//1. child ('>')
//2. Adjaacent siblings("+")
//2. general siblings ('~')



// Simple
//1. id(#)
//2. class (.)
// 3. univarsal selector (*)
// 4 . group selector (,)


//Note:
// display flex
// justify-content (if we use justify-content and aling item then must use display flex )
// aling item




// myntra
// ajio
// tesla
// space x
// tcs 
