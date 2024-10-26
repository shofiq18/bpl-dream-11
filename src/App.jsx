import Header from "./component/Header";
import Banner from "./component/Banner";
import AvailablePlayers from "./component/AvailablePlayers";
import Footer from "./component/Footer";
import ButtonContainer from "./component/ButtonContainer";
import { useState } from "react";
import Selected from "./component/Selected";

const App = () => {
  const [isActive, setIsActive] = useState({
    available: true,
    status:"available"
  })

  const handleIsActiveState = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
    status:"available"
      })
    }
    else {
      setIsActive({
        available: false,
    status:"selected"
      })
    }
  }
 


  return (
    <div className="">


      {/* Header  */}
      <Header></Header>



      {/* Banner */}
      <Banner></Banner>

      {/* Button container */}
      <ButtonContainer handleIsActiveState={handleIsActiveState} isActive={isActive}></ButtonContainer>



      {/* Available Players */}
      <AvailablePlayers></AvailablePlayers>

      {/* selected section */}
      <Selected></Selected>

      

      {/* Footer  */}
      <Footer></Footer>
       

    </div>
  );
};

export default App;