import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import { Header } from '../../Single/Header';
import { BsArrowReturnRight } from 'react-icons/bs';

export const Chess = () => {
  const [blitzRating, setBlitzRating] = useState<string | null>(null);
  const [bulletRating, setBulletRating] = useState<string | null>(null);
  const [problemRating, setProblemRating] = useState<string | null>(null);



  const scrapeRating = async (chessType: string): Promise<string | null> => {
    try {
      const url = 'https://lichess.org/@/Osgood_Schlatter16';
      const response = await axios.get(url);
      const black = response.data.paginator.currentPageResults[0].players.black;
      const white = response.data.paginator.currentPageResults[0].players.white;
      console.log(response.data);

      if (chessType === "Blitz") {
        if (white.userId == "osgood_schlatter16") {
          return white.rating;
        }
        else {
          return black.rating;
        }
      }
      else if (chessType === "Puzzles") {
        return " ";
      }
      else return " ";
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  useEffect(() => {
    async function fetchRatings() {
      const newBlitzRating = await scrapeRating("Blitz");
      setBlitzRating(newBlitzRating);

      const newBulletRating = await scrapeRating("Bullet");
      setBulletRating(newBulletRating);

      const newProblemRating = await scrapeRating("Puzzles");
      setProblemRating(newProblemRating);
    }

    // Fetch initial rating
    fetchRatings();

    // Update rating every 10 minutes
    const intervalId = setInterval(fetchRatings, 10 * 60 * 1000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className='flex pl-2 pt-2'>
        <div>Live lichess rating:
          <a className='m-2 bg-red-200 p-1 rounded-lg' href="https://lichess.org/@/Osgood_Schlatter16">Blitz: {blitzRating}</a>
        </div>
      </div>
      <div>
        <Header name={"Chess"} posts={0} />
      </div>


    </div>
  );
};