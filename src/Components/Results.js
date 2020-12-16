import React, {Component} from 'react';

class Results extends Component{
    render() {
        let {calculationsResult} = this.props;
        // Print out the results of the calculation
        return (
            <div className="results">
                <p>{calculationsResult}</p>
            </div>
        );
    }
}
export default Results;