import axios from "axios"
import { useEffect, useState } from "react"

const FetchData = (() => {
  let [abc, setAbc] = useState([])
  let [id, setId] = useState(1)
  let [btn , setBtn] =useState(1)

  useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => {
        console.log("i just got a data");
        setAbc(response.data);
      })
  }, [btn])

  let idData = (e) => {
    setId(e.target.value)
  }

  let getBtn = ()=>{
    setBtn(id)
  }

  console.log(abc[0]);
  return (

    <div>
      <input type="text" value={id} onChange={idData} />
      <button onClick={getBtn} >Submit</button>
      {abc.title}
    </div>
  )
})


export default FetchData