import img1 from "./nov/IMG20241102161449.jpg";
import img2 from "./nov/IMG20241101130541.jpg";
import img3 from "./2023_dec/xmas_2023.jpg";
import img4 from "./2024_jan/1.jpg";
import img5 from "./2024_jan/2.jpg";
import img6 from "./2024_jan/3.jpg";
import img7 from "./nov/IMG20241121131404.jpg";
import img9 from "./nov/IMG20241121130851.jpg";
import img10 from "./nov/IMG20241121130609.jpg";
import best_24_november from "./best_24/Best_2024_1.jpeg";
import best_24_march from "./best_24/Best_2024_2.jpeg";
import best_24_july from "./best_24/Best_2024_3.jpg";
import best_24_feb from "./best_24/Best_2024_4.jpg";
import best_24_oct from "./best_24/Best_2024_5.jpg";
import best_24_march_gig from "./best_24/Best_2024_6.jpg";
import best_24_oct_gig from "./best_24/Best_2024_7.jpeg";
import best_24_may from "./best_24/Best_2024_8.jpg";
import best_24_aug from "./best_24/Best_2024_9.jpg";
import best_24_nov from "./best_24/Best_2024_10.jpg";
import best_24_sept from "./best_24/Best_2024_11.jpg";
import best_24_jan from "./best_24/Best_2024_12.jpg";
import amsterdam from "./summer24/pics_website-24-25/amsterdam.jpg";
import arradon from "./summer24/pics_website-24-25/arradon.jpg";
import biarritz from "./summer24/pics_website-24-25/biarritz.jpg";
import biarritz2 from "./summer24/pics_website-24-25/biarritz2.jpg";
import bigben from "./summer24/pics_website-24-25/bigben.jpg";
import drums_normandy from "./summer24/pics_website-24-25/drums_normandy.jpg";
import la_rochelle from "./summer24/pics_website-24-25/la_rochelle.jpg";
import laguo_guarda from "./summer24/pics_website-24-25/laguo_di_guarda.jpg";
import london from "./summer24/pics_website-24-25/london.jpg";
import naples from "./summer24/pics_website-24-25/naples.jpg";
import porto_venere from "./summer24/pics_website-24-25/porto_venere.jpg";
import salerno_simona from "./summer24/pics_website-24-25/salerno_simona.jpg";
import turenne from "./summer24/pics_website-24-25/turenne.jpg";
import venezia from "./summer24/pics_website-24-25/venezia.jpg";
import saclay4 from "./music-saclay/saclay4.jpg";
import saclay5 from "./music-saclay/saclay5.jpg";
import saclay8 from "./music-saclay/saclay8.jpg";
import gre1 from "./gig-gre/gre1.jpg";
import gre2 from "./gig-gre/gre2.jpg";
import alltogether from "./pics_2025_saclay/alltogether.jpg"
import drums_eloi from "./pics_2025_saclay/drums-eloi.jpeg"
import gros_plan from "./pics_2025_saclay/gros-plan-manue-eloi.jpeg"
import piano from "./pics_2025_saclay/piano.jpg"
import public_ from "./pics_2025_saclay/public.jpeg"
import shrugged from "./pics_2025_saclay/shrugged-together.jpg"
import malaga from "./malaga/malaga.jpg"
import malaga2 from "./malaga/malaga2.jpg"
import malaga3 from "./malaga/malaga3.jpg"
import malaga4 from "./malaga/malaga4.jpg"
import malaga5 from "./malaga/malaga5.jpg"


export type ImageType = {
    id: number;
    img: string; // URL or import of the image
    date: string; // Format "MM/YYYY"
    caption?: string;
    folder?: Folders[];
    displayOnHome: boolean;
};

export enum Folders {
    Time = "Timeline: 12 Best of each year",
    Mun24 = "Munich November 24",
    Lon23 = "London January 23",
    Sac24 = "Saclay December 24",
    Sum24 = "Summer 24",
    Gig = "Gigs and Concerts",
    Malaga = "Malaga 2019",
}

// Example images array
export const DatedImages: ImageType[] = [
    {
        id: 1,
        img: img1,
        date: "11/2024",
        caption: "A peer at Starnberger see, next to Munich",
        folder: [Folders.Mun24],
        displayOnHome: true,
    },
    {
        id: 2,
        img: img2,
        date: "11/2024",
        caption: "Monopteros at English Garden, in Munich",
        folder: [Folders.Mun24],
        displayOnHome: true,
    },
    {
        id: 3,
        img: img3,
        date: "12/2023",
        caption: "Xmas at the coloc in saclay, 2023 ",
        displayOnHome: true,
    },
    {
        id: 4,
        img: img4,
        date: "01/2024",
        caption: "Pink London Eye",
        folder: [Folders.Lon23],
        displayOnHome: true,
    },
    {
        id: 5,
        img: img5,
        date: "01/2024",
        caption: "Theatre in London, the Book of Mormons ",
        folder: [Folders.Lon23],
        displayOnHome: true,
    },
    {
        id: 6,
        img: img6,
        date: "01/2024",
        caption: "Exotic Shop CyberDog ",
        folder: [Folders.Lon23],
        displayOnHome: true,
    },
    {
        id: 7,
        img: img7,
        date: "11/2024",
        caption: "Snow in saclay",
        folder: [Folders.Sac24],
        displayOnHome: true,
    },

    {
        id: 9,
        img: img9,
        date: "11/2024",
        caption: "Snow in saclay",
        folder: [Folders.Sac24],
        displayOnHome: true,
    },
    {
        id: 10,
        img: img10,
        date: "11/2024",
        caption: "Snow in saclay",
        folder: [Folders.Sac24],
        displayOnHome: false,
    },
    {
        id: 11,
        img: best_24_jan,
        date: "01/2024",
        caption: "Asim and I in London in january 2024",
        folder: [Folders.Time, Folders.Lon23],
        displayOnHome: true,
    },
    {
        id: 12,
        img: best_24_feb,
        date: "02/2024",
        caption: "I went to ski with a couple of friends, and this is in Chamonix",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 13,
        img: best_24_march,
        date: "03/2024",
        caption:
            "Graduation from my engineering school (Telecom SudParis, MSc in computer science)",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 14,
        img: best_24_march_gig,
        date: "03/2024",
        caption: "A gig I did with my group in my house in Saclay",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 15,
        img: best_24_may,
        date: "05/2024",
        caption: "A great night in Biarritz with my friend on the left",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 16,
        img: best_24_july,
        date: "07/2024",
        caption: "Great friends from Brive at Collonge-la-Rouge",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 17,
        img: best_24_aug,
        date: "08/2024",
        caption: "Olympic game opening ceremony with my close friends from Paris",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 18,
        img: best_24_sept,
        date: "09/2024",
        caption: "Surf at Biscarosse with good friends from Brive",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 19,
        img: best_24_oct,
        date: "11/2024",
        caption: "A good friend from high school in Paris wearing fancy hat",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 20,
        img: best_24_oct_gig,
        date: "10/2024",
        caption: "My sister and I singing for my grandma's 80th bday",
        folder: [Folders.Time, Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 21,
        img: best_24_november,
        date: "11/2024",
        caption:
            "My lovely friend at Versailles in an amazing restaurant, le camaleon",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 22,
        img: best_24_nov,
        date: "11/2024",
        caption: "My friends and I surfing in November in Britanny",
        folder: [Folders.Time],
        displayOnHome: true,
    },
    {
        id: 23,
        img: amsterdam,
        date: "11/2024",
        caption: "Amsterdam under a rainbow",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 24,
        img: arradon,
        date: "04/2024",
        caption: "My glorious hometown <3",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 25,
        img: biarritz,
        date: "06/2024",
        caption: "Biarritz views",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 26,
        img: biarritz2,
        date: "06/2024",
        caption: "Biarritz views 2",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 27,
        img: bigben,
        date: "08/2024",
        caption: "London Baby",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 28,
        img: london,
        date: "08/2024",
        caption: "London again",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 29,
        img: la_rochelle,
        date: "07/2024",
        caption: "La Rochelle with my parents",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 30,
        img: laguo_guarda,
        date: "08/2024",
        caption: "Laguo Di Guarda",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 31,
        img: drums_normandy,
        date: "02/2025",
        caption: "Gig in Normandy",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 32,
        img: naples,
        date: "01/2025",
        caption: "Napoli sunset",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 33,
        img: porto_venere,
        date: "08/2024",
        caption: "Porto Venere at night",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 34,
        img: salerno_simona,
        date: "01/2025",
        caption: "Simona in her hometown, Salerno",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 35,
        img: turenne,
        date: "05/2024",
        caption: "Turenne Castle",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 36,
        img: venezia,
        date: "08/2024",
        caption: "Venezia Views",
        folder: [Folders.Sum24],
        displayOnHome: true,
    },
    {
        id: 37,
        img: saclay8,
        date: "03/2024",
        caption: "Gig at Saclay 1",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 38,
        img: saclay5,
        date: "03/2024",
        caption: "Gig at Saclay 2",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 39,
        img: saclay4,
        date: "03/2024",
        caption: "Gig at Saclay 3",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 40,
        img: gre1,
        date: "06/2024",
        caption: "Gig at Grenoble for Martial's sister 1",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 42,
        img: gre2,
        date: "06/2024",
        caption: "Gig at Grenoble for Martial's sister 2",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 44,
        img: alltogether,
        date: "03/2025",
        caption: "The Verse in Saclay in 2025",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 45,
        img: drums_eloi,
        date: "03/2025",
        caption: "Me drumming for The Verse in Saclay in 2025",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 46,
        img: gros_plan,
        date: "03/2025",
        caption: "Playing Telephone",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 47,
        img: piano,
        date: "03/2025",
        caption: "Other point of view",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 48,
        img: public_,
        date: "03/2025",
        caption: "The public",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 49,
        img: shrugged,
        date: "03/2025",
        caption: "Warming up",
        folder: [Folders.Gig],
        displayOnHome: true,
    },
    {
        id: 50,
        img: malaga,
        date: "06/2019",
        caption: "Warming up",
        folder: [Folders.Malaga],
        displayOnHome: false,
    },
    {
        id: 51,
        img: malaga2,
        date: "06/2019",
        caption: "Warming up",
        folder: [Folders.Malaga],
        displayOnHome: false,
    },
    {
        id: 52,
        img: malaga3,
        date: "06/2019",
        caption: "Warming up",
        folder: [Folders.Malaga],
        displayOnHome: false,
    },
    {
        id: 53,
        img: malaga4,
        date: "06/2019",
        caption: "Warming up",
        folder: [Folders.Malaga],
        displayOnHome: false,
    },
    {
        id: 54,
        img: malaga5,
        date: "06/2019",
        caption: "Warming up",
        folder: [Folders.Malaga],
        displayOnHome: false,
    },


];
