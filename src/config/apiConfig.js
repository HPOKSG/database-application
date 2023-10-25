const baseURL = 'http://localhost:3001';

const API_CONFIG = {
  /* */
  getAllProductAPI: baseURL + '/product/findAll',
  updateProductByIdAPI: baseURL + '/product/update',
  getAllCategoryAPI: baseURL + '/category/findAll',
  deleteProductByIdAPI: baseURL + '/product/delete',

  /*CATEGORY API */
  getCategoryByIdAPI: baseURL + '/category/search',
  getCategoryByNameAPI: baseURL + '/category/searchByName',

};
export default API_CONFIG;
