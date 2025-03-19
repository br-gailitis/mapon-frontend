import useSWR from 'swr';
import { getUnits, Unit } from '../services/maponService';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUnits } from '../redux/unitsSlice';

const useFetchItems = () => {
  const dispatch = useDispatch();
  const { data, error } = useSWR<Unit[]>('units', getUnits);
  useEffect(() => {
    if (data) {
      dispatch(setUnits(data));
    } else if (error) {
      console.error(error);
    } else {
      console.log('Loading...');
    }
  }, [data, error, dispatch]);
};

export default useFetchItems;