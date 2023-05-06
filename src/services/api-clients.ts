import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '37204ecb6288452189ec8665ddc6d1f5',
  },
});
