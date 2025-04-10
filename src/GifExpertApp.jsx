import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories(["Valorant", ...categories]);
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onAddCategory={setCategories} />

      {/* Gifs list */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>

      {/* Gif item */}
    </>
  );
};
