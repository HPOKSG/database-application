import axios from 'axios';
const port = 3001;
const API_URL = `http://localhost:${port}/product`;

const product = {
  async getProducts() {
    const response = await axios.post(`${API_URL}/findAll`, {});
    return response.data;
  },
  async getProductBySeller(id) {
    const response = await axios.post(`${API_URL}/find/${id}`, {});
    return response.data;
  },
  async createProduct(product) {
    const response = await axios.post(`${API_URL}/create`, {
      query: product,
    });
    return response;
  },
  async updateProduct(product) {
    const response = await axios.post(
      `${API_URL}/update/${product.product_id}`,
      {
        query: product,

      }
    );
    return response;
  },
  async deleteProduct(product) {
    const response = await axios.post(
      `${API_URL}/delete/${product.product_id}`,
      {
        query: product,
      }
    );
    return response;
  },
  async createInbound(bodyParser) {
    const response = await axios.post(
      `${API_URL}/createInbound`,
      {
        query: bodyParser
      }
    );
    return response;
  },
  async filter(body){
    const response = await axios.post(`${API_URL}/filter-name`, {query: body});
    return response;
  },
  async searchFilter(body){
    const response = await axios.post(`${API_URL}/search`, {query: body});
    return response;
  }
};

export default product;
