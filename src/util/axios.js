import axios from "axios";

const Axios = axios.create({
    baseURL:"https://muhammadam1n.pythonanywhere.com/api",
    headers:{
        "Content-Type":"application/json"
    }
})

export default Axios