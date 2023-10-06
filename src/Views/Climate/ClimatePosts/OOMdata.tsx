import "katex/dist/katex.min.css";

type generalArray = [ArrayItem[], GHGArrayItem[]]
type ArrayItem = [string, number, string];
type GHGArrayItem = [string, number, number, number];

const electricalArray: ArrayItem[] = [
  ["France 🇫🇷", 80, "70% nuclear, 20% renewable, 10% carbon"],
  ["Germany 🇩🇪", 400, "40% carbon, 40% renewable,  20% others"],
  ["UK 🇬🇧", 250, "15% nuclear, 30% renewable, 40% gas"],
  ["Spain 🇪🇸", 200, "20% nuclear, 45% renewable, 30% carbon, 5% others"],
  ["Italy 🇮🇹", 400, "20% renewable, 50% carbon, 30% others"],
  ["Poland 🇵🇱", 900, "65% coal, 15% renewable, 20% others"],
  ["Switzerland 🇨🇭", 60, "30% nuclear, 40% renewable, almost no carbon"],
  ["Sweden 🇸🇪", 22, "20% nuclear, 60% renewable, 100% low-carbon"],
  ["Danemark 🇩🇰", 224, "15% carbon, 60% renewable, 25% others"],
  ["USA 🇺🇸", 400, "20% coal, 20% nuclear, 20% renewable, 40% gas"],
  ["China 🇨🇳 ", 600, "N/A"],
  ["India 🇮🇳 ", 600, "N/A"],
  ["Australia 🇦🇺", 500, "70% carbon, 30% renewable"],
  ["Japan 🇯🇵", 500, "45% carbon, 15% renewable, 5% nuclear, 35% N/A"],
];


const GHGArray: GHGArrayItem[] = [
  ["Coal", 955, 11.8, 4.3],
  ["Oil", 818, 14.2, 4.0],
  ["Natural Gas", 430, -1, 0.3],
  ["Small Hydro", 9, 0.03, 0.07],
  ["Large Hydro", 7, 0.01, 0.01],
  ["Wind", 7, 0.06, 0.1],
  ["PV", 125, 0.2, 0.2],
  ["Solar heat", 30, 0.2, 0.1],
  ["Geothermal", 79, 0.02, 0.28],
  ["Nuclear", 12, -1, -1],

];

const generalArray: generalArray = [electricalArray, GHGArray];

export default generalArray;

