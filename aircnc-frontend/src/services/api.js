// instala lib axios - npm install axios
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3335',
})

export default api;