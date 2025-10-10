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
import lattentat from "./lattentat.jpg"
import assemblee from "./assemblee.jpg"
import complot_roth from "./complot_roth.jpg"
import banquet from "./Le-Banquet.jpg"
import midsummer from "./midsummer-nights-dream.webp"
import orwell from "./1984.jpeg"
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
  { title: " L'Attentat ", author: " Yasmina Khadra", date: "2025", pic: lattentat, comment: "This books takes place in Israel and depicts the life of an Arab surgeon that witnesses a terrorist attack. But the terrorist turns out to be his wife... What led her to do so? A great story that puts forward the difficulty to be integrated as an Arab in Israel. " },
  { title: "L'Assemblée des Femmes ", author: " Aristophane", date: "2020", pic: assemblee, comment: "This books depicts a city that tries to change social norms. A group of women takes power and enforces new rules, notably a share of all goods and a right for the least pleasing women to choose a partner. " },
  { title: "Songe d'une Nuit d'Ete / Midsummer night's dream ", author: " Shakespeare", date: "2020", pic: midsummer, comment: "Confusion and love in Antic Greece" },
  { title: "Le Banquet ", author: " Platon", date: "2020", pic: banquet, comment: "Several guests explore the nature of Love during a feast. " },
  { title: "Plot against America ", author: " Philip Roth", date: "2020", pic: complot_roth, comment: "This books puts forward the rise of fascism and antisemitism in the US of 1940s, under the uchronia where Charles Lindbergh becomes president of the US. " },
  { title: "1984 ", author: " George Orwell", date: "2022", pic: orwell, comment: "This books tries to depict a society in which an entity called Big Brother watches over everymove you can make. And beyond moves, it also analyses every thoughts you can have. History is also being rewritten and some words become forbidden." },
];
const BooksContent = () => {
  const sortedBooks = [...BooksArray].sort((a, b) => Number(b.date) - Number(a.date));

  return (
    <>
      <div>
        {sortedBooks.map((value, index) => (
          <div key={index} className="py-2 rounded my-2">
            <a className="items-center text-l font-bold">
              {`${value.title}, ${value.author}, ${value.date}`}
            </a>
            <div className="grid grid-cols-[100px_1fr] items-center justify-between my-2">
              <img
                src={value.pic}
                className="px-2 border-b-2 col-start-1"
                width="100"
                alt={value.title}
              />
              <div className="text-sm">{value.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const intro = <div >
  Some books I have had the opportunity to read and that I may suggest. The date refers to when I read them (from most recent to oldest).
</div>

export const Books = () => {
  return (<StandardHeader title={"Some Readings"} date={"2024"} comment={intro}
    content={< BooksContent />} />)
}
