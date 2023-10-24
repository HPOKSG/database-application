import axios from 'axios';
const port = 3001;
const API_URL = `http://localhost:${port}/order`;

const orderHelper = {
  async addOrder(order) {
    const response = await axios.post(`${API_URL}/add-order`, order);
    return response;
  },
  async getOrdersByCustomerId(customer_id) {
    try {
      const response = await axios.post(
        `${API_URL}/get-orders-by-customer-id`,
        { customer_id: customer_id } // Send the customer_id as part of the request body
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  },
  async AcceptOrder(order) {
    const response = await axios.post(`${API_URL}/accept-order`, order);
    return response;
  },
  async DeleteOrder(order) {
    const response = await axios.post(`${API_URL}/delete-order`, order);
    return response;
  },
};
export default orderHelper;
