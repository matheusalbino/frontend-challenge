import { ReactQueryConfig } from 'react-query';

export const reactQueryConfig: ReactQueryConfig = {
  queries: {
    cacheTime: 0,
    staleTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialStale: true,
  },
  mutations: {},
  shared: {
    suspense: false,
  },
};
