import axios from 'axios';
const port = 3001;
const API_URL = `http://localhost:${port}`;
const category = {
    async search(query) {
        console.log(query);
        const response = await axios.post(`${API_URL}/category/search`, query);
        return response;
    },
    async findAll() {
    const response = await axios.get(`${API_URL}/category/findAll`, {

    });
    return response;
    },
    async update(category) {
        const response = await axios.post(`${API_URL}/category/update`, category);
        return response;
    },
    async delete(category) {
        const response = await axios.post(`${API_URL}/category/delete`, category); 
        return response;
    },
    async create(category) {
        const response = await axios.post(`${API_URL}/category/create`, category); 
        return response;
    },
    async searchByName(query) {
        const response = await axios.post(`${API_URL}/category/searchByName`, query); 
        return response;
    },
    async getAttributes(query) {
        const response = await axios.post(`${API_URL}/category/getAttribute`, {
            query: query
        }); 
        return response;
    },
};
export default category;
