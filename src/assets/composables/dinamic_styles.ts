import { computed } from 'vue';
import moment from 'moment-timezone'

export const useCustomStyles = (param1: string) => {
  // const result = param1;
  const result = computed(() => {
    return 'bla';
  });

  // return param1;
  return 'label-text ' + (param1.toLowerCase().split(" ").join("") == 'none'? 'info': param1.toLowerCase().split(" ").join(""));
};

export const useRowDeletedStyle = (isActive: boolean) => {
  if (!isActive){
    return "row_disabled"
  }
  else{
    return "row_enabled"
  }
};

export const useDateStyles = (date: string) => {
  return (date ? moment(date).tz('Europe/Madrid').format('DD/MM/YYYY'): '');
};