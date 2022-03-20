import { useEffect, useState } from "react"
import axios from 'axios'

const endpoint = "http://localhost:9000"

function getTask() {
  return axios.get(endpoint).then(function (response) {
    // handle success
    console.log(response);
  })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function TodoList() {
  let [todo, setTodo] = useState("")
  let [items, setItems] = useState([])

  useEffect(() => { 
    getTask()
  }, [])
  
  return (
    <div>
      <div className="row">
        <div>
          todo
        </div>
      </div>
    </div>
  )
}

export default TodoList
