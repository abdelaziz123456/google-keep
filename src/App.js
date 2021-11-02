
import './App.scss';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      
      <Header/>
      <Form/>

      <Content/>
      <Footer/>
 
    </div>
  );
}

export default App;
