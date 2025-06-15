
import { StandardHeader } from "../../Single/StandardHeader"
import og from "../../data/pics/guitar-paint/eko-original.jpeg"
import final from "../../data/pics/guitar-paint/finished-and-unstrapped.jpg"
import pose from "../../data/pics/guitar-paint/pose.jpg"
import half from "../../data/pics/guitar-paint/half.jpg"
import finished from "../../data/pics/guitar-paint/finished.jpg"
import boulogne from "../../data/pics/guitar-paint/boulogne.jpeg"
const comment = <div>
    In this post I want to show how I have repainted my Eko Telecaster (Relic).
    This is the first guitar I received. I got it as a gifth for Christmas 2023.
</div>


const content = <>
    <div>
        <img src={og} alt="" />
    </div>
    <div>
        <div className="text-5xl font-bold mt-4">
            Step 1
        </div>
        <div className="text-2xl mt-2">
            Polish and strap.
        </div>
        <div className="flex justify-center p-2">
            <img src={pose} className="w-2/3" />
        </div>
        <div className="text-5xl font-bold mt-8">
            Step 2
        </div>
        <div className="text-2xl mt-2">
            Start painting.
        </div>
        <div className="flex justify-center p-2">
            <img src={half} className="w-2/3" />
        </div>
        <div className="text-5xl font-bold mt-8">
            Step 3
        </div>
        <div className="text-2xl mt-2">
            Add extra layer of coating.
        </div>
        <div className="flex justify-center p-2">
            <img src={finished} className="w-2/3" />
        </div>
        <div className="text-5xl font-bold mt-8">
            Step 4
        </div>
        <div className="text-2xl mt-2">
            Finished.
        </div>
        <div className="flex justify-center p-2">
            <img src={final} className="w-2/3" />
        </div>
        <div className="text-2xl">
            So happy with the result!
        </div>
        <div className="text-5xl font-bold mt-8">
            In Boulogne
        </div>
        <div className="flex justify-center p-2 mt-2">
            <img src={boulogne} className="w-2/3" />
        </div>

    </div>
</>


const GuitarPaint = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <StandardHeader title={title} date={date} comment={comment} content={content} />
        </>
    )
}
export default GuitarPaint;