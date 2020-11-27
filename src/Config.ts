import { ReactQueryConfig } from 'react-query';

export const reactQueryConfig: ReactQueryConfig = {
  queries: {
    cacheTime: 0,
    staleTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: true,
    keepPreviousData: false,
  },
  mutations: {},
  shared: {
    suspense: false,
  },
};
