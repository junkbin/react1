import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'reactstrap';

class MyApp extends React.Component {
    constructor(){
        super();

        this.state = {
            "dynamic" : "I am dynamic text"
        };
    }

    dynamicDataChange(e){
        this.setState({"dynamic": e.target.value});
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <h2>{this.props.title}</h2>
                <h2>{this.state.dynamic}</h2>
                <input value={this.state.dynamic} onChange={this.dynamicDataChange.bind(this)} />

                <Widget dynamicDataChange={this.dynamicDataChange.bind(this)} />
            </div>
        );
    }
}

let Widget = (props) => {
    return (
        <div>
            <h3>I am widget</h3>
            <input  onChange={props.dynamicDataChange} />
        </div>
    );
};

MyApp.defaultProps = {
    "title" : "Hie I am title",
    "desc" : "Hie I am decription"
};

ReactDOM.render(<MyApp />, document.getElementById("root"));