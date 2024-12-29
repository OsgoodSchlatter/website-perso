import Foldable from "../../Single/Foldable";
import { StandardHeader } from "../../Single/StandardHeader";

export const ItalianContent = () => {
    const Potere = () => (
        <div>
            < ul className="list-disc ml-6" >
                <li>
                    Io posso aiutarti con i compiti. (I can help you with your homework.)

                </li>
                <li>
                    Tu puoi finire il lavoro oggi. (You can finish the work today.)

                </li>
                <li>
                    Lei può viaggiare in Italia. (She can travel to Italy.)

                </li>
                <li>
                    Noi possiamo visitare il museo. (We can visit the museum.)
                </li>
                <li>
                    Voi potete mangiare una gelato (lol)
                </li>
                <li>
                    Loro possono venire alla festa. (They can come to the party.)

                </li>
            </ul >
        </div>
    )
    const Dovere = () => (
        <div>
            Io devo studiare per l'esame. (I have to study for the exam.) <br />
            Tu devi finire il lavoro oggi. (You have to finish the work today.) <br />
            Lui deve fare la spesa. (He has to do the shopping.) <br />
            Lei deve andare dal dottore. (She has to go to the doctor.) <br />
            Noi dobbiamo partire presto. (We have to leave early.) <br />
            Voi dovete ascoltare l'insegnante. (You all have to listen to the teacher.) <br />
            Loro devono completare il progetto. (They have to complete the project.) <br />
        </div>
    )
    const Dare = () => (
        <div>
            Io do un libro a Maria. (I give a book to Maria.) <br />
            Tu dai una mano a tuo fratello. (You give a hand to your brother.) <br />
            Lui dà un consiglio a un amico. (He gives advice to a friend.) <br />
            Lei dà una risposta corretta. (She gives a correct answer.) <br />
            Noi diamo un regalo a Giovanni. (We give a gift to Giovanni.) <br />
            Voi date informazioni ai turisti. (You all give information to the tourists.) <br />
            Loro danno una festa stasera. (They give a party tonight.) <br />
        </div>
    )
    const Fare = () => (
        <div>
            Io faccio colazione alle sette. (I have breakfast at seven.) <br />
            Tu fai i compiti ogni sera. (You do your homework every evening.) <br />
            Lui fa una passeggiata nel parco. (He takes a walk in the park.) <br />
            Lei fa una torta per la festa. (She makes a cake for the party.) <br />
            Noi facciamo sport il sabato. (We play sports on Saturdays.) <br />
            Voi fate un viaggio in Italia. (You all take a trip to Italy.) <br />
            Loro fanno una telefonata importante. (They make an important phone call.) <br />
        </div>
    )
    const Andare = () => (
        <div>
            Io vado al cinema stasera. (I am going to the cinema tonight.) <br />
            Tu vai a scuola ogni giorno. (You go to school every day.) <br />
            Lui va al lavoro in bicicletta. (He goes to work by bicycle.) <br />
            Lei va al supermercato. (She goes to the supermarket.) <br />
            Noi andiamo in vacanza in agosto. (We go on vacation in August.) <br />
            Voi andate al mare nel weekend. (You all go to the sea on the weekend.) <br />
            Loro vanno a un concerto. (They are going to a concert.)<br />
        </div>
    )


    return (
        <>
            <div className="text-3xl   mt-2">Vocabulary - Verb</div>
            <Foldable title="Potere = pouvoir" content={<Potere />} />
            <Foldable title="Dovere = devoir" content={<Dovere />} />
            <Foldable title="Dare = donner" content={<Dare />} />
            <Foldable title="Fare = faire" content={<Fare />} />
            <Foldable title="Andare = aller" content={<Andare />} />

            <div className="text-3xl   mt-2">Sentences on the fly </div>
            <div className="mt-2">
                - tu as une belle maison: Hai una bella casa
            </div>
            <div className="mt-2">
                - nous avons fait bon trajet: Abbiamo fatto un buon viaggio.
            </div>
            <div className="mt-2">
                - voici un cadeau pour vous remercier de nous accueillir:
                Ecco un regalo per ringraziarvi di accoglierci
            </div>
            <div className="mt-2">
                - Je m'appelle Eloi et je suis content de vous rencontrer =
                Mi chiamo Eloi e sono contento di incontrarvi
            </div>
            <div className="mt-2">
                - Ou est-ce que je peux utiliser vos toilettes? =
                Dove posso usare il vostro bagno?
            </div>
            <div className="mt-2">
                - J'ai appris quelques mots d'italiens et je vais essayer de parler un peu =
                Ho imparato alcune parole in italiano e cercherò di parlare un po'.
            </div>
            <div className="mt-2">
                - je m'appelle Eloi, j'ai 24 ans et je viens de France. Je suis un ami de Simona=
                Mi chiamo Eloi, ho venti quatro anni e vengo dalla Francia. Sono un amico di Simona.
            </div>
            <div className="mt-2">
                - Simona est une fille très drôle et je suis content de l'avoir comme amie =
                Simona è una ragazza molto divertente e sono contento di averla come amica.
            </div>
            <div className="mt-2">
                - Je suis content d'être en italie =
                Sono contento di essere in Italia
            </div>
            <div className="mt-2">
                Comment puis-je vous aider ? =
                Come posso aiutarti?
            </div>
            <div className="text-3xl  mt-2 mb-2">Numbers </div>
            1 - uno, 2 - due, 3 - tre, 4 - quattro, 5 - cinque, <br />
            6 - sei, 7 - sette, 8 - otto, 9 - nove, 10 - dieci, <br />

            11 - undici, 12 - dodici, 13 - tredici, 14 - quattordici, 15 - quindici, <br />
            16 - sedici, 17 - diciassette, 18 - diciotto, 19 - diciannove, 20 - venti, <br />
            10 - dieci,
            20 - venti,
            30 - trenta,
            40 - quaranta,
            50 - cinquanta,
            60 - sessanta,
            70 - settanta,
            80 - ottanta,
            90 - novanta,
            100 - cento,
            1000 - mille.
        </>
    );
};

const intro = <div>
    This page is gathering some notions of the Italian language, that I am trying to learn
</div>

export const Italian = () => {
    return (<StandardHeader title={"Italian 🇮🇹"} date={"2024"} comment={intro}
        content={< ItalianContent />} />)
}


