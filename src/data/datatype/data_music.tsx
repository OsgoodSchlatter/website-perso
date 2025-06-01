export type Song = {
    id: number,
    title: string,
    author: string,
    url: string,
}

export const Songs: Song[] = [
    {
        id: 1,
        title: "I Belong to you",
        author: "Muse",
        url: "https://youtu.be/8ttu6RxqbZg?si=8Vakn8XaqbGzmoaP"
    },
    {
        id: 2,
        title: "Disco Yes",
        author: "Tom Misch",
        url: "https://youtu.be/EXWOJvlDwbU?si=1enmRFMqCdG1Xblq"
    },
    {
        id: 3,
        title: "Dark Necessities",
        author: "Red Hot Chili Peppers",
        url: "https://youtu.be/Q0oIoR9mLwc?si=r2t0I9IsjewhsBFx"
    },
    {
        id: 4,
        title: "Spit of you",
        author: "Sam Fender",
        url: "https://youtu.be/xoODq7Ol1so?si=xz1dvdxsSeUQEGFh"
    },
    {
        id: 5,
        title: "Lady Writer",
        author: "Dire Straits",
        url: "https://youtu.be/BlD6jCGVU4A?si=Kxclw-NGrUyjUeV0",
    },
    {
        id: 6,
        title: "Respire Encore",
        author: "Clara Luciani",
        url: "https://youtu.be/uWH00ehhLP8?si=srGqqAujNyasBDb-"
    },
    {
        id: 7,
        title: "Still loving you",
        author: "Skorpion",
        url: "https://youtu.be/7pOr3dBFAeY?si=FOeAuwUJG7NuEZBa"
    },
    {
        id: 8,
        title: "Money for nothing",
        author: "Dire Straits",
        url: "https://youtu.be/wTP2RUD_cL0?si=apKdQ3uTuWne3_G6",
    },
    {
        id: 9,
        title: "Rumor has it",
        author: "Adele",
        url: "https://youtu.be/C1G3jmtoOfk?si=nZE3uHAT1X9iwdVW"
    },
    {
        id: 10,
        title: "505",
        author: "Artic Monkeys",
        url: "https://youtu.be/qU9mHegkTc4?si=oIA96m6PihOmBne9"
    },
    {
        id: 11,
        title: "Butterfly",
        author: "Superbus",
        url: "https://youtu.be/CQPNj38WscM?si=Hhju8jO2AVvOB2Bn"
    },
    {
        id: 12,
        title: "BabyDoll",
        author: "Dominic Fike",
        url: "https://youtu.be/nb8CnIo_-_A?si=TKiV9ews-0rcKZda"
    },
    {
        id: 13,
        title: "You know I'm no good",
        author: "Amy Winehouse",
        url: "https://youtu.be/b-I2s5zRbHg?si=EQnAFXWuqZLMOeOc"
    },
    {
        id: 14,
        title: "Love on the Brain",
        author: "Rihanna",
        url: "https://youtu.be/QMP-o8WXSPM?si=4ZlHlvyvEHAOGBZ_"
    },
    {
        id: 15,
        title: "Habits (Stay High)",
        author: "Tove Lo",
        url: "https://youtu.be/7D_3x2H7Wts?si=SQAKLfkOI59ClX91"
    },
    {
        id: 16,
        title: "New York avec toi",
        author: "Téléphone",
        url: "https://youtu.be/aWROzt7kudk?si=SyTybSSTAZJG_kEj"
    },
    {
        id: 17,
        title: "Hold the Line",
        author: "Toto",
        url: "https://youtu.be/htgr3pvBr-I?si=sInStDztVCwUOUrZ"
    },
    {
        id: 18,
        title: "Maniac",
        author: "Michael Sembello",
        url: "https://youtu.be/6GCNUeTFSbA?si=6_2bH_ZODtobBGCG"
    },
    {
        id: 19,
        title: "Message in a Bottle",
        author: "The Police",
        url: "https://youtu.be/MbXWrmQW-OE?si=cGGsIA2PhecLZAQ-"
    },
    {
        id: 20,
        title: "Un autre monde",
        author: "Téléphone",
        url: "https://www.youtube.com/watch?v=NrQnuMnL2ac"
    },
    {
        id: 21,
        title: "Modern Love",
        author: "Zaho de Sagazan",
        url: "https://www.youtube.com/watch?v=nNRN74-HoU4"
    }
]


export const SetLists = {
    saclay_2024: [
        Songs[0],
        Songs[1],
        Songs[2],
        Songs[3],
        Songs[4],
        Songs[5],
        Songs[6],
    ],
    saclay_2025: [
        Songs[8],
        Songs[9],
        Songs[10],
        Songs[11],
        Songs[12],
        Songs[13],
        Songs[14],
        Songs[15],
        Songs[16],
        Songs[17],
        Songs[18],

    ],
    nantes_2025: [
        Songs[8],
        Songs[9],
        Songs[10],
        Songs[11],
        Songs[12],
        Songs[13],
        Songs[14],
        Songs[15],
        Songs[16],
        Songs[17],
        Songs[18],
        Songs[19],
        Songs[20]
    ],
};
