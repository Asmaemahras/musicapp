import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Experience from './components/Experience';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Body/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
