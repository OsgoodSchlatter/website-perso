import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const PianoSongs = ({ postID }: { postID: string }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-4xl">
          <HeaderCategory
            name={"List of piano songs I play"}
            date={"06/05/2023"}
            back={`/piano/`}
          />
          <div className="p-4 my-20 justify-center">
            <div>- Everglow - Coldplay</div>
            <div>- Viva La Vida - Coldplay</div>
            <div>- Sky Full Of Stars - Coldplay</div>
            <div>- Feeling Good - Muse</div>
            <div>- Every Breath You Take - The Police</div>
            <div>- Lost in yesterday - Tame Impala</div>
            <div>- Against all Odds - Phil Collins</div>
            <div>- Another day in paradise - Phil Collins</div>
            <div>- Riptide - Vance Joy</div>
            <div>- Shallow - Lady Gaga</div>
            <div>- Stay - Rihanna</div>
            <div>- Someone like you - Adele</div>
            <div>- Nightcall - Kavinsky</div>
            <div>- Varadero - Leon </div>
            <div>- Famille - Goldman</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PianoSongs;
