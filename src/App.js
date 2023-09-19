import "./App.css";
import Header from "./components/Header/Header";
import Question from "./components/Quetion/Question";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
