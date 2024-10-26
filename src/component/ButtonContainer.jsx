// import './ButtonContainer.css'


// const ButtonContainer = ({handleIsActiveState, isActive}) => {
//     return (
//         <div className=" flex justify-between max-w-7xl mx-auto mt-20">
//             <h2>Available Players</h2>
//             <div className="flex">
//             <div onClick={() => handleIsActiveState("available")} className={`${isActive.available?"Button Active":"Button"}`}>Available</div>
//             <div onClick={() => handleIsActiveState("selected")} className={`${isActive.available?"Button":"Active Button"}`}>Selected</div>
//             </div>
//         </div>
//     );
// };

// export default ButtonContainer;
import PropTypes from 'prop-types';
import './ButtonContainer.css';
import Selected from './Selected';
import AvailablePlayers from './AvailablePlayers';

const ButtonContainer = ({ handleIsActiveState, isActive }) => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto mt-20">
      <h2>Available Players</h2>
      <div className="flex">
        <div 
          onClick={() => handleIsActiveState("available")} 
          className={`${isActive.status === "available" ? "button active" : "button"}`}>Available</div>
        <div 
          onClick={() => handleIsActiveState("selected")} 
          className={`${isActive.status === "selected" ? "button active" : "button"}`}>Selected</div>
      </div>
    </div>

  
  );
};

ButtonContainer.propTypes = {
  handleIsActiveState: PropTypes.func.isRequired,
  isActive: PropTypes.shape({
    available: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonContainer;
