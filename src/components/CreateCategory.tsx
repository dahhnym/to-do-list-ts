import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Categories, categoryState } from '../atoms';

const CreateCategory = () => {
  const [category, setCategories] = useRecoilState(categoryState);
  console.log(category);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Type a category name" />
      <button>Add</button>
    </form>
  );
};

export default CreateCategory;
