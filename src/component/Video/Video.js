import { useRef, useEffect, memo } from "react";



const Video = ({ url }) =>  {
  const videoRef = useRef();
  const previousUrl = useRef(url);

  useEffect(() => {
    if (previousUrl.current === url) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = url;
  }, [url]);


  return (
    <>
      <video ref={videoRef} className="z-[1] mobile-sm:object-contain mobile-lg:object-contain tablet-sm:object-cover delay w-[100%] h-[100%]" loop={true} autoPlay={true} muted={true}>
        <source src={url} type="video/mp4" />
      </video>
    </>
  );
}


export default memo(Video)