import React from 'react';
import { IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as IToDo['category'] };
      console.log(oldToDo, newToDo);
      const newToDos = [...oldToDos];
      newToDos.splice(targetIndex, 1, newToDo);
      return newToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== 'TO_DO' && (
        <button name="TO_DO" onClick={onClick}>
          To do
        </button>
      )}
      {category !== 'DONE' && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;