import {useState} from 'react';

export default function useItemState(initValue) {
  const [items, setItems] = useState(initValue);
  return {
    items,
    addItem: item => {
      setItems([...items, item]);
    },
    deleteItem: oldItemIndex => {
      const newItems = items.filter((_, index) => index !== oldItemIndex);

      setItems(newItems);
    }
  };
}

