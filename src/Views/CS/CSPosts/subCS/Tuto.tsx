import React from "react";
import { HeaderCategory } from "../../../../Single/HeaderCategory";

const Tuto = () => {
    return (
        <div className="flex justify-center ">
            <div className="p-4 max-w-4xl">
                <HeaderCategory name={"tuto"} date={"2024"} back={`/cs/`} />
                <div className="mt-2">
                    <div className="font-bold text-3xl">
                        RESSOURCES:
                    </div>
                    <div>
                        <a className="hover:underline" href="https://ipn_s2i_enseignement.pages.in2p3.fr/DataProcessing/program/session-2/hands-on-2b/">
                            Link of TD:
                        </a>
                    </div>
                    <div>
                        <a className="hover:underline" href="https://chat.openai.com">
                            ChatGPT (to use with moderation)
                        </a>
                    </div>
                    <div>
                        <a className="hover:underline" href="https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories">
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a className="hover:underline" href="https://docs.github.com/en/get-started/getting-started-with-git"> Getting Started with Git</a>
                    </div>
                    <div>
                        <a className="hover:underline" href="https://docs.github.com/en/get-started/getting-started-with-git"> Getting Started with Git</a>
                    </div>

                </div>
                <div className="mt-2">

                    <div className="font-bold text-3xl">
                        RESUME:
                    </div>
                    <div>
                        <div className="font-bold">Linux</div>
                        linux = windows but for nerd
                    </div>
                    <div>
                        <div className="font-bold">Git</div>
                        git = version manager, just like google doc enables you to edit a file, git enables you to edit code and track different version
                    </div>
                    <div>
                        <div className="font-bold">GitHub, GitLab</div>

                        gitHub, gitLab,... = websites that hosts your code online. gitHub is a website, git is a software!!
                    </div>
                    <div>
                        <div className="font-bold">Editor, VsCode, Atom</div>

                        atom, vscode = software to edit code on.
                    </div>
                    <div>
                        <div className="font-bold">Progamming Languages</div>

                        C, python, C++, java, python = different programming languages. they all have their different specificities.
                    </div>

                    <div className="mt-2">
                        <div className="font-bold text-l">
                            Useful commands in the terminal
                        </div>
                        terminal is a more direct and shorter way to navigate through your files:
                        <div>
                            1 - how to open terminal: CTRL + ALT + t
                        </div>
                        <div>
                            2 - ls (list files) = show the files
                        </div>
                        <div>
                            3 - cd (change directory) = moves through directories. cd .. moves rearward; cd ./directory moves in directory
                        </div>
                        <div>

                            4 - mkdir (make directory) = creates a new directory
                        </div>
                        <div>
                            5 - touch your_file.cxx = creates your file
                        </div>
                        <div>
                            6 - run a programm:
                            <div>
                                compiling: g++ -o name_of_executable name_of_file.cxx
                            </div>
                            <div>
                                running: ./name_of_executable
                            </div>
                            ex: my file in c++ is physics.cxx, I compile it like so: g++ -o physics physics.cxx
                            and execute like so ./physics

                            <div>
                                (compiling = the computer makes the translation from your code (physics) to binary 1010001010101.)
                                (Executing, running = actually reading the binary and doing the computation)
                            </div>
                        </div>

                    </div>
                    <div className="mt-2">
                        <div className="font-bold text-l">
                            Useful commands for git (still in terminal)
                        </div>
                        <div>
                            1 - git add your_file.cxx
                        </div>
                        <div>
                            2 - git commit -m "your message"
                        </div>
                        <div>
                            3 - git push origin main
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Tuto;
