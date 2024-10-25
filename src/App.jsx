import Header from "./component/Header";
import Banner from "./component/Banner";
import AvailablePlayers from "./component/AvailablePlayers";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="">


      {/* Header  */}
      <Header></Header>



      {/* Banner */}
      <Banner></Banner>



      {/* Available Players */}
      <AvailablePlayers></AvailablePlayers>

      {/* Footer  */}
      <Footer></Footer>
       

    </div>
  );
};

export default App;