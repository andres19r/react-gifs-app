import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Search gifs"
        value={inputValue}
      />
    </form>
  );
};
