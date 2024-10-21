import ptef from "./ptef.jpeg";
import kafka from "./kafka.jpg"
import Sidd from "./siddharta.jpg"
import neutron from "./Neutron_P.jpg"
import jerusalem from "./jerusalem.jpeg"
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


];

export const Books = () => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="justify-center max-w-2xl">
          <div className="p-2 text-xl font-bold justify-center ">
            Some books I have had the opportunity to read and that I may suggest.
          </div>
          <div className="my-4 justify-center">
            {Array.from(BooksArray.entries())
              .map(([key, value]) => (
                <>
                  <div className=" p-2 rounded my-2 ">
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
        </div>
      </div>
    </>
  );
};
