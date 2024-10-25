import { useState } from "react";
import Latex from "react-latex-next";
import { Title1 } from "../../../Single/Styles";
import boost from "./Ideal-Boost-Converter-Circuit.jpg"
import neutron_det from "./neutron_detector.png"
import oper_reg from "./operating_voltage.png"
import oper_mode from "./operating_modes.png"




const ParticleDetector = () => {
    const [selectedNumber, setSelectedNumber] = useState(1);

    const handleChange = (event: any) => {
        setSelectedNumber(parseInt(event.target.value, 10));
    };
    const renderContent = () => {
        switch (selectedNumber) {
            case 1:
                return (<>
                    <div className="font-bold text-3xl mt-8">
                        Chapter 1
                    </div>
                    <div className="font-bold text-xl">
                        Gaseous-filled detectors working principle
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Summary
                    </div>
                    <div className="italic underline">
                        1. Introduction
                    </div>
                    <div className="italic underline">
                        2. Operating regions
                    </div>
                    <div className="italic underline">
                        3. Operating modes
                    </div>
                    <br />
                    <br />

                    <div className="italic underline">
                        1. Introduction
                    </div>
                    There are three main kinds of radiation detectors: scintillation detectors, semi-conductors detectors and gaseous-filled detectors.  In this part, we will only showcase gaseous-filled detectors. Detecting a directly ionizing or indirectly ionizing radiation consists in measuring the energy of that radiation by converting it into an electric signal. In short, this is done in a chamber where the incident radiation ionizes directly or indirectly a gaseous medium. The created charges, while being adrift under the action of the electrical field, induce a movement of the electrons in the anode. This movement of
                    charges is then amplified in an external electric circuit to form a measurable signal. In our case, we want to measure neutrons, which are not directly ionizing particles. Therefore, we can use the reactions found in part in order to ”convert” them into ionizing particles. Not all gaseous detectors work under the same operating electric field. The voltage induced by this field can vary and yields different designs of detectors.
                    <img className="mt-2" src={neutron_det} alt="" />
                    <div className="text-center"> Figure: Working principle of gaseous detector (Lyoussi,2010)</div>
                    <br />
                    <div className="italic underline">
                        2. Operating regions
                    </div>

                    This section highlights the different regions of operation for gaseous detectors. Figure 5.3 displays the pulse amplitude as a function of the supply high-voltage. Several regions can be highlighted: <br />
                    <div className="font-bold">
                        - Region A:
                    </div>
                    This region is called recombination region. In this region, low supply voltage implies low intensity electric field. Charge recombination prevails over charge collection. As the voltage increases, recombination decreases and the pulse amplitude increases. This region is not usable for detector operation.
                    <br />
                    <div className="font-bold">
                        - Region B:
                    </div> This region is called the ionization region. In this region, the voltage is high enough to consider recombination as negligible and low enough that avalanche effect is also negligible. This results in a stable region where the voltage does not modify the number of charges collected. The number of charges collected is only proportional to the energy yielded by the radiation. The current is very low, order of magnitude of <Latex>{"$10^{−13}A$"}</Latex>  [Lyoussi, 2010]. The number of charges induced is the same as the number of charges generated.
                    <div className="text-center">
                        <Latex>{"$ N_{induced} =  N_{generated}$"}</Latex>
                    </div>
                    This region is used in ionization fission chambers that generally operate at high neutronic fluxes which does not need further multiplication of collected charges.
                    <div className="font-bold">
                        - Region C:
                    </div>
                    This region is called the proportional region. In this region, the voltage is high-enough to produce further ionization (avalanche effect). The pulse amplitude is proportional to the voltage and also to the energy yielded by the particle.
                    <div className="text-center">
                        <Latex>{"$ N_{induced} = k ∗ N_{generated}$"}</Latex>
                    </div>
                    where <Latex>{"$k>1$"}</Latex>.
                    The current is quite bigger in this region, with an order of magnitude of <Latex>{"$10^{−6}-10^{−3}A$"}</Latex> . The signals are much easier to measure.
                    This region is used by proportional counters which operate at lower flux and need charges multiplication.
                    <div className="font-bold">
                        - Region D:
                    </div> In this region, there exists a disturbance of the charge collection. No proportionality anymore.
                    <div className="font-bold">
                        - Region E:
                    </div> This region is called the Geiger plateau. The collected charge is limited by the characteristics of the detector.
                    <div className="font-bold">
                        - Region F:
                    </div> In this region, the discharge is unstable.
                    <div className="text-center">
                        <img src={oper_reg} alt="" className="mt-2" />
                        Figure: operating regions
                    </div>
                    <br />
                    <div className="italic underline">
                        3. Operating modes
                    </div>
                    Depending on the incident neutron flux, different modes can be used to best quantify the electric signal in output. They are described hereafter. In the following figure, we can see 3 different regions of increasing flux: region 1, 2 and 3. In region 1, we consider a low flux of neutrons. The counting rate lies between 1 to roughly <Latex>{"$10^{6}A$"}</Latex> cps (counts per second). It is low enough to discriminate and treat pulses. Pulse mode operates in this region. At around <Latex>{"$10^{5}A$"}</Latex> cps and more, pulses start overlapping each other to form a more compact and fluctuating signal (region 2). The fluctuating mode is relevant there. Above <Latex>{"$10^{8}A$"}</Latex> cps, a distinct continuous current becomes noticeable (region 3). The current mode is run there.
                    <div className="justify-center flex ">
                        <img src={oper_mode} alt="" className="w-[500px] mt-2" />
                    </div>
                    <div className="text-center">
                        Figure: Operating modes
                    </div>
                    <br />
                    <div className="italic underline">
                        3a-Operation in pulse mode
                    </div>
                    This mode is linked with low neutronic flux. In this mode, we focus on individual pulses by reading the voltage on a resistor R, linked to a capacity C. The pulse is linked with a collected charge Q and a duration T. CPNB work solely in this mode. Two cases are relevant to highlight:
                    <br />
                    <br />
                    If <Latex>{"$RC << T$"}</Latex> : the measure circuit is very fast and transmits the initial pulse precisely. The drawbacks of this type of measure is that measuring the maximum voltage is tricky. Indeed, since RC is quite short, then the voltage does not have enough time to reach the maximum. Furthermore, the sensitivity to the fluctuation of the pulses is quite limited.
                    <br />
                    <br />
                    If <Latex>{"$RC >> T$"}</Latex>:the charge Q goes through R slowly and reaches a peak <Latex>{"$V_{max}=\\frac{Q}{C} $"}</Latex> at <Latex>{"$t=T $"}</Latex>. Then it RC
                    decreases in <Latex>{"$e^{-\\frac{t}{RC}}$"}</Latex> . Measuring the maximum voltage is easier; it is proportional to Q, itself linearly dependent with the energy deposited by the incoming particle. Nonetheless, if there is a high rate of particles, there could be a staking of pulses due to the long exponential decrease.
                    <br />
                    <br />

                    <div className="italic underline">
                        3b-Operation in Campbell mode
                    </div>
                    For a counting rate above <Latex>{"$10^5$"}</Latex> cps, pulses are less and less discernible. Campbell sampling theorem [Campbell, 1909] can be used to describe the signal. Depending on the order of the Campbell theorem, several modes of operation can be highligthed.
                    <br />
                    <br />

                    In current mode, we only take the continuous part into account. Using Campbell sampling theorem of order 1, we can show [Buisson, 1978], [Fanet, 2002] that the average continuous current is proportional to the incident neutronic flux:
                    <div className="text-center">
                        <Latex>{"$<I>= KI ∗ \\Phi$"}</Latex>
                    </div>

                    where
                    <br />
                    <Latex>{"$<I>$"}</Latex> is the average of the continuous current in A,
                    <br />
                    <Latex>{"$KI$"}</Latex> is the sensitivity of the detector in A per unitary thermal neutronic flux,
                    <br />
                    and <Latex>{"$\\Phi$"}</Latex> is the thermal neutronic flux () <Latex>{"$n.cm^{−2}.s^{−1}$"}</Latex>.
                    <br />
                    <br />
                    In fluctuation mode, we focus on the fluctuating part of the signal. Using Campbell sampling theorem of order 2, we can show that the variance of the current (i.e. fluctuations) is proportional to the incident neutronic flux:
                    <div className="text-center mt-3">
                        <Latex>{"$Var(I) = KF ∗ Φ ∗ Cste$"}</Latex>
                    </div>
                    where <br />
                    <Latex>{"$Var(I) $"}</Latex> is the variance of the current (<Latex>{"$A^2 $"}</Latex>),
                    <br />

                    <Latex>{"$KF $"}</Latex>  is the sensitivity of the detector in fluctuation mode in <Latex>{"$A^2.s $"}</Latex> per unitary thermal neutronic flux,
                    <br />
                    <Latex>{"$Cste $"}</Latex>, constant linked to the pulse response of the detector in <Latex>{"$s^{-1}$"}</Latex>
                    <br />
                    <Latex>{"$\\Phi$"}</Latex> is the thermal neutronic flux (<Latex>{"$n.cm^{−2}.s^{-1}$"}</Latex>)

                </>)
            case 2:
                return (
                    <>
                        <div className="font-bold text-xl mt-8">Charged particle detector</div>
                        <div className="text-lg">
                            Let's take the case of a Geiger Muller
                        </div>
                        <br />
                        <div className="font-bold text-lg ">1.1 - Theory of geiger Muller</div>
                        [coming soon]
                        <div className="font-bold text-lg mt-2">1.2 - Electronic part</div>
                        <div className="underline ">1.2.1 - General structure</div>
                        <div className="mt-4 grid grid-cols-15 sm:text-sm font-semibold items-center text-center border-2 p-2 border-300-slate rounded flex-wrap">
                            <div className=" col-start-1 col-end-3 cold-span-2">
                                {" "}
                                1. Boost Converter
                            </div>
                            <div className="   col-start-3 col-end-4 cold-span-1  ">
                                {" "}
                                {"=>"}{" "}
                            </div>
                            <div className="   col-start-4 col-end-6 cold-span-2  ">
                                {" "}
                                2. GM Tube
                            </div>
                            <div className="   col-start-6 col-end-7 cold-span-1  ">
                                {" "}
                                {"=>"}{" "}
                            </div>
                            <div className="   col-start-7 col-end-9 cold-span-2  ">
                                {" "}
                                3. Inverter
                            </div>
                            <div className="   col-start-9 col-end-10 cold-span-1  ">
                                {" "}
                                {"=>"}{" "}
                            </div>

                            <div className="   col-start-10 col-end-12 cold-span-2  ">
                                {" "}
                                4. Pulse stretcher
                            </div>
                            <div className="   col-start-12 col-end-13 cold-span-1  ">
                                {" "}
                                {"=>"}{" "}
                            </div>

                            <div className="   col-start-13 col-end-15 cold-span-2   ">
                                {" "}
                                5. Piezo speaker{" "}
                            </div>
                            <div className="   col-start-10 col-end-12 cold-span-2  ">
                                {" "}
                                v{" "}
                            </div>

                            <div className="   col-start-10 col-end-12 cold-span-2  ">
                                {" "}
                                6. Filter{" "}
                            </div>
                            <div className="   col-start-10 col-end-12 cold-span-2  ">
                                {" "}
                                v{" "}
                            </div>
                            <div className="   col-start-10 col-end-12 cold-span-2  ">
                                {" "}
                                7. Red Pump{" "}
                            </div>
                            <div className=" col-start-12 col-end-13 cold-span-1  ">
                                {" "}
                                {"=>"}{" "}
                            </div>
                            <div className=" col-start-13 col-end-15 cold-span-2  ">
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
                    </>
                );
            case 3:
                return ("3");
        }
    }
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:max-w-4xl xl:max- xl mx-4">
                    <div className="flex justify-between items-center mt-8">
                        <div className="font-bold text-4xl ">
                            Particle Detectors
                        </div>
                        <select
                            value={selectedNumber}
                            onChange={handleChange}
                            className="p-8 py-2 rounded max-h-10 bg-slate-500"
                        >
                            {Array.from({ length: 3 }, (_, i) => i + 1).map((number) => (
                                <option key={number} value={number}>
                                    {number}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="rounded"> {renderContent()}</div>
                </div>
            </div>

        </>
    );
};
export default ParticleDetector;
