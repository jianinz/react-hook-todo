import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useItemState from './useItemState';
import './App.css';

const App = () => {
  const {items, addItem, deleteItem} = useItemState([]);
  useEffect(() => {
    document.title = items;
  });

  return (
      <div className="App">
        <header className="App-header">
          <Typography variant={"h1"} color={"primary"}>
            <p>／人◕ __ ◕人＼</p>
          </Typography>
          <TodoForm
              saveItem={item => {
                if (item && item !== '') {
                  addItem(item);
                }
              }}
          />
          <TodoList
              deleteItem={deleteItem}
              items={items}/>
        </header>
      </div>
  );
};

export default App;

