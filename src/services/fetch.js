import axios from "axios"

const getAxios = (query, page = 1) => {
    const response = axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=16073410-22968bc812aaee9828b6880ef&image_type=photo&orientation=horizontal&per_page=12`
    )
    return response
    // console.log( response)
}

export default getAxios;

