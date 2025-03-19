import useSWR from 'swr';
import { getRoutes, Route, RouteParams } from '../services/maponService';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setRoutes } from '../redux/routesSlice';

const useFetchRoutes = (routeParams: RouteParams) => {
  const dispatch = useDispatch();
  const { data, error } = useSWR<Route[]>('routes', getRoutes.bind(routeParams) );
  useEffect(() => {
    if (data) {
      dispatch(setRoutes(data));
    } else if (error) {
      console.error(error);
    } else {
      console.log('Loading...');
    }
  }, [data, error, dispatch]);
};

export default useFetchRoutes;