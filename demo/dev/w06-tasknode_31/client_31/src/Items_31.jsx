import { useQuery } from '@tanstack/react-query';

import SingleItem_31 from './SingleItem_31';
import axios from 'axios';

const Items_31 = ({ items }) => {
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: () => axios.get('http://localhost:5000/api/tasks'),
  });
  console.log('result', result);
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem_31 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_31;

// import SingleItem_31 from './SingleItem_31';
// import axios from 'axios';

// import { useQuery } from '@tanstack/react-query';
// //import customFetch_31 from './utils_31';

// const Items_31 = ({ items }) => {
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ['tasks'],
//     queryFn: () => axios.get('http://localhost:5050/api/tasks'),
//   });
//   console.log('data', data);

//   if (isLoading) {
//     return <p style={{ marginTop: '1rem' }}>Loading...</p>;
//   }

//   return (
//     <div className="items">
//       {data.data.taskList.map((item) => {
//         return <SingleItem_31 key={item.id} item={item} />;
//       })}
//     </div>
//   );
// };
// export default Items_31;
