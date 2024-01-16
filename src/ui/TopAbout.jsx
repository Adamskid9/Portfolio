function TopAbout({header,text,icon,low}) {
    return (
                <div className="flex flex-col basis-2/4">
                    <h2 className="flex h2 text-base uppercase font-[500] relative items-center">{icon} {header}</h2>
                    <span className={`font-mono ${low} text-sm`}>{text}</span>
                </div>

    )
}

export default TopAbout
