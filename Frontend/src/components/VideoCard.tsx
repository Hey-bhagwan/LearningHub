

export function VideoCard({title,timeStamp,views,thumbNail}: any) {
    return (
        <div className="p-5 cursor-pointer">
            <img src={thumbNail} className="border border-gray-700 rounded-2xl object-fit"/>
            <div className="grid grid-cols-10 ">
                <div className="col-span-10 pl-4">
                    {title}
                    <div className="text-gray-600">
                       {views} • {timeStamp}
                    </div>
                </div>
            </div>
        </div>
    )
}