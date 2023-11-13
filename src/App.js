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
    this.showAlert = this.showAlert.bind(this);
  }

  componentDidMount() {
    if (this.state.darkMode) {
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
    }

  }

  showAlert(message, type) {
    this.setState({
      alert:
        prev => ({
          ...prev,
          alert: { msg: message, type: type }
        })
    });

    setTimeout(() => {
      this.setState({
        alert: prev => ({
          ...prev,
          alert: null
        })
      })
    }, 1000);

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
  render() {
    return (
      <>
        <Navbar title="textUtils" about="About Text Utilities" darkMode={this.state.darkMode} toggleMode={this.toggleMode} />
        <Alert alert={this.state.alert}/>
        <div className='container my-3'>
          <TextForm heading="Enter the text to analyze" showAlert={this.showAlert} />
        </div>
        {/* <About /> */}
      </>
    );
  }
}


