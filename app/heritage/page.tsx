"use client";

import { useState } from "react";

import HeaderNavigation from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import HeritageTileGrid from "@/components/organisms/HeritageTileGrid/HeritageTileGrid";
import SearchForm from "@/components/molecules/SearchForm/SearchForm";
import Typography from "@/components/atoms/Typography/Typography";
import { heritageSites } from "@/data/heritageSites";

export default function HeritagePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <HeaderNavigation />

      <main>
        {/* ========================================
            PAGE INTRODUCTION
           ======================================== */}

        <section className="heritage-grid-section">
          <Typography variant="caption">
            PANGASINAN HERITAGE
          </Typography>

          <Typography variant="display">
            Heritage Sites of Pangasinan
          </Typography>

          <Typography variant="body">
            Discover the cultural, historical, and natural treasures
            that make Pangasinan a unique and remarkable province.
          </Typography>
        </section>

        {/* ========================================
            SEARCH
           ======================================== */}

        <section className="search-section">
          <SearchForm onSearch={setSearchQuery} />
        </section>

        {/* ========================================
            HERITAGE SITES
           ======================================== */}

        <HeritageTileGrid
          sites={heritageSites}
          searchQuery={searchQuery}
        />
      </main>
    </>
  );
}