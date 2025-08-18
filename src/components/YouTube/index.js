/**
 * YouTube video embed. Uses youtube-nocookie.com for better privacy
 * @example
 * <YouTube embedId="R07JiT0PlcE" />
 */
export default function YouTube({ embedId }) {
  return (
    <div style={{paddingBottom: '56.25%', position: 'relative', display: 'block', width: '100%'}}>
      <iframe
        loading="lazy"
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        allow="accelerometer; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        style={{position: 'absolute', top: 0, left: 0}}
      />
    </div>
  );
}
