// Inline SVG icon set. No emoji, no icon-font libraries anywhere on the site.
// Every icon inherits `currentColor` so colour is controlled by the parent.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export function IconPin({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconClock({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M14.5 8.2V6.6c0-.8.3-1.3 1.4-1.3H17V2.6c-.4 0-1.3-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.8v1.9H9v2.9h2.2V21h3.3v-9.9H17l.4-2.9h-2.9Z" />
    </svg>
  );
}

export function IconLeaf({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M5 19c0-7 5-12 14-12 0 9-5 14-12 14-1.2 0-2-.8-2-2Z" />
      <path d="M8.5 15.5C11 13 13.5 11.5 16 11" />
    </svg>
  );
}

export function IconDiamond({ className = "h-4 w-4", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 3 21 12 12 21 3 12 12 3Z" />
    </svg>
  );
}

export function IconGem({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M6 3h12l3 5-9 13L3 8l3-5Z" />
      <path d="M3 8h18M9 3 7.5 8 12 21 16.5 8 15 3M12 3l-2 5h4l-2-5" />
    </svg>
  );
}

export function IconWine({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7 3h10l-.6 5.5A4.4 4.4 0 0 1 12 12a4.4 4.4 0 0 1-4.4-3.5L7 3Z" />
      <path d="M6.6 6.6h10.8M12 12v6M8.5 21h7" />
    </svg>
  );
}

export function IconSprout({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 20v-7" />
      <path d="M12 13c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z" />
      <path d="M12 12c0-2.8 2.2-5 5-5 0 2.8-2.2 5-5 5Z" />
      <path d="M8.5 20h7" />
    </svg>
  );
}

export function IconRiver({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M3 8c2 0 2 1.4 4 1.4S9 8 11 8s2 1.4 4 1.4S17 8 19 8" />
      <path d="M3 13c2 0 2 1.4 4 1.4S9 13 11 13s2 1.4 4 1.4S17 13 19 13" />
      <path d="M3 18c2 0 2 1.4 4 1.4S9 18 11 18s2 1.4 4 1.4S17 18 19 18" />
    </svg>
  );
}

export function IconSunrise({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M3 18h18M7.5 18a4.5 4.5 0 0 1 9 0" />
      <path d="M12 4v3M5.2 7.2l1.4 1.4M18.8 7.2l-1.4 1.4M2.5 14h2M19.5 14h2" />
    </svg>
  );
}

export function IconChefHat({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7 21h10M7.5 21v-5M16.5 21v-5" />
      <path d="M6.5 16a3.5 3.5 0 0 1-1-6.8 3.6 3.6 0 0 1 6.5-2.4 3.6 3.6 0 0 1 6.5 2.4A3.5 3.5 0 0 1 17.5 16h-11Z" />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown({ className = "h-4 w-4", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconUtensils({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7 3v18M5 3v5a2 2 0 0 0 4 0V3" />
      <path d="M16 3c-1.6 0-2.5 1.8-2.5 4.5S14.4 12 16 12v9" />
    </svg>
  );
}

export function IconCutlery({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <g transform="rotate(-22 12 12)">
        <path d="M9 2v6a2 2 0 0 1-4 0V2M7 8v14" />
      </g>
      <g transform="rotate(22 12 12)">
        <path d="M17.5 2c-1.6 1.1-2.6 3.2-2.6 6 0 2.1 1.1 3.1 2.6 3.3M17.5 2v20" />
      </g>
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  );
}

export function IconVerified({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 2.5l2.2 1.7 2.8-.2.9 2.6 2.3 1.6-.7 2.7.7 2.7-2.3 1.6-.9 2.6-2.8-.2L12 21.5l-2.2-1.7-2.8.2-.9-2.6-2.3-1.6.7-2.7-.7-2.7 2.3-1.6.9-2.6 2.8.2L12 2.5Z" />
      <path d="M8.6 12.2 11 14.6l4.4-4.8" />
    </svg>
  );
}

export function IconStar({ className = "h-5 w-5", filled = true, ...p }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...p}
    >
      <path d="M12 2.6l2.8 5.7 6.3.9-4.55 4.43 1.07 6.27L12 17.9l-5.62 2.97 1.07-6.27L2.9 9.2l6.3-.9L12 2.6Z" />
    </svg>
  );
}

export function IconFlame({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 3c.5 3-1.8 4.2-3 5.8C7.5 10.8 7 12.3 7 14a5 5 0 0 0 10 0c0-2-1-3.8-2.3-5C13.4 7.7 12.8 6.2 13 4.5 12.7 4 12.3 3.5 12 3Z" />
      <path d="M12 18a2.4 2.4 0 0 1-2.4-2.4c0-1.3 1-2.1 1.6-3 .6.9 1.7 1.5 1.9 2.7A2.4 2.4 0 0 1 12 18Z" />
    </svg>
  );
}

export function IconBolt({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z" />
    </svg>
  );
}

export function IconServe({ className = "h-6 w-6", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M3.5 18h17M12 9.2A6.5 6.5 0 0 1 18.5 15.7v.3h-13v-.3A6.5 6.5 0 0 1 12 9.2Z" />
      <path d="M12 9.2V7.4M9.5 5.2c.6-.7 1.9-.7 2.5 0M8 3.2c1.4-1.4 4-1.4 5.4 0" />
    </svg>
  );
}

export function IconPlay({ className = "h-5 w-5", ...p }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
      <path d="M8 5.2v13.6c0 .8.9 1.3 1.6.8l10.2-6.8a1 1 0 0 0 0-1.6L9.6 4.4C8.9 3.9 8 4.4 8 5.2Z" />
    </svg>
  );
}

export function IconEye({ className = "h-4 w-4", ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

export function IconHeart({ className = "h-4 w-4", ...p }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
      <path d="M12 20.5 4.2 12.9a4.7 4.7 0 0 1 0-6.7 4.7 4.7 0 0 1 6.6 0l1.2 1.2 1.2-1.2a4.7 4.7 0 0 1 6.6 0 4.7 4.7 0 0 1 0 6.7L12 20.5Z" />
    </svg>
  );
}
