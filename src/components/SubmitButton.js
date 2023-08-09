const SubmitButton = ( {label} ) => {
    return (
        <button className="bg-sky-500 hover:bg-sky-700 rounded-full px-4 py-1 font-semibold text-white" type="submit">{label}</button>
    )
}

export default SubmitButton