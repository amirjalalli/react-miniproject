import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./Tours.css";

const url = "https://course-api.com/react-tours-project";

const MainTours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTour);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setIsLoading(false);
      setTours(tours);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default MainTours;
