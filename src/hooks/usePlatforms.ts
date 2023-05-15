import { useQuery } from '@tanstack/react-query';
import apiClients from '../services/api-clients';
import { FetchResponse } from '../services/api-clients';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClients
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;
