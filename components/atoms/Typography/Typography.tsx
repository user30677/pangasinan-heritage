interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "display"
    | "heading"
    | "subheading"
    | "body"
    | "caption";
  className?: string;
}

export default function Typography({
  children,
  variant = "body",
  className = "",
}: TypographyProps) {
  const styles = {
    display: "typography-display",
    heading: "typography-heading",
    subheading: "typography-subheading",
    body: "typography-body",
    caption: "typography-caption",
  };

  const classNames = `${styles[variant]} ${className}`;

  if (variant === "display") {
    return <h1 className={classNames}>{children}</h1>;
  }

  if (variant === "heading") {
    return <h2 className={classNames}>{children}</h2>;
  }

  if (variant === "subheading") {
    return <h3 className={classNames}>{children}</h3>;
  }

  return <p className={classNames}>{children}</p>;
}