import Header from "./component/Header";
import Banner from "./component/Banner";
import AvailablePlayers from "./component/AvailablePlayers";

const App = () => {
  return (
    <div className="">


      {/* Header  */}
      <Header></Header>



      {/* Banner */}
      <Banner></Banner>



      {/* Available Players */}
      <AvailablePlayers></AvailablePlayers>
       

    </div>
  );
};

export default App;