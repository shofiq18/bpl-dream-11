import Header from "./component/Header";
import Banner from "./component/Banner";
import AvailablePlayers from "./component/AvailablePlayers";
import Footer from "./component/Footer";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selected from "./component/Selected";

const App = () => {
  const [isActive, setIsActive] = useState({
    available: true,
    status:"available"
  })

const [selectedPlayer, setSelectedPlayer] = useState([]);

const [freeCredit, setFreeCredit] = useState(0);

const handleFreeCredit = (amount) => {
  setFreeCredit(freeCredit + amount); // Add the amount to freeCredit
  console.log('Free credit claimed:', amount);
  toast.success('Sucess')
};

const handleDelete = (playerId) => {
  const remainingPlayer = selectedPlayer.filter((p) => p.playerId != playerId);
  setSelectedPlayer(remainingPlayer);

}


const handleSelectedPlayer = (player) => {


  if(selectedPlayer.length <= 5){

    const isExist = selectedPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId)
    setFreeCredit(freeCredit - player.biddingPrice);
    if (!isExist){
      setSelectedPlayer([...selectedPlayer, player])
    }else {
      alert (' Player already selected')
    }
  }
  else{
    alert('you have already selected 6 plyers')
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
      <AvailablePlayers handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer} handleDelete={handleDelete} handleIsActiveState={handleIsActiveState} isActive={isActive}></AvailablePlayers>


      {/* Footer  */}
      <Footer></Footer>
       

    </div>
  );
};

export default App;