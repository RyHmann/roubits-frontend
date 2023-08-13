const DeleteButton = ( {label, onClick} ) => {
    return (
        <button className="bg-red-500 hover:bg-red-700 rounded-full px-4 py-1 font-semibold text-white" onClick={onClick}>{label}</button>
    )
}

export default DeleteButton

