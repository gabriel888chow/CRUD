import Axios from 'axios';

export const addVcard = async (payload) => {
    return await Axios.post('http://localhost:8080/create', payload);
    // console.log(payload, "addorcidsvg")
}