import { useId } from "react";

/** Recreation of The Magnifier seal as an SVG. */
export default function Logo({
  className = "",
  spin = false,
}: {
  className?: string;
  spin?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="The Magnifier — the official school publication of Biliran Science High School"
    >
      <defs>
        <path
          id={`ring-${id}`}
          d="M100,181 A81,81 0 1 1 100,19 A81,81 0 1 1 100,181"
        />
      </defs>
      <circle cx="100" cy="100" r="99" fill="#fff" />
      <circle cx="100" cy="100" r="97" fill="#d11f26" />
      <circle cx="100" cy="100" r="66" fill="#fff" />

      <g className={spin ? "spin-slow" : undefined}>
        <g transform="rotate(32 100 100)">
          <text
            fill="#fff"
            fontFamily="Inter, sans-serif"
            fontWeight="800"
            fontSize="11.5"
          >
            <textPath
              href={`#ring-${id}`}
              textLength="500"
              lengthAdjust="spacing"
            >
              THE OFFICIAL SCHOOL PUBLICATION OF BILIRAN SCIENCE HIGH SCHOOL •
            </textPath>
          </text>
        </g>
      </g>

      {/* faint "newsroom" silhouettes */}
      <g fill="#bdbdbd" opacity="0.7">
        <circle cx="68" cy="92" r="6" />
        <path d="M58 140 L60 104 Q68 96 78 104 L80 140 Z" />
        <circle cx="140" cy="94" r="5.5" />
        <path d="M131 140 L133 106 Q140 99 148 106 L150 140 Z" />
        <rect x="76" y="86" width="12" height="7" rx="1" />
        <rect x="108" y="130" width="3" height="16" rx="1.5" />
        <path d="M80 142 Q100 130 124 142 L124 152 L80 152 Z" fill="#d4d4d4" />
      </g>

      {/* red square frame */}
      <rect
        x="50"
        y="52"
        width="100"
        height="92"
        fill="none"
        stroke="#d11f26"
        strokeWidth="3"
      />
      <rect x="62" y="48" width="62" height="14" fill="#fff" />
      <rect x="50" y="86" width="12" height="28" fill="#fff" opacity="0" />

      <text
        x="57"
        y="96"
        fill="#d11f26"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="30"
        letterSpacing="-1"
      >
        THE
      </text>
      <text
        x="55"
        y="122"
        fill="#d11f26"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="19.5"
        letterSpacing="-0.8"
      >
        MAGNIFIER
      </text>

      {/* magnifying glass */}
      <circle
        cx="123"
        cy="80"
        r="14"
        fill="#fff"
        fillOpacity="0.6"
        stroke="#555"
        strokeWidth="4.5"
      />
      <line
        x1="133"
        y1="90"
        x2="143"
        y2="101"
        stroke="#555"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
