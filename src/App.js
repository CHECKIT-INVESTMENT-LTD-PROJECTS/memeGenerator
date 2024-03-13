import './App.css';
import Nav from './components/nav'
import Form from "./components/Form";
import MemeButton from "./components/memeGeneratorButton";
function App() {
  return (
    <div className="Container">
      <Nav/>
        <Form/>
        <MemeButton/>
    </div>
  );
}

export default App;
