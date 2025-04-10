import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "Valorant"]);
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Gifs list */}
      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>

      {/* Gif item */}
    </>
  );
};
