import React, {useState, useEffect} from "react";
import TourCard from "./TourCard";


//on mount fetch data from https://course-api.com/react-tours-project with useeffect


function Gallery() {
  const [tours, setTours] = useState([]); // State to hold the list of tours
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Fetch tour data from the API when the component mounts
  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((response) => {
        if (!response.ok) throw new Error("Network connection is not ok");
        return response.json();
})
      .then((data) => {
        setTours(data); // Set the fetched tours in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.error("Error fetching tours:", error));
  }, []);

  // Render the list of TourCard components or a message if no tours are available
  return (
    <section>
      <h2>Our Tours</h2>
      {tours.length === 0 ? (
        <div className="no-tours">No Tours Available</div>
      ) : (
        <div className="tours-list">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} onRemove={removeTour} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;