"use client";

import HeritageTile from "@/components/molecules/HeritageTile/HeritageTile";
import { HeritageSite } from "@/data/heritageSites";

interface HeritageTileGridProps {
  sites: HeritageSite[];
  searchQuery?: string;
}

export default function HeritageTileGrid({
  sites,
  searchQuery = "",
}: HeritageTileGridProps) {
  const query = searchQuery.toLowerCase().trim();

  const filteredSites = sites.filter((site) => {
    return (
      site.name.toLowerCase().includes(query) ||
      site.location.toLowerCase().includes(query) ||
      site.description.toLowerCase().includes(query)
    );
  });

  return (
    <section className="heritage-tile-grid-section">
      <div className="heritage-tile-grid">
        {filteredSites.map((site) => (
          <HeritageTile
            key={site.slug}
            name={site.name}
            slug={site.slug}
            location={site.location}
            image={site.image}
          />
        ))}
      </div>

      {filteredSites.length === 0 && (
        <div className="heritage-no-results">
          <p>No heritage sites found.</p>
        </div>
      )}
    </section>
  );
}