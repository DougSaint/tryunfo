import React from 'react';

export default class Card extends React.Component{
    render() {
        const { cardName, 
            cardDescription, 
            cardAttr1, 
            cardAttr2, 
            cardAttr3, 
            cardImage, 
            cardRare, 
            cardTrunfo, 
            hasTrunfo
            } = this.props
        return (
            <section >
                <h3 data-testid="name-card">{cardName}</h3>
                <img 
                src = {cardImage} 
                alt={cardName} 
                data-testid="image-card"
                />
                <p data-testid="description-card">{cardDescription}</p>
                <div>
                    <p data-testid="attr1-card">{cardAttr1}</p>
                    <p data-testid="attr2-card">{cardAttr2}</p>
                    <p data-testid="attr3-card">{cardAttr3}</p>
                </div>
                <p data-testid="rare-card">{cardRare}</p>
                {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
            </section>
        )
    }
}