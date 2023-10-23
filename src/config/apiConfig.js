const baseURL = 'http://localhost:3001';

const API_CONFIG = {
  getAllProductAPI: baseURL + '/product/findAll',
  updateProductByIdAPI: baseURL + '/product/update',
  getAllCategoryAPI: baseURL + '/category/findAll',
};
export default API_CONFIG;
