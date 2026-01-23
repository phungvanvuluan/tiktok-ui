import axios from 'axios';


 const request = axios.create({
    baseURL: 'https://dummyjson.com',
})

export const get = async (path, options = {}) =>{
    const reponse = await request.get(path, options);
    return reponse.data;
}

export default request;