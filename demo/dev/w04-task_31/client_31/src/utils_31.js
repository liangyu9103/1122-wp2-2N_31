import axios from 'axios';

const customFetch_31 = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});

export default customFetch_31;
