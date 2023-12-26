import React, { useEffect, useRef, useState } from "react";
import { formatTime } from "../../Timer";
import './VideoItem.scss';
import PropTypes from 'prop-types';
import '../../data/data'

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })

export function VideoItem({ holder, fullBar ,id, title, channel, views, postedAt, duration, thumbnailUrl, videoUrl, isDark }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
  
    const playPromise = video.play();
  
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (!isVideoPlaying) video.pause();
      })
      .catch(error => {
        console.error('Error attempting to play video:', error);
      });
    }
  
    return () => {
      if (video) video.pause();
    };
  }, [isVideoPlaying]);
  

  return (
    <div className={`video-container ${holder} ${fullBar ? 'sidebar-is-full':''} ${isDark ? 'dark-mode': ''}`} onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}>
        <a className="thumbnail" href={`/watch?v=${id}`}>
            <img className="thumbnail-image" src={thumbnailUrl}/>
            <div className="duration">
                {duration}
            </div>
            <video className="thumbnail-vid" ref={videoRef} muted playsInline src={videoUrl}/>
        </a>
        <div className="vid-info">
            <a href={`/@${channel.id}`} className="channel-tag">
                <img className="channel-icon" src={channel.profileUrl}/>
            </a>
            <div className="vid-text">
                <a href={`/watch?v${id}`} className="vid-title">
                    {title}
                </a>
                <a href={`/@${channel.id}`} className="channel-name">
                    {channel.name}
                </a>
                <div className="vid-views-and-data">
                {VIEW_FORMATTER.format(views)} Views &#183; {formatTime(postedAt)}
                </div>
            </div>
        </div>
    </div>
  );
}


VideoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channel: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profileUrl: PropTypes.string.isRequired
    }).isRequired,
    views: PropTypes.number.isRequired,
    postedAt: PropTypes.instanceOf(Date).isRequired,
    duration: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired
};

export default VideoItem
