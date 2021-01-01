import { useState, useEffect } from "react";

function EstateCard() {
  const [allEstates, setAllEstates] = useState();

  useEffect(() => {
    fetch("https://mongo-real-estate.herokuapp.com/api/v1/acamica/estate")
      // fetch("http://127.0.0.1:5500/api/v1/acamica/health")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setAllEstates(response[0]._id);
      });
  }, []);

  return (
    <div>
      <h1>EstateCard</h1>
      <h2>{allEstates}</h2>
      {/* <img src={allEstates} alt=""></img> */}
    </div>
  );
}

export default EstateCard;
