const CompleteButton = ( {label, onClick} ) => {
    return (
        <button className="bg-emerald-500 hover:bg-emerald-700 rounded-full px-4 py-1 font-semibold text-white" onClick={onClick}>{label}</button>
    )
}

export default CompleteButton

