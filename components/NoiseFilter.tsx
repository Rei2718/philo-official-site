const NoiseFilter = () => {

  return (
    <>
      {/* SVG Noise Filter */}
      <svg style={{ display: 'none' }}>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="100"
            numOctaves="10"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0.25 0.25 0.25 0 0
                        0.25 0.25 0.25 0 0
                        0.25 0.25 0.25 0 0
                        0 0 0 0.25 0"
          />
          <feComponentTransfer>
            <feFuncA type="gamma" amplitude="1.2" exponent="1" offset="0.1" />
          </feComponentTransfer>
        </filter>
      </svg>
      {/* Noise Overlay */}
      <div className='fixed top-0 left-0 w-full h-full z-20 pointer-events-none' style={{ mixBlendMode: 'overlay' }}>
        <div className='w-full h-full' style={{ filter: 'url(#noiseFilter)', background: '#000000' }}></div>
      </div>
    </>
  );
};

export default NoiseFilter;