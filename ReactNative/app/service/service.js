import axios from "axios";
let url = "http://192.168.1.35:2080"
export const getAlbums = async () => {
    return await axios.get(`${url}/home/albums`);
}

