import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      darkMode: false,
      alert: null
    });
    this.toggleMode = this.toggleMode.bind(this);
  }
     toggleMode() {
      if (this.state.darkMode) {
        this.setState(
          {
            darkMode: prev => ({
          ...prev,
          darkMode: false,
        })
      });

      } else {
        this.setState({
          darkMode: prev => ({
          ...prev,
          darkMode: true,
        })
      });
      }
    }
    render(){
      return (
        <>
          <Navbar title="textUtils" about="About Text Utilities" darkMode={this.state.darkMode} toggleMode={this.toggleMode} />
          <Alert />
          <div className='container my-3'>
            <TextForm heading="Enter the text to analyze"  />
          </div>
          <About />
        </>
      );
    }
  }


