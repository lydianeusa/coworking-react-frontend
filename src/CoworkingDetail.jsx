import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
  
  const CoworkingDetail = () => {
    const [coworking, setCoworking] = useState(null);
  
    const { id } = useParams();
    useEffect(() => {
      fetch(`http://localhost:3000/api/coworkings/${id}`)
        .then((responseJson) => responseJson.json())
        .then((responseJs) => {setCoworking(responseJs.data);
        });
    },[id]);
  
    return (
      <div>
        <Header />
        {coworking ? (
          <>
            <h1>Détail du coworking</h1>
            <div>
              <h1>{coworking.name}</h1>
              <p>Superficie : {coworking.superficy}</p>
              <p>Capacity : {coworking.capacity}</p>
  
              {/* 
                Vu que l'adresse n'est pas obligatoire
                je vérifie qu'elle existe avant de l'afficher
              */}
              {coworking.address && (
                <p>
                  Adresse : {coworking.address.number} {coworking.address.street} - {coworking.address.postCode},{" "}
                  {coworking.address.city}
                </p>
              )}
            </div>
          </>
        ) : (
          <p>Pas de coworking trouvé</p>
        )}
      </div>
    );
  };
  
  export default CoworkingDetail;