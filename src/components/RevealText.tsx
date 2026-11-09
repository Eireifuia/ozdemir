interface RevealTextProps {
  text: string;
  delay?: number;
}

export default function RevealText({ text, delay = 0 }: RevealTextProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 align-bottom">
          <span
            className="inline-block animate-reveal-word"
            style={{ animationDelay: `${delay + i * 70}ms` }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </>
  );
}
