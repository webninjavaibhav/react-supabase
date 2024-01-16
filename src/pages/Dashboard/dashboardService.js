import { supabase } from '../../config/SupabaseClient';

 export const fetchDishes = async () => {
    let result;
    try {
      const { data, error } = await supabase.from('popularDishes').select().order('created_at',{ascending: false});
      result = data;
    } catch (error) {
      console.log(error);
    }
    return result;
  };