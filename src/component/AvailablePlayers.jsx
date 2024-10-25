import { useEffect, useState } from "react";



const AvailablePlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
       
        
    }, []);
    console.log(players);
   
        
    
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  mt-12">
            
            {
                players.map(player => (
                    <div key={player.playerId} className=" bg-base-100 w-96 border-2 rounded-lg">
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
                            <span className="text-base font-semibold">Price: {player.biddingPrice}</span>
                            <button className="px-4 py-2 text-sm border-2 rounded-lg">Choose Player</button>
                            </div>
                        </div>
                    </div>
                    

                ) )
            }
            
        </div>
    );
};

export default AvailablePlayers;