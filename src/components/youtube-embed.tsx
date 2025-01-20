export const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div
    style={{
      overflow: "hidden",
      paddingBottom: "56.25%",
      height: "0",
      position: "relative",
    }}
  >
    <iframe
      style={{
        left: "0",
        top: "0",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
      width="853"
      height="480"
      src={`https://www.youtube-nocookie.com/embed//${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
