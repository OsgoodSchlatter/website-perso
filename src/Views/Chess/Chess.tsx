import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import { Header } from '../../Single/Header';

export const Chess = () => {
  const [blitzRating, setBlitzRating] = useState<string | null>(null);
  const [bulletRating, setBulletRating] = useState<string | null>(null);
  const [problemRating, setProblemRating] = useState<string | null>(null);



  const scrapeRating = async (chessType: string): Promise<string | null> => {
    try {
      const url = 'https://lichess.org/@/Osgood_Schlatter16';
      const response = await axios.get(url);
      const html = response.data;

      const $ = cheerio.load(html);
      const blitzRatingElement = $(`h3:contains("${chessType}") + rating strong`);
      const ratingValue = blitzRatingElement.text();

      return ratingValue;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  useEffect(() => {
    async function fetchRatings() {
      const newBlitzRating = await scrapeRating("Blitz");
      if (newBlitzRating !== null) {
        setBlitzRating(newBlitzRating);
      }
      const newBulletRating = await scrapeRating("Bullet");
      if (newBulletRating !== null) {
        setBulletRating(newBulletRating);
      }
      const newProblemRating = await scrapeRating("Puzzles");
      if (newProblemRating !== null) {
        setProblemRating(newProblemRating);
      }
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
        <div>Current lichess ratings:
          <a className='m-2' href="https://lichess.org/@/Osgood_Schlatter16">Blitz: {blitzRating}</a>
        </div>
        <div>
          <a className='m-2' href="https://lichess.org/@/Osgood_Schlatter16">Bullet: {bulletRating}</a>
        </div>
        <div>
          <a className='m-2' href="https://lichess.org/@/Osgood_Schlatter16">Problem: {problemRating}</a>
        </div>
      </div>
      <div>
        <Header name={"chess"} posts={0} />
      </div>


    </div>
  );
};