import React, { userState } from 'react';

//Create a function to render tour cards 
//Given id, name, info, image, price, and onRemove function as props

function TourCard({ id, name, info, image, price, onRemove }) {
    const [readMore, setReadMore] = userState(false); // State to manage read more functionality

    const toggleReadMore = () => {
        setReadMore(!readMore); // Toggle the read more state
    }

    //remove tour card function
    const removeCard = () => {
        onRemove(id); // Call the onRemove function with the tour id
    }
    return (
        //Tour card component
        <article className="single-tour">
        
        <div>
            <h2>{name}</h2>
            <h4>{id}</h4>
            <img src={image} width="500"/>
            <h4>Price: ${price}</h4>
        </div>
        
            {/*Show the descripton of the tour if Readmore is true, otherwise slice the full description to 20 characters*/}
            {readMore ? info : `${info.slice(0, 80)}...`}
            <div className = 'readMore' onClick={toggleReadMore} > {readMore ? 'Read Less' : 'Read more'} </div>
        
        <div>
           { /*Button to remove a tour card*/}s
            <button className="Remove-btn" onClick={() => removeCard(id)}>
            Not Interested </button>
        </div>
        </article>
      
    );
}

export default TourCard;
//This component is used to render the tour cards in the App.jsx file
