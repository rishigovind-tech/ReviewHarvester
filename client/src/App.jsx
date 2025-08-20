import React, { useState } from "react";
import ReviewForm from "./components/ReviewForm";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

const App = () => {

   const [ setReviews] = useState([]);
  return (
     <div className="min-h-screen bg-gray-100 p-6">
      <Navbar/>
      <Hero/>
      

      {/* Form */}
      <ReviewForm setReviews={setReviews} />

      <Feature/>

      {/* Reviews Display */}
      {/* <ReviewList reviews={reviews} /> */}

      <Footer/>
    </div>
  );
};

export default App;
