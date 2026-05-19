export default function HeroWave() {
  return (
    <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 leading-[0]">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}
