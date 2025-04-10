import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* Input */}

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
