import axios from 'axios'
const url = "http://localhost:3001/persons"

const FetchAll  = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(url, newObject)
    return request.then(response => response.data)
  }

  const DeleteData = id => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.statusText)
  }
  
  
export default {FetchAll, create,DeleteData}