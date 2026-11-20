/** Fixed, full-page film grain over both themes (brief, section 3). */
export function Grain() {
  return (
    <svg aria-hidden="true" className="grain">
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves={3}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
