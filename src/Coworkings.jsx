import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

const CoworkingsList = () => {

  const [coworkingsData, setCoworkingsData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/coworkings")
      .then((coworkingsDataJson) => coworkingsDataJson.json())
      .then((coworkingsDataJs) => {
        setCoworkingsData(coworkingsDataJs.data);
      });
  }, []);

  const handleDeleteClick = (coworking) => {
    fetch("http://localhost:3000/api/coworkings/" + coworking.id, {
      method: "DELETE",
    })
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <h1>coworkings</h1>

      {coworkingsData.map((coworking) => {
        return (
          <div key={coworking.id}>
            <h2>{coworking.name}</h2>
            <p>Address : </p>
            <ul>
              {/* <li>{coworking.address.city}</li>
              <li>{coworking.address.number}</li>
              <li>{coworking.address.street}</li>
              <li>{coworking.address.postCode}</li> */}
            </ul>
            <p>Superficie : {coworking.superficy}</p>

            <Link to={`/coworkings/${coworking.id}`}>Voir le coworking</Link>
            <Link to={`/coworkings/${coworking.id}/update`}>modifier le coworking</Link>
            <button onClick={() => handleDeleteClick(coworking)}>Supprimer le coworking</button>
          </div>
        );
      })}
    </>
  );
};

export default CoworkingsList;