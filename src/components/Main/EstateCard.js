import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEstates } from "../redux/actions/loadEstates";

function EstateCard() {
  const estatesArray = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEstates());
  }, [dispatch]);

  const estates = estatesArray.map((estate) => (
    <div className="card" key={estate.id}>
      <img className="photo" src={estate.photos} alt="estate-pic" />
      <p>Owner: {estate.owner}</p>
      <p>Kind: {estate.kind}</p>
      <p>Area: {estate.area}</p>
      <p>Description: {estate.description}</p>
    </div>
  ));

  return <div className="cards-container">{estates}</div>;
}

export default EstateCard;
