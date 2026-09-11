import Link from "next/link";

interface NavigationItemProps {
  label: string;
  href: string;
  active?: boolean;
}

export default function NavigationItem({
  label,
  href,
  active = false,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={`navigation-item ${active ? "navigation-item-active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}