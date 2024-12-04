import { VideoCard } from "./VideoCard"

const videos = [{
    thumbNail : "html.jpg",
    title : "HTML Tutorial",
    views : "10k",
    timeStamp : "9 days ago"
},{
    thumbNail : "css.jpg",
    title : "CSS Tutorial",
    views : "10k",
    timeStamp : "8 days ago"
},{
    thumbNail : "js.webp",
    title : "Java Script Tutorial",
    views : "10k",
    timeStamp : "7 days ago"
},{
    thumbNail : "exprss.jpg",
    title : "Express Tutorial",
    views : "10k",
    timeStamp : "6 days ago"
},{
    thumbNail : "mongoDB.webp",
    title : "MongoDB Tutorial",
    views : "10k",
    timeStamp : "5 days ago"
},{
    thumbNail : "React.png",
    title : "React Tutorial",
    views : "10k",
    timeStamp : "4 days ago"
},{
    thumbNail : "ts.png",
    title : "Type Script Tutorial",
    views : "10k",
    timeStamp : "3 days ago"
},{
    thumbNail : "Tailwind.png",
    title : "Tailwind Tutorial",
    views : "10k",
    timeStamp : "2 days ago"
},{
    thumbNail : "AWS-Cloud.png",
    title : "AWS Tutorial",
    views : "10k",
    timeStamp : "1 days ago"
}]


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
        {videos.map(video => (
            <VideoCard
                thumbNail={video.thumbNail}
                views={video.views}
                timeStamp={video.timeStamp}
                title={video.title} />))}
    </div>
}