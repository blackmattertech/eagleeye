function Paragraphs({ paragraphs, className = "mt-4 leading-relaxed text-gray-600 first:mt-0" }) {
  if (!paragraphs?.length) return null;
  return paragraphs.map((paragraph, index) => (
    <p key={index} className={className}>
      {paragraph}
    </p>
  ));
}

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SubsectionBlock({ subsection, headingLevel = 3 }) {
  const HeadingTag = headingLevel === 3 ? "h3" : "h4";
  const headingClass =
    headingLevel === 3 ? "text-xl font-bold text-navy" : "text-lg font-semibold text-navy";

  return (
    <div className="mt-6">
      <HeadingTag className={headingClass}>{subsection.heading}</HeadingTag>
      <Paragraphs paragraphs={subsection.paragraphs} />
      <BulletList items={subsection.list} />
      <Paragraphs paragraphs={subsection.paragraphsAfterList} />
      {subsection.subsections?.map((nested) => (
        <SubsectionBlock key={nested.heading} subsection={nested} headingLevel={headingLevel + 1} />
      ))}
    </div>
  );
}

function Subsections({ subsections }) {
  if (!subsections?.length) return null;
  return subsections.map((subsection) => (
    <SubsectionBlock key={subsection.heading} subsection={subsection} />
  ));
}

export default function BlogSectionBody({ section }) {
  const paragraphs = section.paragraphs || (section.content ? [section.content] : []);

  return (
    <>
      <Paragraphs paragraphs={paragraphs} />
      <BulletList items={section.list} />
      <Subsections subsections={section.subsections} />
      {section.closing && (
        <p className="mt-4 leading-relaxed text-gray-600">{section.closing}</p>
      )}
    </>
  );
}
