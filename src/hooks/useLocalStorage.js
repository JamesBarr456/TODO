import { useState } from 'react';

export const useLocalStorage = (key, initialValue, finalValue) => {
    const [value, setValue] = useState(() => {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    });  
    return [value, setValue];
  };