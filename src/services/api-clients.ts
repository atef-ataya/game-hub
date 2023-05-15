import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '37204ecb6288452189ec8665ddc6d1f5',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
