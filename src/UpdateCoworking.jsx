import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const UpdateCoworking = () => {
  const [coworking, setCoworking] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/coworkings/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        setCoworking(responseJs.data);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;
    const priceDay = event.target.priceDay.value;

    fetch(`http://localhost:3000/api/coworkings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        superficy: superficy,
        capacity: capacity,
        price: {
          day: priceDay,
          hour: null,
          month: null,
        },
      }),

    }).then((response) => {
      if (response.status === 200) {
        console.log("coworking modifié");
      } else {
        console.log("erreur");
      }
    });
  };

  return (
    <>
      <Header />
      {coworking ? (
        <>
          <h1>Mise à jour du coworking : {coworking.name}</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom du coworking</label>
              <input type="text" name="name" defaultValue={coworking.name} />
            </div>
            <div>
              <label htmlFor="superficy">Superficie</label>
              <input type="number" name="superficy" defaultValue={coworking.superficy} />
            </div>
            <div>
              <label htmlFor="capacity">Capacité</label>
              <input type="number" name="capacity" defaultValue={coworking.capacity} />
            </div>

            <div>
              <label htmlFor="priceDay">Prix au jour</label>
              <input type="number" name="priceDay" defaultValue={coworking.price.day} />
            </div>

            <button type="submit">Mettre à jour le coworking</button>
          </form>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
};

export default UpdateCoworking;