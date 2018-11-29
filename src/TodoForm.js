import TextField from "@material-ui/core/TextField/TextField";
import React from 'react';
import useFormInputState from './useFormInputState';

const TodoForm = ({saveItem}) => {

  const {value, resetTextField, onChange} = useFormInputState();

  return (
      <form
          onSubmit={event => {
            event.preventDefault();
            saveItem(value);
            resetTextField();
          }}
      >
        <TextField
            value={value}
            variant={"standard"}
            autoFocus={true}
            onChange={onChange}
            margin={"normal"}/>
      </form>
  );

};
export default TodoForm;
