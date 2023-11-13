import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    <TextForm heading="Enter the text to analyze" />
    </>
  );
}
}


