import supabase, { supabaseUrl } from './supabase';

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from('bookings2_31')
    .select('*,cabins2_31(*),guests2_31(*)')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
};
