import React from 'react';
import Names from './Names';

class Card extends React.Component {
    render() {
        const { cards } = this.props;
        return (
            <div className="cards">
               <div className = "title">
                   <p className = "title-text">{cards.Title}</p>
                </div>
                <div className = "name-cards">
                    {cards.content.map(element => (
                        <Names names = {element} />
                    ))}
                </div>
               
            </div>
          );
    }
  
}

export default Card;
