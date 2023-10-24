import axios from 'axios';
const port = 3001;
const API_URL = `http://localhost:${port}`;
const auth = {
  async login(username, password) {
    const info = {
      username: username,
      password: password,
    };
    const response = await axios.post(`${API_URL}/login`, {
      info: info,
    });
    return response.data;
  },
  async register(username, password, name, address, role) {
    const user_credential = {
      username: 'lazada_guest',
      password: 'password',
    };
    const info = {
      username: username,
      password: password,
      name: name,
      address: address,
    };
    const response = await axios.post(`${API_URL}/signup`, {
      user_credential: user_credential,
      role: role,
      info: info,
    });
    return response.data;
  },
};
export default auth;
