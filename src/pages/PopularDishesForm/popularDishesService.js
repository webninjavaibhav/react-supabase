import { supabase } from '../../config/SupabaseClient';

export const fetchDishDetail = async (dishId) => {
    let result;
    try {
      const { data, error } = await supabase
        .from('popularDishes')
        .select()
        .eq('id', dishId)
        .single();
    result = data;
    } catch (error) {
      console.log(error);
    }
    return result;
  };

  export const createDish = async (dishDetail) => {
    const { name, state, averagePrice } = dishDetail;
    try {
      const { data, error } = await supabase
        .from('popularDishes')
        .insert([
          {
            name: name,
            state: state,
            averagePrice: averagePrice,
          },
        ])
        .select();
    } catch (error) {
      console.log(error);
    }
  };

  export const updateDish = async (dishDetail) => {
    const { id, name, state, averagePrice } = dishDetail;
    try {
      const { data, error } = await supabase
        .from('popularDishes')
        .update([
          {
            name: name,
            state: state,
            averagePrice: averagePrice,
          },
        ])
        .eq('id', id)
        .select();
    } catch (error) {
      console.log(error);
    }
  };