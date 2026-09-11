interface IconProps {
  name: "search" | "menu" | "arrow-right" | "location";
  size?: number;
  className?: string;
}

export default function Icon({
  name,
  size = 24,
  className = "",
}: IconProps) {
  const icons = {
    search: "⌕",
    menu: "☰",
    "arrow-right": "→",
    location: "⌖",
  };

  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        fontSize: size,
        lineHeight: 1,
      }}
    >
      {icons[name]}
    </span>
  );
}