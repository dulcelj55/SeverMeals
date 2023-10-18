import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios"

function App() {
  const [meals, setMeals] = useState([]);

  useEffect (() => {
      axios({
        method: "GET",
        url: "http://localhost:3000/meals"
      }).then((response) => {
        setMeals(response.data);
      });
    },[]);

  return (
    <>
      <h1>My Meals App</h1>
      {meals.map((meal) => {
        return (
          <div key={JSON.stringify(meal)}>
            <div>{meal.name}</div>
            <div>{meal.instructions}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
