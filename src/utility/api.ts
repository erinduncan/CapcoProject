import Axios from "axios";

// Axios call retrieving from Lorem Picsum JSON, will likely swap for transparent pngs
// of a uniform size, as these are large, high quality images
export const imageAPI = Axios.create({
    // baseURL : "https://picsum.photos/v2/list"
    baseURL : "https://my-json-server.typicode.com/erinduncan/DynamicImages/images"
})
