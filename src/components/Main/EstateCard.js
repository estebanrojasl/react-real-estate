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
    <div key={estate.id}>
      <img src={estate.photos} alt="estate-pic" />
      <p>Owner: {estate.owner}</p>
      <p>Kind: {estate.kind}</p>
      <p>Area: {estate.area}</p>
      <p>Description: {estate.description}</p>
      <br />
    </div>
  ));

  return <div>{estates}</div>;
}

export default EstateCard;
