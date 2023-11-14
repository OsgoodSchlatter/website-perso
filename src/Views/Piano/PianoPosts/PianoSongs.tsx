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
            <div>
              <a href="https://www.youtube.com/watch?v=TsqSN9k0G40" className="hover:underline">- Everglow - Coldplay</a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=mIwkXvxOwhw" className="hover:underline">- Viva La Vida - Coldplay</a>
            </div>
            <div>- Sky Full Of Stars - Coldplay</div>
            <div>- Feeling Good - Muse</div>
            <div>
              <a href="https://www.youtube.com/watch?v=GPMvlTYbns0" className="hover:underline">- Every Breath You Take - The Police</a>
            </div>
            <div>
              <a href="https://www.youtube.com/shorts/ZFbCH9DfzuU" className="hover:underline">- Lost in yesterday - Tame Impala</a>
            </div>
            <div>- Against all Odds - Phil Collins</div>
            <div>- Another day in paradise - Phil Collins</div>
            <div>- Riptide - Vance Joy</div>
            <div>- Shallow - Lady Gaga</div>
            <div>- Stay - Rihanna</div>
            <div>- Someone like you - Adele</div>
            <div>- Nightcall - Kavinsky</div>
            <div>- Varadero - Leon </div>
            <div>- Famille - Goldman</div>
            <div>
              <a href="https://youtu.be/ujW0PnPbBlE?si=sbxBo0kwUWuiiTfw" className="hover:underline">- Pirates des Caraïbes - Hans Zimmer</a>
            </div>
            <a href="https://www.youtube.com/watch?v=_v75os9sLL0" className="hover:underline">- I belong to you - Muse</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default PianoSongs;
