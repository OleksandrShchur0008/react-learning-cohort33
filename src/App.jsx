import "./App.css";
import Button from "./components/Button";

function App() {
  const nameOfCard = "Animal";

  const animal = {
    name: "Tiger",
    age: 15,
    src: "",
    isWild: true,
  };
  return (
    <div className="App">
      <p>React app lesson 17</p>
      <div className="button-container">
        <Button />
        <Button />
        <Button />
      </div>
      <div class="car-card">
        <h3>{nameOfCard}</h3>
        <img src={animal.src} alt="kaputt img" />
        <p>Name: {animal.name}</p>
        <p>Age: {animal.age}</p>
        <p>{animal.isWild ? "Wild" : "No Wild"}</p>
      </div>
    </div>
  );
}

export default App;
