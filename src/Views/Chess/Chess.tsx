import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeaderCategory } from '../../Single/HeaderCategory';
interface RatingRecord {
  points: number[][];
  name: string;
  // Add more properties as needed based on the actual structure of the rating history record
}

export const Chess = () => {
  const [eloHistory, setEloHistory] = useState([]);
  const [eloHistoryOsgood, setEloHistoryOsgood] = useState([]);

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("")

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const fetchEloHistory = async (name: string) => {
      try {
        const responseOsgood = await axios.get(`https://lichess.org/api/user/osgood_schlatter16/rating-history`);
        const nonEmptyDataOsgood = responseOsgood.data.filter((item: { points: string | any[]; }) => item.points.length > 0);
        setEloHistoryOsgood(nonEmptyDataOsgood);
        const response = await axios.get(`https://lichess.org/api/user/${name}/rating-history`);
        const nonEmptyData = response.data.filter((item: { points: string | any[]; }) => item.points.length > 0);
        setEloHistory(nonEmptyData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ELO history:', error);
        setLoading(false);
      }
    };
    fetchEloHistory(name);
  }, [name]); // Add name as a dependency to re-fetch data when it changes


  return (
    <>
      <div className="flex justify-center p-4">
        <div className="max-w-4xl">
          <HeaderCategory
            name={"Chess Elo comparator"}
            date={"2023"}
            back={`/chess/`}
          />



          <div className='p-2'>
            <div className='border border-gray-200'>
              <div className='p-2 grid grid-cols-2 gap-2'>
                <div className='col-start-1 col-end-2 cold-span-2'>
                  <h2 className='sm:flex items-center'> Lichess ELO of: <div className='bg-red-200 ml-1 p-1 rounded-xl w-fit'>osgood_schlatter16</div> </h2>
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <ul className='p-2'>
                      {eloHistoryOsgood.map((record: RatingRecord, index: number) => (
                        <li className='flex' key={index}>

                          {record.name}, {record.points[record.points.length - 1][0]},
                          <div className='bg-green-100 w-fit ml-2 rounded'>
                            {record.points[record.points.length - 1][3]}
                          </div>

                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className='col-start-2 col-end-3 cold-span-2'>
                  <div className='p-1'>
                    Compare with player:  <input
                      type="text"
                      value={name}
                      onChange={handleInputChange}
                      placeholder="Type something..."
                      className='bg-slate-100 rounded'
                    />
                  </div>
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <ul className='p-2'>
                      {eloHistory.map((record: RatingRecord, index: number) => (
                        <li className='flex' key={index}>

                          {record.name}, {record.points[record.points.length - 1][0]},
                          <div className='bg-green-100 w-fit ml-2 rounded'>
                            {record.points[record.points.length - 1][3]}
                          </div>

                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

