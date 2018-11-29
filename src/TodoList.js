import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";

const TodoList = ({items, deleteItem}) => (
    <List>
      {items.map((item, index) => (
          <ListItem key={index.toString()} dense>
            <Checkbox/>
            <ListItemText primary={item}/>
            <ListItemSecondaryAction>
              <IconButton
                  color={"primary"}
                  onClick={() => {
                    deleteItem(index);
                  }}
              >
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
      ))}
    </List>
);

export default TodoList;
