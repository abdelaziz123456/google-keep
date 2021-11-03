
import { useState } from 'react';
import './App.scss';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [darkMode,setMode]=useState('app')
  const [isDark,setDark]=useState(false)
 const modeHandler=()=>{
    if(!isDark){
      setMode('app app-dark')
      setDark(true)
    }else{
      setMode('app')
      setDark(false)
    }
  }
  return (
    <div className={darkMode}>
      
      <Header modeHandler={modeHandler}  isDark={isDark}/>
      <Form/>
      

      <Content/>
      <Footer/>
 
    </div>
  );
}

export default App;
