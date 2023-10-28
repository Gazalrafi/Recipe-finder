import React from "react";
import "./Recipe.css";

const Recipe = ({ title, image, ingredients }) => {

  const saveRecipe=()=>{
     localStorage.setItem("title",title);
     localStorage.setItem("image",image);
     let ing=ingredients.map((ingredient)=>{
       return ingredient.text;
     })
     localStorage.setItem("ingredients",ing);
  }
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient,i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
      <img className="style.image" src={image} alt="" />
      <button onClick={saveRecipe} style={{padding:"0.5rem 2rem",color:"white", background:"red",fontStyle:"bold"
    ,borderStyle:"none"}}>Save</button>
    </div>
  );
};

export default Recipe;
