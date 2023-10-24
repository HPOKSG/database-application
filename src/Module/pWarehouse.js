import axios from 'axios';
const port = 3001;
const API_URL = `http://localhost:${port}/productWarehouse`;

const product = {
  async findAll(body) {
    const response = await axios.post(`${API_URL}/findAll`, {
        query : body
    });
    return response.data;
  },
  async moveProduct(body) {
    const response = await axios.post(`${API_URL}/moveProduct`, {
        query : body
    });
    return response;
  }
};
export default product;
