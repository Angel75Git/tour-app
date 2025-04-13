import { userState } from 'react';

//Create a function to render tour cards 
//Given id, name, info, image, price, and onRemove function as props

function TourCard({ id, name, info, image, price, onRemove }) {
    return (
        
        <article className="single-tour">
        
        <div>
            <h2>{name}</h2>
            <h4>{id}</h4>
            <img src={image} alt={name} />
            <h4>Price: ${price}</h4>
        </div>
        <p>
            /*Show the descripton of the tour if Readmore is true, otherwise slice the full description to 20 characters*/
            {readMore ? info : `${info.slice(0, 80)}...`}
            
        </p>
        <div>
            /*Button to remove a tour card*/
            <button className="Remove-btn" onClick={() => onRemove(id)}>
            Not Interested </button>
        </div>
        </article>
      
    );
}

export default TourCard;
//This component is used to render the tour cards in the App.jsx file
