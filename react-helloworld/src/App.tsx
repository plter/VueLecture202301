import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        count: 0
    };
    clicked = () => {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.clicked}>Click count {this.state.count}</button>
            </div>
        );
    }
}
export default App;
