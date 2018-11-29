import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: [],
    };
  }

  componentDidMount() {
    document.title = this.state.items;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = this.state.items;
  }

  handleTextInputChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.item && this.state.item !== undefined && this.state.item !== '') {
      this.setState({
        items: [...this.state.items, this.state.item],
        item: "",
      });
    }
  };

  handleDeleteClick = (index) => {
    const newTodos = this.state.items.filter((_, todoIndex) => todoIndex !== index);
    this.setState({
      items: newTodos,
    });
  };

  handleCheckBoxChange = (e) => {
    console.log(e.target.checked);
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Typography variant={"h1"} color={"primary"}>
              <p>／人◕ __ ◕人＼</p>
            </Typography>
            <TodoForm
                onSubmit={this.handleFormSubmit}
                item={this.state.item}
                onChange={this.handleTextInputChange}/>
            <TodoList
                onChange={this.handleCheckBoxChange}
                onClick={this.handleDeleteClick}
                items={this.state.items}/>
          </header>
        </div>
    );
  }
}

export default App;
