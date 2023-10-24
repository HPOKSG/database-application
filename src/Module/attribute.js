import axios from 'axios';
const port = 3001;
const API_URL = `http://localhost:${port}/attribute`;

const attribute = {
  async find(id) {
    const response = await axios.get(`${API_URL}/find/${id}`);
    return response.data;
  }
};

export default attribute;