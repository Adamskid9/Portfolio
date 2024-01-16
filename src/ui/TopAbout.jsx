function TopAbout({header,text,icon}) {
    return (
                <div className="flex flex-col basis-2/4">
                    <h2 className="flex h2 text-base uppercase font-[600] relative items-center">{icon} {header}</h2>
                    <span className="font-mono text-sm">{text}</span>
                </div>

    )
}

export default TopAbout
