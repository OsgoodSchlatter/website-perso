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
                        <div className="flex items-center">
                            1 - how to open terminal:
                            <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> CTRL + ALT + t </div>

                        </div>
                        <div className="flex items-center mt-1">
                            2 - <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> ls </div> (list files) = show the files
                        </div>
                        <div className="flex items-center mt-1">
                            3 - <div className=" ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> cd </div> (change directory) = moves through directories. cd .. moves rearward; cd ./directory moves in directory
                        </div>
                        <div className="flex items-center mt-1">
                            4 - <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> mkdir </div> (make directory) = creates a new directory
                        </div>
                        <div className="flex items-center mt-1">
                            5 - <div className="ml-1 mr-1 w-fit bg-gray-500 p-1 rounded-md text-white"> touch your_file.cxx </div>  = creates your c++ file
                        </div>
                        <div>
                            6 - run a program:
                            <div>
                                compiling:
                                <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> g++ -o name_of_executable name_of_file.cxx</div>
                            </div>
                            <div>
                                running: <div className="w-fit bg-gray-500 p-1 rounded-md text-white"> ./name_of_executable</div>
                            </div>
                            ex: my file in c++ is physics.cxx, I compile it like so: <div className="w-fit bg-gray-500 p-1 rounded-md text-white">g++ -o physics physics.cxx</div>
                            and execute like so
                            <div className="w-fit bg-gray-500 p-1 rounded-md text-white"> ./physics</div>

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
                        <div className="flex mt-1">
                            <div className="mt-1 w-fit bg-gray-500 p-1 rounded-md text-white"> git add your_file.cxx</div>
                            This allows you to add a modified file you want to push online to share with your friends.
                        </div>
                        <div>
                            <div className="mt-1 w-fit bg-gray-500 p-1 rounded-md text-white"> git commit -m "your message"</div>
                            This step ensures that your current version of your file is saved and that you commit to this version before sending it online.
                        </div>
                        <div>
                            <div className="mt-1 w-fit bg-gray-500 p-1 rounded-md text-white"> git push origin main</div>
                            This step pushes your code online on your repository.

                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Tuto;
