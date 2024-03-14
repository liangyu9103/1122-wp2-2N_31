import SingleItem_31 from './SingleItem_31';

//從後端抓資料
import { useQuery } from '@tanstack/react-query'

import customFetch_31 from "./utils_31";

const Items_31 = () => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['tasks'],
    //query function
    queryFn: async () => {
      const {data} = await customFetch_31.get('/');
      return data;
    }})
  console.log('data',data)
  console.log('error',error)

  if (isLoading) {
    return <p style={{ marginTop: '1rem'}}>Loading....</p>
  }

  if (error) {
    return <p style={{ marginTop: '1rem'}}>error....</p>
  }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem_31 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_31;
