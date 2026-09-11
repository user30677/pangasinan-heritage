import Link from "next/link";

import Image from "@/components/atoms/Image/Image";
import Typography from "@/components/atoms/Typography/Typography";

interface HeritageTileProps {
  name: string;
  slug: string;
  location: string;
  image: string;
}

export default function HeritageTile({
  name,
  slug,
  location,
  image,
}: HeritageTileProps) {
  return (
    <Link
      href={`/heritage/${slug}`}
      className="heritage-tile-link"
    >
      <article className="heritage-tile">
        <Image
          src={image}
          alt={`${name} in ${location}`}
          width={600}
          height={600}
          className="heritage-tile-image"
        />

        <div className="heritage-tile-content">
          <Typography variant="caption">
            {location}
          </Typography>

          <Typography variant="subheading">
            {name}
          </Typography>
        </div>
      </article>
    </Link>
  );
}