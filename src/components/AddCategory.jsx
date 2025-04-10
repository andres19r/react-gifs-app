import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onAddCategory((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Search gifs"
        value={inputValue}
      />
    </form>
  );
};
