import { supabase } from '../../config/SupabaseClient';


export const deleteDish = async (id) => {
    try {
      const { data, error } = await supabase
        .from('popularDishes')
        .delete()
        .eq('id', id)
        .single();
    } catch (error) {
      console.log(error);
    }
  }