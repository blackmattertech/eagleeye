import { useLayoutEffect, useRef, useState } from "react";

const VIDEO_SRC = "/media/hero.mp4?v=4";

function configureVideo(video) {
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.playsInline = true;
  video.controls = false;
  video.autoplay = true;
  video.loop = true;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");
  video.setAttribute("x-webkit-airplay", "deny");
  video.setAttribute("disablepictureinpicture", "");
  video.setAttribute(
    "controlsList",
    "nodownload nofullscreen noremoteplayback noplaybackrate"
  );
}

function tryPlay(video) {
  configureVideo(video);
  return video.play();
}

export default function HeroVideoBackground({
  alt = "Eagle Eye Watch Security — professional security services in Bangalore",
}) {
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);
  const isPlayingRef = useRef(false);

  useLayoutEffect(() => {
    if (typeof navigator !== "undefined" && navigator.connection?.saveData) {
      setUseFallback(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    configureVideo(video);

    const markPlaying = () => {
      isPlayingRef.current = true;
    };

    const onError = () => setUseFallback(true);

    video.addEventListener("playing", markPlaying);
    video.addEventListener("error", onError);

    const autoplay = () => {
      if (isPlayingRef.current) return;
      tryPlay(video).catch(() => {
        /* silent — no play button overlay */
      });
    };

    video.addEventListener("loadeddata", autoplay);
    video.addEventListener("canplay", autoplay);

    const delays = [0, 50, 150, 400, 800, 1500, 3000, 5000];
    const timers = delays.map((ms) => window.setTimeout(autoplay, ms));

    const onVisible = () => {
      if (document.visibilityState === "visible") autoplay();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", autoplay);

    const silentUnlock = () => autoplay();
    document.addEventListener("touchstart", silentUnlock, { passive: true, once: true });
    document.addEventListener("pointerdown", silentUnlock, { once: true });

    autoplay();

    return () => {
      timers.forEach(clearTimeout);
      video.removeEventListener("playing", markPlaying);
      video.removeEventListener("error", onError);
      video.removeEventListener("loadeddata", autoplay);
      video.removeEventListener("canplay", autoplay);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", autoplay);
      document.removeEventListener("touchstart", silentUnlock);
      document.removeEventListener("pointerdown", silentUnlock);
    };
  }, [useFallback]);

  if (useFallback) {
    return (
      <div className="hero-video-bg absolute inset-0 bg-navy" role="img" aria-label={alt} />
    );
  }

  return (
    <div className="hero-video-bg absolute inset-0 z-0 overflow-hidden bg-navy">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="hero-video-bg__el pointer-events-none absolute inset-0 mx-auto h-full w-full max-h-full max-w-full object-contain object-center md:object-cover"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
}
