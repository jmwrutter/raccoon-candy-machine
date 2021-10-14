import originVideo from '../video/origin_video.mp4';

const Video = () => {
    return (
        <div id="origin_video" className="" style={{ backgroundColor: '#6FDDF8'}}>
            <div className="container mx-auto min-h-screen p-36 flex justify-start items-center">
                <video controls="controls" src={originVideo} className=""></video>
            </div>
        </div>
    )
}

export default Video;