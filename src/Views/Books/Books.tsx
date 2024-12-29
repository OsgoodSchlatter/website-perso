import ptef from "./ptef.jpeg";
import kafka from "./kafka.jpg"
import Sidd from "./siddharta.jpg"
import neutron from "./Neutron_P.jpg"
import jerusalem from "./jerusalem.jpeg"
import zeno from "./zeno.jpg"
import primo from "./primo_levi.jpeg"
import zweig from "./zweig.jpg"
import sagan from "./bonjour_tristesse.jpeg"
import andrei from "./andrei.jpeg"
import remarque from "./remarque.jpg"
import { StandardHeader } from "../../Single/StandardHeader";
interface BookEntry {
  title: string;
  author: string;
  date: string;
  comment?: string;
  pic?: string;
}

const BooksArray: BookEntry[] = [
  { title: "Plan de Transformation de l'Economie Française ", author: " The Shift Project", date: "2020", pic: ptef, comment: "A book that explains how we can slowly (but steadily) re-plan and shifts our economy towards a more sustainable one" },
  { title: "Le Procès ", author: " Kafka", date: "2024", pic: kafka, comment: " A book that takes you through an imaginary and helpless trial and fills you with frustration. " },
  { title: "Siddharta ", author: " Hermann Hesse", date: "2024", pic: Sidd, comment: "A book that guides through different lifes embodied by the young Siddharta, who is seeking for the Nirvana" },
  { title: "Neutron Physics ", author: " Paul Reuss", date: "2024", pic: neutron, comment: "Physics of neutron in a nuclear reactor" },
  { title: "Histoire de Jérusalem ", author: " Vincent Lemire - Christophe Gaultier", date: "2024", pic: jerusalem, comment: "A comic that retraces the story of Jerusalem from -2000 to now. Good reading in order to understand today's issues in Middle East" },
  { title: "La coscienza di Zeno - (La conscience de Zeno)", author: " Italo Svevo (Ettore Schmitz)", date: "2024", pic: zeno, comment: "Kind of autobiographic story of a businessman from Trieste that tries to ponder on his life and his acts." },
  { title: "Se questo è un uomo - (Si c'est un homme)", author: " Primo Levi", date: "2014", pic: primo, comment: "Primo Levi enlightens us on how life is like in concentration camps." },
  { title: "Le joueur d'échecs ", author: " Stefan Zweig", date: "2016", pic: zweig, comment: "A guy has played chess in his head for several years due to an arrestation and tries to play against the world champion" },
  { title: "Bonjour Tristesse ", author: " Françoise Sagan", date: "2018", pic: sagan, comment: "A girl Cécile, her father Raymond and his mistress Elsa are on vacation in the South of France. The girl likes to spend some time with Elsa but suddenly Raymond brings Anne at home. Her seriousness and discipline impacts and impress the little trio. Her influence makes Raymond leave elsa for her. But things are not as simple. " },
  { title: "L'archipel d'une autre vie ", author: " Andrei Makine", date: "2023", pic: andrei, comment: "A Russian soldier is sent into the depths of Russia and tries to escape the army. Beautiful sceneries." },
  { title: " A l'ouest rien de nouveau ", author: " Erich Maria Remarque", date: "2013", pic: remarque, comment: "Erich Maria Remarque enlightens us on how life's like in the trenches during WWI. " },

];

const BooksContent = () => {
  return (
    <>
      <div >
        {Array.from(BooksArray.entries())
          .map(([key, value]) => (
            <>
              <div className="py-2 rounded my-2 ">
                <a className="items-center text-l font-bold " >
                  {value.title + ", " + value.author + ", " + value.date}
                </a>
                <div className="grid grid-cols-[100px_1fr] items-center justify-between my-2">
                  <img src={value.pic} className="px-2 border-b-2 col-start-1" width="100" alt="Image" />
                  <div className="text-sm">
                    {value.comment}
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};
const intro = <div >
  Some books I have had the opportunity to read and that I may suggest.
</div>

export const Books = () => {
  return (<StandardHeader title={"Some Readings"} date={"2024"} comment={intro}
    content={< BooksContent />} />)
}
