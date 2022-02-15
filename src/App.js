
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  return (
    <>
      <Navbar  />
      < div className="container my-2" >
      <Textform heading="input text"/>
      </div>
    </>
  );
}

export default App;
