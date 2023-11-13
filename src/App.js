import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

export default class App extends Component {
  constructor(props){
    super(props) 
    this.state = ({
    darkMode: false,
    alert: null
  });
}
 render(){
  return (
    <>
    <Navbar title="textUtils" about="About Text Utilities" darkMode={this.state.darkMode}/>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyze" />
    </div>
    <About />
    </>
  );
}
}


