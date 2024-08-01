
interface ToDoCardProps {
    title: string,
    desc: string,
    onDelete : () => void,
    onEdit : () => void
}

const ToDoCard : React.FC<ToDoCardProps> = ({title, desc, onDelete, onEdit}) => {
    return (
        <div className="bg-gray-300/50 w-80 pb-4 h-60 rounded-lg">
                <div className="bg-blue-500 py-2 rounded-t-lg m-1 h-1/5">
                    <h2 className="text-center text-xl font-bold">{title}</h2>
                </div>
                <div className="bg-gray-200/80 m-1 h-3/5 rounded-md p-2">
                    <p className="text-black">{desc}</p>
                </div>
                <div className="m-1 flex justify-between h-1/5 gap-1">
                    <button className="bg-blue-500 w-1/2 rounded-bl-md" onClick={onEdit}>Edit</button>
                    <button className="bg-red-500 w-1/2 rounded-br-md" onClick={onDelete}>Delete</button>
                </div>
            </div>
    )
}

export default ToDoCard