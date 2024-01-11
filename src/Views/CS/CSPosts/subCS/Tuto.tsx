import React from "react";
import { HeaderCategory } from "../../../../Single/HeaderCategory";

const Tuto = () => {
    return (
        <div className="flex justify-center ">
            <div className="p-4 max-w-4xl">
                <HeaderCategory name={"tuto"} date={"2024"} back={`/cs/`} />
                <div className="mt-2">
                    <div className="font-bold text-3xl">
                        1 - RESSOURCES:
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
                        2 - RESUME:
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
                        <div className="flex items-center mt-1">
                            7 - <div className="ml-1 mr-1 w-fit bg-gray-500 p-1 rounded-md text-white"> rm your_file </div>  = delete your file
                        </div>
                        <div className="flex items-center mt-1">
                            8 - <div className="ml-1 mr-1 w-fit bg-gray-500 p-1 rounded-md text-white"> mv your_file directory </div>  = move your_file in your directory
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
                <div className="mt-2">

                    <div className="font-bold text-3xl ">
                        3 - C++
                    </div>
                    <div className="font-bold text-xl">
                        <a className="hover:underline" href="https://www.w3schools.com/cpp/cpp_oop.asp">
                            what is C++ ? click me
                        </a>
                    </div>
                    <div>

                        <div className="font-bold text-xl ">
                            Write a variable:
                        </div>
                        <div>
                            As in physics, we use different types of variables (a variable of energy, of power, of voltage, of concentration...). We dont want to say that E = 1 Joules is equal to P = 1 Watt of power. It's not homogenous.
                            In computer science, it's the same. One int (one integer) is not the same as one string (text). So we define variable this way:
                        </div>
                        <div className="ml-1 mr-1 w-fit bg-gray-500 p-1 rounded-md text-white"> type variable; </div>
                        example: <div className="ml-1 mr-1 w-fit bg-gray-500 p-1 rounded-md text-white"> int my_int; </div>
                        <div className="text-red-700 font-bold"> DO not forget ";" at the end of each of your line of code! </div>
                    </div>
                    <div className="font-bold text-xl ">
                        Type of variables:
                    </div>
                    <div className="flex mt-1 items-center">
                        <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> int </div> - stores integers (whole numbers), without decimals, such as 123 or -123
                    </div>
                    <div className="flex mt-1 items-center">
                        <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> double </div> - stores floating point numbers, with decimals, such as 19.99 or -19.99
                    </div>
                    <div className="flex mt-1 items-center">
                        <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> char </div> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
                    </div>
                    <div className="flex mt-1 items-center">
                        <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> string </div> - stores text, such as "Hello World". String values are surrounded by double quotes
                    </div>
                    <div className="flex mt-1 items-center">
                        <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white"> bool </div> - stores values with two states: true or false
                    </div>
                    <div className="font-bold text-xl ">
                        Create a function:
                    </div>
                    <div> A function has 4 main features</div>
                    <div className="flex mt-1 items-center"> 1 - a name: <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white">my_function</div></div>
                    <div className="flex mt-1 items-center"> 2 - a return type: <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white">int my_function</div></div>
                    <div className="flex mt-1 items-center"> 3 - arguments: <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white">int my_function(int a, int b)</div></div>
                    <div className="flex mt-1 items-center"> 4 - brackets{"{ }"}: <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white">int my_function(int a, int b){"{ }"}</div></div>
                    <div className="flex mt-1 items-center"> At least one function should be called <div className="ml-1 mr-1  w-fit bg-gray-500 p-1 rounded-md text-white">main</div>. When you run your code, only main is executed</div>
                    <div className="flex mt-1 items-center"> When you create other functions, they or their parents should be called in main to work </div>
                </div>
            </div>
        </div>





    );
};

export default Tuto;
