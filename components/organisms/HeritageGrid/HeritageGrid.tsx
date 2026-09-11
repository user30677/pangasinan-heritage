"use client";

import Link from "next/link";

import HeritageCard from "@/components/molecules/HeritageCard/HeritageCard";
import { HeritageSite } from "@/data/heritageSites";

interface HeritageGridProps {
  sites: HeritageSite[];
  searchQuery?: string;
  featured?: boolean;
}

export default function HeritageGrid({
  sites,
  searchQuery = "",
  featured = false,
}: HeritageGridProps) {
  const filteredSites = sites.filter((site) => {
    const query = searchQuery.toLowerCase();

    return (
      site.name.toLowerCase().includes(query) ||
      site.location.toLowerCase().includes(query) ||
      site.description.toLowerCase().includes(query)
    );
  });

  const displayedSites = featured
    ? filteredSites.slice(0, 5)
    : filteredSites;

  return (
    <section
      className="heritage-grid-section"
      id="heritage-sites"
    >
      <div className="heritage-grid">
        {displayedSites.map((site, index) => {
          const isLastFeaturedCard =
            featured && index === 4;

          return (
            <div
              key={site.name}
              className={
                isLastFeaturedCard
                  ? "heritage-card-wrapper heritage-card-faded"
                  : "heritage-card-wrapper"
              }
            >
              <HeritageCard
                name={site.name}
                location={site.location}
                description={site.description}
                image={site.image}
                onExplore={() =>
                  alert(`Exploring ${site.name}`)
                }
                showExploreButton={!isLastFeaturedCard}
              />

              {isLastFeaturedCard && (
                <Link
                  href="/heritage"
                  className="heritage-more-button"
                  aria-label="View all heritage sites"
                >
                  →
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}