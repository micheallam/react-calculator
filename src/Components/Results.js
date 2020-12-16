import React, {Component} from 'react';

class Results extends Component{
    render() {
        let {result} = this.props;
        // Print out the results of the calculation
        return (
            <div className="results">
                <p>{result}</p>
            </div>
        );
    }
}
export default Results;