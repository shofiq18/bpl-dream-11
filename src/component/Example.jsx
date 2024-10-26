import { useState } from "react";

const Example = () => {
    const [activeTab, setActiveTab] = useState(0);

    return(
        <div className="flex flex-col items-center p-6">
            {/* Tab Buttons */}
            <div className="flex space-x-4 mb-4">
                <button
                className={`px-4 py-2 rounded ${activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveTab(0)}
                >
                </button>
                <button
                className={`px-4 py-2 rounded ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveTab(1)}
                >
                Tab 2
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 border rounded w-full max-w-md text-center">
                {activeTab === 0 ? (
                <p>This is the content for Tab 1.</p>
                ) : (
                <p>This is the content for Tab 2.</p>
                )}
            </div>
        </div>
  );
}

export default Example;
