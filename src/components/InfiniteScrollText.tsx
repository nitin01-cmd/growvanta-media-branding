const InfiniteScrollText = () => {
  const text = "We Build. We Market. We Scale.";
  const repeatedText = Array(20).fill(text);

  return (
    <div className="w-full overflow-hidden bg-background py-8 border-y border-border">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {repeatedText.map((item, index) => (
          <span
            key={index}
            className="font-heading text-2xl md:text-4xl text-gold mx-8 inline-block"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollText;
