import { format } from 'date-fns';

export const formatDataAndTime = data => {
  return format(new Date(data), 'Pp');
};
