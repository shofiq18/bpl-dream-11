

const Selected = ({selectedPlayer, handleDelete}) => {
    return (
        <div className="max-w-7xl mx-auto mt-12">
            <div>
                {
                selectedPlayer.map(player => (
                        <div key={player.playerId} className="flex justify-between items-center my-6 p-4 rounded-lg   border-2">
                            <div  className="flex items-center gap-4 ">
                            <div><img className="w-20 h-20 rounded-lg object-cover" src={player.image} alt="player-image" /></div>
                            <div className="space-y-3">
                            <h3 className="text-lg font-semibold">{player.name}</h3>
                            <p className=" text-gray-600 text-sm">{player.role}</p>
                            </div>
                            </div>
                            <i onClick={() => handleDelete(player.playerId)} className="fa-regular fa-trash-can text-red-400"></i>
                            
                        </div>
                
                    ) )
                    
                }
            </div>
            <button className="btn mt-6 bg-[#E7FE29]">Add More Player</button>
        </div>
    );
};

export default Selected;