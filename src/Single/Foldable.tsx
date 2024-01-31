

const Foldable = ({ title, content }: { title: string, content: JSX.Element }) => {
    return (
        <div className="collapse mb-20">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                {title}
            </div>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </div>)
}
export default Foldable;