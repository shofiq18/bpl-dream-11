import Header from "./component/Header";
import Banner from "./component/Banner";
import AvailablePlayers from "./component/AvailablePlayers";
import Footer from "./component/Footer";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line react/prop-types
const App = ({setActiveTab}) => {
  const [isActive, setIsActive] = useState({
    available: true,
    status:"available"
  })

const [selectedPlayer, setSelectedPlayer] = useState([]);

const [freeCredit, setFreeCredit] = useState(0);

const handleFreeCredit = (amount) => {
  setFreeCredit(freeCredit + amount); 
  toast.success('Credit added to your account',{
    position: "top-center",
        theme: "dark"
  })
};

const handleDelete = (playerId) => {
  
  const remainingPlayer = selectedPlayer.filter((p) => p.playerId != playerId);
  setSelectedPlayer(remainingPlayer);
  
  toast.success('Player removed successfully', {
    position: "top-center",
    theme: "dark"
  });

}


const handleSelectedPlayer = (player) => {


  if(selectedPlayer.length <= 5){

    if (freeCredit === 0) {
      toast.warn('Your balance is empty', {
          position: "top-center",
          theme: "dark"
      });
      return;
  }
  

  if (freeCredit < player.biddingPrice) {
    toast.warn('No available coin', {
        position: "top-center",
        theme: "dark"
    });
    return; 
}

    const isExist = selectedPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId)
    setFreeCredit(freeCredit - player.biddingPrice);
    
     if (!isExist){
        setSelectedPlayer([...selectedPlayer, player])
        toast.success(`Congrats !! ${player.name} is now in your squad`,{
        position: "top-center",
        theme: "dark"
      })
    }else {
        toast.warn('Player already selected',{
        position: "top-center",
        theme: "dark"

      });

    }
  }
  else{
    toast.error('You have already selected 6 players',{
      position: "top-center",
        theme: "dark"

    });

  }
  
  
}

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
      <Header freeCredit={freeCredit}></Header>

      {/* Banner */}
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
    
      {/* Available Players */}

      <AvailablePlayers setActiveTab={setActiveTab} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer} handleDelete={handleDelete} handleIsActiveState={handleIsActiveState} isActive={isActive}></AvailablePlayers>
      <ToastContainer />


      {/* Footer  */}

      <Footer></Footer>
       

    </div>
  );
};

export default App;