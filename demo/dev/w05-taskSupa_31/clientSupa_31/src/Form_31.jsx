import { useState } from 'react';

//useMutation:修改資料,useQuery:查詢資料
import { useMutation, useQueryClient} from '@tanstack/react-query';

import { supabase } from './db/clientSupabase_31';

import { toast } from 'react-toastify';



const Form_31 = () => {
  const [newItemName, setNewItemName] = useState('');

  const  QueryClient = useQueryClient()
  const { mutate: createTasks, isLoading } = useMutation({
    mutationFn: async (title) => {
      try {
        const { data, error } = await supabase
          .from('task_31')
          .insert([{ title, is_done: false }])
          .select();
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ['tasks']
      });
      toast.success('tasks added')
      setNewItemName('')
    },
    onError: (error) => {
      toast.error(error.response.data)
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newItemName === '') {
      toast.warning('Please Provide title')
    }else {
      createTasks(newItemName)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud -- 208410331</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add task
        </button>
      </div>
    </form>
  );
};
export default Form_31;
