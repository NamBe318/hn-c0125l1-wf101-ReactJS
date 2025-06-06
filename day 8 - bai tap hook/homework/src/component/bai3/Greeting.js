function Greeting({time}) {
    // const date = new Date();
    const hour = time.getHours();
  
    let greeting;
    if (hour >= 1 && hour < 11) {
      greeting = "Chào buổi sáng";
    } else if (hour >= 11 && hour < 13) {
      greeting = "Chào buổi trưa";
    } else {
      greeting = "Chào buổi tối";
    }
  
    return(
      <h3>{greeting}</h3>
    )
  }
  
  export default Greeting;
  