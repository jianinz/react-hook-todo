import TextField from "@material-ui/core/TextField/TextField";
import propTypes from 'prop-types';
import React from 'react';

const TodoForm = ({onSubmit, item, onChange}) => {
  return (
      <form
          onSubmit={onSubmit}>
        <TextField
            value={item}
            variant={"standard"}
            autoFocus={true}
            onChange={onChange}
            margin={"normal"}/>
      </form>
  );
};

TodoForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  item: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default TodoForm
