
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar   />
      {/* jodi default use kori ekta na likhleo hoi*/ }
      < div className="container my-2" >
      <Textform heading="input text"/>
      {/*<About/>*/}
      </div>
    </>
  );
}

export default App;
