import Axios from 'axios';

export const addVcard = async (payload) => {
    console.log(payload, "addVcard")
    return await Axios.post('http://localhost:8080/create', payload);
}