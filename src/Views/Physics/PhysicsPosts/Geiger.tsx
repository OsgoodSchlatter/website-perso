import Latex from "react-latex-next";
import { Title1 } from "../../../Single/Styles";
import boost from "./Ideal-Boost-Converter-Circuit.jpg"
const Electrolysis = ({ title, date }: { title: string; date: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:max-w-4xl xl:max- xl mx-4">
                    <Title1 text="How to build a Geiger Counter" />
                    <div className="font-bold text-lg">1 - Electronic part</div>
                    <div className="underline mt-2">1.1 - General structure</div>
                    <div className="mt-4 grid grid-cols-15 sm:text-sm font-semibold items-center text-center border-2 p-2 border-300-slate rounded flex-wrap">
                        <div className="text-black col-start-1 col-end-3 cold-span-2">
                            {" "}
                            1. Boost Converter
                        </div>
                        <div className="  text-black col-start-3 col-end-4 cold-span-1  ">
                            {" "}
                            {"=>"}{" "}
                        </div>
                        <div className="  text-black col-start-4 col-end-6 cold-span-2  ">
                            {" "}
                            2. GM Tube
                        </div>
                        <div className="  text-black col-start-6 col-end-7 cold-span-1  ">
                            {" "}
                            {"=>"}{" "}
                        </div>
                        <div className="  text-black col-start-7 col-end-9 cold-span-2  ">
                            {" "}
                            3. Inverter
                        </div>
                        <div className="  text-black col-start-9 col-end-10 cold-span-1  ">
                            {" "}
                            {"=>"}{" "}
                        </div>

                        <div className="  text-black col-start-10 col-end-12 cold-span-2  ">
                            {" "}
                            4. Pulse stretcher
                        </div>
                        <div className="  text-black col-start-12 col-end-13 cold-span-1  ">
                            {" "}
                            {"=>"}{" "}
                        </div>

                        <div className="  text-black col-start-13 col-end-15 cold-span-2   ">
                            {" "}
                            5. Piezo speaker{" "}
                        </div>
                        <div className="  text-black col-start-10 col-end-12 cold-span-2  ">
                            {" "}
                            v{" "}
                        </div>

                        <div className="  text-black col-start-10 col-end-12 cold-span-2  ">
                            {" "}
                            6. Filter{" "}
                        </div>
                        <div className="  text-black col-start-10 col-end-12 cold-span-2  ">
                            {" "}
                            v{" "}
                        </div>
                        <div className="  text-black col-start-10 col-end-12 cold-span-2  ">
                            {" "}
                            7. Red Pump{" "}
                        </div>
                        <div className="text-black col-start-12 col-end-13 cold-span-1  ">
                            {" "}
                            {"=>"}{" "}
                        </div>
                        <div className="text-black col-start-13 col-end-15 cold-span-2  ">
                            {" "}
                            8. Led{" "}
                        </div>
                    </div>
                    <div className="mt-4 font-bold"> Description</div>
                    <div >
                        1) Converts low voltage (9V) into high voltage (400V)
                    </div>
                    <div>
                        2) A short current is emitted as soon as a particle interacts with the medium (gaz here), plus the dead-time.
                    </div>
                    <div>
                        3) Converts current into voltage, and inverts it. (i.e. current {"=>"} lower voltage, no current {"=>"} normal voltage)
                    </div>
                    <div>
                        4) Converts brief lowering of voltage into longer one (1,5ms).
                    </div>
                    <div>
                        5) Emits a sound at each particle interaction that is detected.
                    </div>
                    <div>
                        6) Ensures proportionnality between count rate and voltage to feed the led.
                    </div>
                    <div>
                        7) Convert voltage in current
                    </div>
                    <div>
                        8) Emits light
                    </div>
                    <div className="underline mt-4">1.2 - High Tension detailed description</div>
                    <div>
                        <img src={boost} className="mt-8 ml-4 border-2 border-300-slate rounded" width="200" alt="Image" />
                        <div className="mt-2 mb-4 ml-4 underline"> fig 2,1: boost converter </div>
                    </div>
                    <div>
                        1) When the switch is closed, the current does not feed the diode but remains in the circuit (lower resistance). The coil L accumulates energy under magnetic nature.
                    </div>
                    <div>
                        2) Then when we open the switch, then the coil, being in series with the generator, releases its magnetic energy. Its electromagnetic force adds up to the generator's and this energy is transfered to the capacitor C.
                    </div>
                    <div className="font-bold mt-2"> Relation between Vs and Vr</div>
                    - When the switch is closed, the current varies this way:
                    <Latex>
                        {`$$ V_L =V_{in} = L \\frac{dI_L}{dt} $$`}
                    </Latex>
                    <div className="flex flex-wrap text-center items-center">
                        <div className="pr-2">
                            At the end of the passing state,
                        </div>
                        <div className="pr-2">
                            <Latex>
                                {`$$  I_L  $$`}
                            </Latex>
                        </div>
                        <div className="pr-2">
                            has grown by
                        </div>
                        <Latex>
                            {`$$  \\Delta I_{L_{on}} = \\int_{0}^{T_{on}} \\frac{V_{in} dt}{L} = \\frac{V_{in}T_{on}}{L}$$`}
                        </Latex>
                    </div>
                    - When the switch is open (blocking state), the current going through the coil now runs through the diode. Now,
                    <Latex>
                        {`$$ V_{in} = V_L + V_{R} $$`}
                    </Latex>
                    <div className="flex items-center flex-wrap">
                        with   <div className="ml-2 mr-2">
                            <Latex>
                                {`$$ V_{R} $$`}
                            </Latex>
                        </div>
                        being the voltage applied on the load R.
                        <div className=" ml-2 flex flex-wrap text-center items-center">
                            <div className="pr-2">
                                We have
                            </div>
                            <Latex>
                                {`$$  V_L = V_{in} - V_R = L \\frac{dI_{off}}{dt}$$`}
                            </Latex>
                        </div>
                    </div>
                    <div className="flex flex-wrap text-center items-center">
                        <div className="pr-2">
                            At the end of the blocking state, we have
                        </div>
                        <Latex>
                            {`$$  \\Delta I_{L_{off}} = \\int_{0}^{T_{off}} \\frac{(V_{in} - V_R)}{L} dt = \\frac{(V_{in} - V_R) T_{off}}{L} $$`}
                        </Latex>
                    </div>
                    In steady-state: the current goes through the coil and is the same at the end of each communication cycle.
                    <Latex>
                        {`$$  \\Delta I_{L_{on}} + \\Delta I_{L_{off}} = 0 => \\frac{V_{in} T_{on}}{L} + \\frac{(V_{in} - V_R)T_{off}}{L} =0$$`}
                    </Latex>
                    <div className="flex flex-wrap text-center items-center">
                        <div className="mr-2">
                            Therefore
                        </div>
                        <Latex>
                            {`$$  V_R = \\frac{V_{in}}{1-D} $$`}
                        </Latex>
                        <div className="mr-2">
                            with</div>
                        <div className="border b-slate-100 rounded p-1 mb-2">
                            <Latex>
                                {`$$  D = \\frac{T_{on}}{T_{on}+T_{off}} $$`}
                            </Latex>
                        </div>
                    </div>
                    Finally, the boost converter enables us to increase a low continuous voltage (9V) to a higher continuous voltage (400V) by modifiying parameter D.
                </div>
            </div>
        </>
    );
};
export default Electrolysis;
