export const Title1 = ({ text }: { text: string }) => (
    <div className="font-bold text-3xl mt-8 mb-3">{text}</div>
)

export const Title2 = ({ text, mt }: { text: string, mt: number }) => (
    <div className={`font-bold mt-${mt} mb-3 underline`}>{text} </div>
)


