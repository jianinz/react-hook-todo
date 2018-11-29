import {useState} from 'react';

export default function useFormInputState() {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    resetTextField: () => setValue('')
  };
}

