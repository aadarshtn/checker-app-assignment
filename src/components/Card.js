import React from 'react';

class Card extends React.Component {
    render() {
        const { cards } = this.props;
        return (
            <div className="cards">
               <div className = "title">
                   <p className = "title-text">{cards.Title}</p>
                </div>
                <div className = "name-cards">
                    <input type = "checkbox"></input>
                   {cards.content[0]}
                </div>
               
            </div>
          );
    }
  
}

export default Card;
