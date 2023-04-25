import Header from "./Header";


const CreateCoworking = ()=>{
  const handleSubmit=(event)=>{
    event.preventDefault();

    const name = event.target.name.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;
    const priceDay = event.target.priceDay.value;
    fetch("http://localhost:3000/api/coworkings", {
      method: "POST",
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
      })
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("coworking créé");
      } else {
        console.log("erreur");
      }
    });
  };

  
  return (
    <div>
    <Header/>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name"/>
      <label htmlFor="superficy">Superficy</label>
      <input type="number" name="superficy"/>
      <label htmlFor="capacity">Capacity</label>
      <input type="number" name="capacity"/>
      <label htmlFor="priceDay">Price</label>
      <input type="number" name="priceDay"/>
      <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default CreateCoworking;