import React, { useRef, useState, useEffect } from 'react'

const VideoAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasStartedLoop, setHasStartedLoop] = useState(false)

  const handleClick = () => {
    const video = videoRef.current
    if (!hasStartedLoop) {
      // First click: hide overlay and start looping playback
      setHasStartedLoop(true)
      if (video) {
        video.loop = true
        video.play()
      }
      return
    }

    // Subsequent clicks: toggle play/pause
    if (video) {
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }

  // When loop flag is set, start video playback
  useEffect(() => {
    if (hasStartedLoop && videoRef.current) {
      videoRef.current.loop = true
      videoRef.current.play()
    }
  }, [hasStartedLoop])

  return (
    <div className="project-video-container relative">
      <span className="body-2">Video Animation</span>
      <div className="relative">
        <video
          ref={videoRef}
          src="./src/assets/projects/groove/results/animation.mp4"
          className="project-video"
          muted
          onClick={handleClick}
        />
        <img
          src="./src/assets/projects/groove/results/video-overlay.png"
          alt="Video paused"
          onClick={handleClick}
          className={
            `absolute inset-0 project-video 
             transition-opacity duration-300 ease-inout 
             ${hasStartedLoop ? 'opacity-0 pointer-events-none' : 'opacity-100'}`
          }
        />
      </div>
    </div>
  )
}

export default VideoAnimation