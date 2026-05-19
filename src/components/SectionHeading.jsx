export default function SectionHeading({
  id,
  title,
  highlight,
  subtitle,
  dark = false,
  className = "",
  align = "center",
}) {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div id={id} className={`${alignClass} ${className}`}>
      <h2
        className={`text-3xl font-normal leading-tight md:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className={`font-black ${dark ? "text-accent-yellow" : "text-primary"}`}>
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/75" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
