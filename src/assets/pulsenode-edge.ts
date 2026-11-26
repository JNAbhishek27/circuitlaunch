const illustration = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc">
  <title id="title">PulseNode Edge IoT gateway</title>
  <desc id="desc">A compact dark navy edge gateway with Ethernet ports and cyan status indicators.</desc>
  <defs>
    <linearGradient id="backdrop" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#11283b"/>
      <stop offset="1" stop-color="#07121f"/>
    </linearGradient>
    <linearGradient id="top" x1="0" y1="0" x2="0.9" y2="1">
      <stop offset="0" stop-color="#304b60"/>
      <stop offset="1" stop-color="#172c3e"/>
    </linearGradient>
    <linearGradient id="front" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1c3549"/>
      <stop offset="1" stop-color="#0b1a28"/>
    </linearGradient>
    <radialGradient id="glow">
      <stop offset="0" stop-color="#31d7f5" stop-opacity=".22"/>
      <stop offset="1" stop-color="#31d7f5" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-.3" y="-.4" width="1.6" height="2">
      <feGaussianBlur stdDeviation="22"/>
    </filter>
  </defs>
  <rect width="1200" height="800" fill="url(#backdrop)"/>
  <circle cx="780" cy="388" r="370" fill="url(#glow)"/>
  <g fill="none" stroke="#24445a" stroke-width="2" opacity=".42">
    <path d="M60 146h210m-210 26h145m710 486h225m-225 26h145"/>
    <circle cx="1030" cy="175" r="92"/><circle cx="1030" cy="175" r="72"/>
    <circle cx="173" cy="624" r="64"/><circle cx="173" cy="624" r="44"/>
  </g>
  <ellipse cx="635" cy="626" rx="358" ry="52" fill="#000" opacity=".62" filter="url(#shadow)"/>
  <g stroke-linejoin="round">
    <!-- Upper chassis and faceted side -->
    <path d="M264 304 696 205 966 293 526 410Z" fill="url(#top)" stroke="#547188" stroke-width="4"/>
    <path d="M966 293 1038 329 1038 526 966 558Z" fill="#0a1723" stroke="#345167" stroke-width="4"/>
    <!-- Front panel -->
    <path d="M526 410 966 293 966 558 526 650Z" fill="url(#front)" stroke="#3c5b71" stroke-width="4"/>
    <!-- Chassis seam and corner details -->
    <path d="M526 435 966 318M526 624 966 506" fill="none" stroke="#314c60" stroke-width="3"/>
    <circle cx="552" cy="454" r="5" fill="#7890a2"/><circle cx="940" cy="350" r="5" fill="#7890a2"/>
    <circle cx="552" cy="602" r="5" fill="#7890a2"/><circle cx="940" cy="490" r="5" fill="#7890a2"/>
    <!-- Top ventilation slots -->
    <g stroke="#70899b" stroke-width="5" opacity=".62">
      <path d="m368 300 156-37M389 316l156-37M410 332l156-37M431 348l156-37"/>
    </g>
    <!-- Product wordmark and status -->
    <text x="590" y="485" fill="#e9f5fb" font-family="Arial,sans-serif" font-size="31" font-weight="700" letter-spacing="4">PULSENODE</text>
    <text x="594" y="516" fill="#8ca8ba" font-family="Arial,sans-serif" font-size="16" font-weight="700" letter-spacing="5">EDGE GATEWAY</text>
    <circle cx="904" cy="450" r="8" fill="#31d7f5"/>
    <circle cx="930" cy="443" r="5" fill="#83f1ff" opacity=".76"/>
    <!-- Ethernet and service ports -->
    <g fill="#06111b" stroke="#547185" stroke-width="3">
      <path d="m583 550 67-18v51l-67 19z"/><path d="m674 526 67-18v51l-67 19z"/>
      <path d="m765 502 47-13v48l-47 13z"/><path d="m835 483 35-10v44l-35 10z"/>
    </g>
    <g stroke="#83f1ff" stroke-width="3" opacity=".8">
      <path d="m596 557 40-11m-40 20 40-11m-40 20 40-11"/>
      <path d="m687 533 40-11m-40 20 40-11m-40 20 40-11"/>
    </g>
    <text x="584" y="622" fill="#8099aa" font-family="Arial,sans-serif" font-size="12" letter-spacing="2">LAN 1</text>
    <text x="675" y="598" fill="#8099aa" font-family="Arial,sans-serif" font-size="12" letter-spacing="2">LAN 2</text>
    <!-- Side cooling slots -->
    <g stroke="#3c596d" stroke-width="5" opacity=".85">
      <path d="m991 368 25-11m-25 29 25-11m-25 29 25-11m-25 29 25-11m-25 29 25-11m-25 29 25-11"/>
    </g>
  </g>
  <g font-family="Arial,sans-serif">
    <text x="78" y="705" fill="#31d7f5" font-size="17" font-weight="700" letter-spacing="4">PULSENODE EDGE</text>
    <text x="78" y="738" fill="#9bb0bf" font-size="14" letter-spacing="2">INTELLIGENCE, CLOSER TO YOUR DEVICES.</text>
    <text x="1035" y="725" fill="#6f8b9e" font-size="12" text-anchor="end" letter-spacing="2">CIRCUITLAUNCH / 01</text>
  </g>
</svg>`;

/** Inline vector asset for web and print renderers. Email keeps its HTTPS fallback. */
export const pulseNodeEdgeIllustration = `data:image/svg+xml,${encodeURIComponent(illustration)}`;
