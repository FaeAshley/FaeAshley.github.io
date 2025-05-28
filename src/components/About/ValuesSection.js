const Values = ({ values }) => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-200 text-lg leading-relaxed whitespace-pre-line">
            {values.map((value) => {
                return (
                    <span className="flex py-2 w-full text-center">
                    <h2 className="font-semibold pr-3 text-magenta-light hover:text-magenta">{value.title}</h2> – <p className="pl-3 italic">{value.caption}</p>
                    </span>
                );
            })}
        </div>
    );
}

export default Values;