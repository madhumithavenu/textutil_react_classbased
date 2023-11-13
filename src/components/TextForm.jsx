import React, { Component } from 'react'


export default class TextForm extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            text: "Enter a text"
        });

        this.handleUpClick = this.handleUpClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleLoClick = this.handleLoClick.bind(this);
        this.handleClearText = this.handleClearText.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleExtraSpaces = this.handleExtraSpaces.bind(this);

    }
    handleUpClick() {
        let newText = this.state.text.toUpperCase();
        this.setState({text: newText});
        // this.props.showAlert("Converted to Upper Case", "success");
    }
    handleOnChange(event) {
        console.log("on change");
        this.setState({
           text: event.target.value
        });
    }
    handleLoClick() {
        let newText = this.state.text.toLowerCase();
        this.setState({text: newText});
        // this.props.showAlert("Converted to Lower Case", "success");
    }
    handleClearText() {
        this.setState({
            text: ""
        });
        // props.showAlert("Text Box Cleared", "success");
    }
    handleCopy(eve) {
        let text = document.getElementById("myBox");
        text.select();
        // navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied Text to clipboard", "success");
    }
    handleExtraSpaces() {
        let newText = this.state.text.split(/[ ]+/);
        this.setState({
            text: newText.join(" ")}); 
        // props.showAlert("Extra spaces removed", "success");
    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='mb-3'>
                        <h1>{this.props.heading}</h1>
                        <textarea value={this.state.text} onChange={this.handleOnChange}
                            className='form-control' id='myBox' rows="8" >
                        </textarea>
                    </div>
                    <button className='btn btn-primary mx-2' onClick={this.handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={this.handleLoClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={this.handleClearText}>Clear Text</button>
                    <button className='btn btn-primary mx-2' onClick={this.handleCopy}>Copy Text</button>
                    <button className='btn btn-primary mx-2' onClick={this.handleExtraSpaces}>Clear Extra Spaces</button>
                </div>
                <div className='container my-3'>
                    <h1>Your Text Summary</h1>
                    <p>{this.state.text.split(" ").filter(element => element.length != 0).length} words & {this.state.text.length} characters</p>
                    <p>{0.7 * this.state.text.split(" ").length}seconds to read</p>
                    <h2>Preview</h2>
                    <p>{this.state.text}</p>
                </div>

            </>
        )
    }
}
