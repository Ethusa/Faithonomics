import { PlayCircle } from "./Icons";

export type LevelOneSlideshowMode = "about" | "start";

export const levelOneIntroSlides = [
  "https://static.wixstatic.com/media/7638b6_7dce53d2b46b43c0a42e8cc509325e3f~mv2.png",
  "https://static.wixstatic.com/media/7638b6_5565b4e4adcf4e6db1b3e0075c7f44bd~mv2.png",
  "https://static.wixstatic.com/media/7638b6_d369a23ccc264bed911d2f2662249aa7~mv2.png",
  "https://static.wixstatic.com/media/7638b6_a63863ef5ce945d6adc25625d8e8e748~mv2.png",
  "https://static.wixstatic.com/media/7638b6_7fd81c4b4f96408dab20186b2bd32a96~mv2.png",
];

export const LevelOneIntroSlideshow = ({
  mode,
  slideIndex,
  setSlideIndex,
  onOpenCourse,
  onClose,
}: {
  mode: LevelOneSlideshowMode;
  slideIndex: number;
  setSlideIndex: (updater: (current: number) => number) => void;
  onOpenCourse: () => void;
  onClose: () => void;
}) => {
  const activeSlide = levelOneIntroSlides[slideIndex] ?? levelOneIntroSlides[0] ?? "";

  return (
    <div className="level-one-slideshow-modal" role="dialog" aria-modal="true" aria-label="Level 1 introduction">
      <button className="course-about-backdrop" type="button" aria-label="Close slideshow" onClick={onClose} />
      <article className="level-one-slideshow-panel">
        <div className="level-one-slide-stage">
          <img src={activeSlide} alt={`Level 1 introduction slide ${slideIndex + 1}`} />
        </div>
        <div className="level-one-slide-controls">
          <button
            className="about-button"
            type="button"
            onClick={() => setSlideIndex((current) => Math.max(0, current - 1))}
            disabled={slideIndex === 0}
          >
            Previous
          </button>
          <span>
            {slideIndex + 1} / {levelOneIntroSlides.length}
          </span>
          <button
            className="about-button"
            type="button"
            onClick={() => setSlideIndex((current) => Math.min(levelOneIntroSlides.length - 1, current + 1))}
            disabled={slideIndex === levelOneIntroSlides.length - 1}
          >
            Next
          </button>
          <button className="course-link-button" type="button" onClick={onOpenCourse}>
            <PlayCircle size={18} />
            {mode === "start" ? "Start level" : "Open course"}
          </button>
          <button className="about-button" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </article>
    </div>
  );
};
