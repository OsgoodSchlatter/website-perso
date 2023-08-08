import { HeaderPost } from "../../../../Single/HeaderPost";
import "katex/dist/katex.min.css";
import add from "../../../../img/add.png";
import division from "../../../../img/division.png";
import mult from "../../../../img/mult.png";
import sub from "../../../../img/sub.png";
import React from "react";
import Latex from "react-latex-next";
import ImageViewer from "react-simple-image-viewer";

const FHE = ({ postID }: { postID: string }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-2xl">
          <HeaderPost
            name={"Fully Homomorphic Encryption Tool"}
            date={"19/03/2023"}
            back={`/cs/`}
          />
          <div className="my-20 justify-center">
            <div className="text-3xl pt-8 pb-2">[DISCLAIMER]</div>
            <div>
              In this article, I wish to introduce people to FHE and to present
              some of the work I have achieved using this technology. Some of
              the notions I include in this paper are obviously not from me and
              I cite their author(s) as soon as I borrow their work. Moreover,
              visit serious website like{" "}
              <a
                className="underline"
                href="https://en.wikipedia.org/wiki/Homomorphic_encryption"
              >
                wikipedia
              </a>{" "}
              if you really want to have rigorous information.
            </div>

            <div className="text-3xl pt-8 pb-2">
              Understanding FHE in simple terms:
            </div>

            <div>
              <Latex>
                {
                  "Fully homomorphic encryption is a type of encryption that\
                enables ciphered data to be computed. Quick example: say that\
                you have $A=10$ and $B=37$ and you want to add those numbers\
                together. But you cannot do it yourself, so you ask an online\
                service to do it for you. Moreover, you do not want the service\
                that is going to do the addition for you to know what the\
                numbers are. Therefore, you cipher $A$ and $B$ with\
                your private key into $A_{fhe}$ and $B_{fhe} $. Only you, thanks to your\
                private key, can do the way back and retrieve $A$ and $B$ from\
                $A_{fhe}$ and $B_{fhe}$. The private key that we are talking about is\
                like the key you use to open your door: if you lose it in the\
                street (or online in our example), someone can enter your house\
                (or decipher your data) ! Then, you send $A_{fhe} $ and $B_{fhe} $ to\
                the service. The service does not understand what it's being\
                sent. Yet, thanks to FHE, it can compute $C_{fhe} $, which is the\
                sum of $A_{fhe}$ and $B_{fhe}$. Then, it gives us back $C_{fhe} $. There\
                again, only you and your private key are able to decipher this\
                message. Surprisingly enough, the result $C$ that you deciphered\
                from $C_{fhe}$ is the correct one !"
                }
              </Latex>
              <div className="text-3xl pt-8 pb-2">My work using FHE:</div>

              <Latex>{"Addition circuit"}</Latex>
              <img src={add} width="500" alt="Image" />
              <Latex>{"Substraction circuit"}</Latex>
              <img src={sub} width="500" alt="Image" />
              <Latex>{"Multiplication circuit"}</Latex>
              <img src={mult} width="1000" alt="Image" />
              <Latex>{"Division circuit"}</Latex>
              <img src={division} width="1000" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FHE;
