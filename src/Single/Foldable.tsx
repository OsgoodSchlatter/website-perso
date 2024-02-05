

const Foldable = ({ title, content }: { title: string, content: JSX.Element }) => {
    return (
        <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
                {title}
            </div>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </div>)
}
export default Foldable;