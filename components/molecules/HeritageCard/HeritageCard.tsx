"use client";

import Image from "@/components/atoms/Image/Image";
import Typography from "@/components/atoms/Typography/Typography";
import Button from "@/components/atoms/Button/Button";

interface HeritageCardProps {
  name: string;
  location: string;
  description: string;
  image: string;
  onExplore?: () => void;
  showExploreButton?: boolean;
}

export default function HeritageCard({
  name,
  location,
  description,
  image,
  onExplore,
  showExploreButton = true,
}: HeritageCardProps) {
  return (
    <article className="heritage-card">
      <Image
        src={image}
        alt={name}
        width={600}
        height={400}
        className="heritage-card-image"
      />

      <div className="heritage-card-content">
        <Typography variant="caption">
          {location}
        </Typography>

        <Typography variant="subheading">
          {name}
        </Typography>

        <Typography variant="body">
          {description}
        </Typography>

        {showExploreButton && (
          <Button onClick={onExplore}>
            Explore
          </Button>
        )}
      </div>
    </article>
  );
}
