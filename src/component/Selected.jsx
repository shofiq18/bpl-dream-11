

// eslint-disable-next-line react/prop-types
const Selected = ({selectedPlayer, handleDelete, setActiveTab, activeTab}) => {
    return (
        <div className="max-w-7xl mx-auto mt-12">
            <div>
                {
                // eslint-disable-next-line react/prop-types
                selectedPlayer.map(player => (
                        <div key={player.playerId} className="flex justify-between items-center my-6 p-4 rounded-lg   border-2">
                            <div  className="flex items-center gap-4 ">
                            <div><img className="w-20 h-20 rounded-lg object-cover" src={player.image} alt="player-image" /></div>
                            <div className="space-y-2">
                            <h3 className="text-lg font-semibold">{player.name}</h3>
                            <p className=" text-gray-600 text-sm">{player.role}</p>
                            <p className=" text-gray-600 text-sm">${player.biddingPrice}</p>
                            </div>
                            </div>
                            <button className="cursor-pointer"><i onClick={() => handleDelete(player.playerId)} className="fa-regular fa-trash-can text-red-400"></i></button>
                        </div>
                    ) )
                }
            </div>
            <button
                className={`px-4 py-2 rounded-xl  ${activeTab === 0 ? 'btn mt-6 bg-[#E7FE29]' : 'btn mt-6 bg-[#E7FE29]'}`}
                onClick={() => setActiveTab(0)}
                >
                Add More Player
            </button>
        </div>
    );
};

export default Selected;