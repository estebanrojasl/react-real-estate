import { useState, useEffect } from "react";

function EstateCard() {
  const [allEstates, setAllEstates] = useState([]);

  useEffect(() => {
    fetch("https://mongo-real-estate.herokuapp.com/api/v1/acamica/estate")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setAllEstates(response);
      });
  }, []);

  const estate = allEstates.map((estate) => (
    <div key={estate._id}>
      <img src="" alt="estate-pic" />
      <p>Owner: {estate.owner}</p>
      <p>Kind: {estate.kind}</p>
      <p>Area: {estate.area}</p>
      <p>Description: {estate.description}</p>
      <br />
    </div>
  ));

  return <div>{estate}</div>;
}

export default EstateCard;
