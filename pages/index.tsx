import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [offset, setOffset] = useState(5);
  const [limit, setLimit] = useState(5);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLaunches(offset);
  }, []);

  const getLaunches = async (offset: number) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://ll.thespacedevs.com/2.2.0/launch/?format=json&limit=${limit}&offset=${offset}`
      );
      setError('');
      setLaunches(data.results);
    } catch (error) {
      console.log(error);
      setError('Error: Please try again later');
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    setOffset(offset + 5);
    setLimit(offset + 5);
    getLaunches(offset);
  };

  return (
    <div className="container mx-auto px-20">
      {loading ? (
        <div className="text-center mt-10">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {launches.map((launch, i) => (
            <div
              key={i}
              className="max-w-lg my-4 mx-auto overflow-hidden rounded-lg lg:flex"
            >
              <div
                className={` p-3 border ${
                  launch['status']['abbrev'] == 'Success'
                    ? 'border-green-600'
                    : 'border-red-600'
                }`}
              >
                <div className="flex-1 px-6 py-8 bg-slate-800 lg:p-12">
                  <h3 className="">
                    {launch['launch_service_provider']['name']}
                  </h3>
                  <p>Type: {launch['launch_service_provider']['type']}</p>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-white">
                      Mission Desc:
                    </span>
                    <span className="text-sm font-medium text-gray-500 pl-1">
                      {launch['mission']['description']}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <h2 className="text-xl font-medium text-white pt-4">
                    Launch Name: {launch['name']}
                  </h2>

                  <div className="mb-2">
                    <span className="text-sm font-medium text-white">
                      Launch Date:
                    </span>
                    <span className="text-sm font-medium text-gray-500 pl-1">
                      {launch['net']}
                    </span>
                  </div>

                  <span className="text-sm font-medium text-white">
                    Status:{' '}
                  </span>
                  {launch['status']['abbrev'] == 'Success' ? (
                    <span className="text-sm font-medium text-green-500">
                      Successful
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-red-500 pl-1">
                      Failed
                    </span>
                  )}

                  <div className="my-2 mb-5">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-white">
                        Status Desc:
                      </span>
                      <span className="text-sm font-medium text-gray-500 pl-1">
                        {launch['status']['description']}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {loading ? null : (
        <div className="p-5 text-center">
          <button className="p-1 border border-white" onClick={handleLoadMore}>
            Load More
          </button>
          <p className="text-red-600 pt-5">{error}</p>
        </div>
      )}
    </div>
  );
}
