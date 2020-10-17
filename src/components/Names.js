import React from 'react';

class Names extends React.Component {
    render() {
        const { names } = this.props;
        return (
            <div className="names">
                <input type = "checkbox"></input>
               <p className = 'title-text'y
               >{names}</p>
            </div>
          );
    }
  
}

export default Names;
