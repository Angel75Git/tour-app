import React, {useState, useEffect} from "react";
import TourCard from "./TourCard";
import "../styles/styles.css"; 


//on mount fetch data from https://course-api.com/react-tours-project with useeffect


function Gallery() {
  const [tours, setTours] = useState([]); // State to hold the list of tours
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  // Function to remove a tour by its ID
  const fetchTour = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch("https://course-api.com/react-tours-project"); //edit to add proxy server if it doesnt work
      if (!response.ok) throw new Error("Network connection is not ok");
      const data = await response.json();
      setTours(data); // Set the fetched tours in state
    } catch (error) {
      console.error("Error fetching tours:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  // Fetch tour data from the API when the component mounts with useEffect
  useEffect(() => {
    fetchTour();
  }, []); // Empty dependency array to run only once on mount

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id); // Filter out the removed tour
    setTours(newTours); 
  };
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <h2>Loading Next Travels...</h2> {/* Show loading message while fetching data*/}
      </div>  
      );
  }
  if (error) {
    return (
      <section className="error-message">
        <h2>{error}</h2>
        <button onClick={fetchTour}>Try Again</button>
      </section>
    );
  }
  if (tours.length === 0) {
    return (
    <section>
        <h2>No Tours Available</h2> {/* Show message if no tours are available*/}
        <button onClick={fetchTour}>Refresh</button>
    </section>
  );
  }
  // Render the list of TourCard components or a message if no tours are available
  return (
    <section>
      <h2>Our Tours</h2>
        <div className="tours-list">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} onRemove={removeTour} />
          ))}
        </div>
    </section>
  );
}

export default Gallery;