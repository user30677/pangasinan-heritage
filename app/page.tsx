"use client";

import Link from "next/link";

import HeaderNavigation from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import HeritageGrid from "@/components/organisms/HeritageGrid/HeritageGrid";
import Typography from "@/components/atoms/Typography/Typography";
import Button from "@/components/atoms/Button/Button";
import { heritageSites } from "@/data/heritageSites";

export default function Home() {
  return (
    <>
      <HeaderNavigation />

      <main>
        {/* ========================================
            HERO
           ======================================== */}

        <HeroSection />

        <div className="home-section-separator" aria-hidden="true" />

        {/* ========================================
            INTRODUCTION
           ======================================== */}

        <section className="home-intro-section">
          <div className="home-intro-card">
            <Typography variant="caption">
              EXPLORE PANGASINAN
            </Typography>

            <Typography variant="heading">
              A Province Rich in Heritage
            </Typography>

            <Typography variant="body">
              Pangasinan is home to remarkable landmarks, cultural
              traditions, historical places, and natural attractions.
              This digital showcase brings these treasures together
              in one accessible space.
            </Typography>

            <Typography variant="body">
              From the coastal landscapes of Bolinao and Alaminos to
              the historic communities of Manaoag and Lingayen, every
              destination tells a story about the people and heritage
              of Pangasinan.
            </Typography>
          </div>
        </section>

        <div className="home-section-separator" aria-hidden="true" />

        {/* ========================================
            FEATURED HERITAGE
           ======================================== */}

        <section className="home-featured-section">
          <div className="home-section-heading">
            <Typography variant="caption">
              FEATURED DESTINATIONS
            </Typography>

            <Typography variant="heading">
              Discover Pangasinan
            </Typography>

            <Typography variant="body">
              Explore some of the province&apos;s most notable heritage
              destinations.
            </Typography>
          </div>

          <HeritageGrid
            sites={heritageSites}
            featured
          />
        </section>

        <div className="home-section-separator" aria-hidden="true" />

        {/* ========================================
            WHY EXPLORE
           ======================================== */}

        <section className="home-explore-section">
          <div className="home-section-heading">
            <Typography variant="caption">
              WHY EXPLORE PANGASINAN?
            </Typography>

            <Typography variant="heading">
              History, Culture, and Nature
            </Typography>
          </div>

          <div className="home-explore-grid">
            <article className="home-explore-item">
              <Typography variant="subheading">
                Cultural Heritage
              </Typography>

              <Typography variant="body">
                Discover traditions, communities, museums, churches,
                and landmarks that reflect the cultural identity of
                Pangasinan.
              </Typography>
            </article>

            <article className="home-explore-item">
              <Typography variant="subheading">
                Historical Places
              </Typography>

              <Typography variant="body">
                Learn about significant places and structures that
                preserve stories from Pangasinan&apos;s past.
              </Typography>
            </article>

            <article className="home-explore-item">
              <Typography variant="subheading">
                Natural Attractions
              </Typography>

              <Typography variant="body">
                Experience the province&apos;s islands, coastlines,
                landscapes, springs, and other natural destinations.
              </Typography>
            </article>
          </div>
        </section>

        <div className="home-section-separator" aria-hidden="true" />

        {/* ========================================
            CALL TO ACTION
           ======================================== */}

        <section className="home-cta-section">
          <div className="home-cta-content">
            <Typography variant="heading">
              Explore More Heritage Sites
            </Typography>

            <Typography variant="body">
              There is more to discover beyond the featured
              destinations. Browse the complete collection of
              Pangasinan heritage sites.
            </Typography>

            <Link
              href="/heritage"
              className="home-cta-link"
            >
              <Button>
                View All Heritage Sites
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}