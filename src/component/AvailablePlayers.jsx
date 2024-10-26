import { useEffect, useState } from "react";
import Selected from "./Selected";


const AvailablePlayers = ({handleSelectedPlayer, selectedPlayer, handleDelete}) => {
    const [players, setPlayers] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch('./Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
       
        
    }, []);
    // console.log(players);  
  
   
        
    
    return (
        <div className="main max-w-7xl mx-auto">
            <div className="flex justify-between max-w-7xl mx-auto mt-20">
                <h2 className='text-2xl font-bold'>{activeTab === 0 ? 'Available Players' : `Selected Players (${selectedPlayer.length}/6)`}</h2>
                <div className="flex gap-3">
                    <button
                    className={`px-4 py-2 rounded ${activeTab === 0 ? 'bg-blue-500 text-white' : 'button'}`}
                    onClick={() => setActiveTab(0)}
                    >
                        Available
                    </button>
                    <button
                    className={`px-4 py-2 rounded ${activeTab === 1 ? 'bg-blue-500 text-white' : 'button'}`}
                    onClick={() => setActiveTab(1)}
                    >
                    Selected ({selectedPlayer.length})
                    </button>
                </div>
            </div>
            <div className=" p-6">
            {/* Tab Content */}
            <div className="">
                {activeTab === 0 ? (
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12  mt-8">
            
                {
                    players.map(player => (
                        <div  key={player.playerId} className=" bg-base-100 w-96 border-2 rounded-lg">
                            <figure>
                            <img className="p-6 rounded-lg h-[240px] w-full object-cover"
                             src={player.image}
                            alt="player-image"  />
                            </figure>
                            <div className="card space-y-4 p-6">
                                <div className="flex items-center gap-4">
                                <i className="fa-solid fa-user"></i>
                                <h2 className="text-lg font-semibold">{player.name}</h2>
                                </div>
                                <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4 text-gray-400">
                                <i className="fa-solid fa-flag "></i>
                                <span className="text-gray-400">{player.country}</span>
                                </div>
                                <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg">{player.role}</button>
                                </div>
                                <div className="divider"></div>
                                <h5 className="font-bold text-base">Rating</h5>
                                <div className="flex justify-between flex-grow-0">
                                    <p className="font-semibold text-base">{player.battingType}</p>
                                    <p className="text-gray-500">{player.bowlingType}</p>
                                </div>
                                
                                
                                <div className="flex justify-between items-center">
                                <span className="text-base font-semibold">Price: ${player.biddingPrice}</span>
                                <button onClick={() =>handleSelectedPlayer(player)} className="px-4 py-2 text-sm border-2 rounded-lg">Choose Player</button>
                                </div>
                            </div>
                        </div>
    
                    ) )
                }
                
            </div>
                ) : (
                    <Selected handleDelete={handleDelete} selectedPlayer={selectedPlayer}/>
                )}
            </div>
        </div>
        
        </div>
        
                
    );
};

export default AvailablePlayers;