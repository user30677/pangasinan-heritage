import Link from "next/link";
import { notFound } from "next/navigation";

import HeaderNavigation from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import Image from "@/components/atoms/Image/Image";
import Typography from "@/components/atoms/Typography/Typography";
import { heritageSites } from "@/data/heritageSites";

interface HeritageDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return heritageSites.map((site) => ({
    slug: site.slug,
  }));
}

export default function HeritageDetailPage({
  params,
}: HeritageDetailPageProps) {
  const site = heritageSites.find(
    (heritageSite) => heritageSite.slug === params.slug
  );

  if (!site) {
    notFound();
  }

  return (
    <>
      <HeaderNavigation />

      <main>
        <article className="heritage-detail">

          {/* BACK NAVIGATION */}

          <Link
            href="/heritage"
            className="heritage-detail-back"
          >
            ← Back to Heritage Sites
          </Link>

          {/* HERO IMAGE */}

          <div className="heritage-detail-image-wrapper">
            <Image
              src={site.image}
              alt={site.name}
              width={1200}
              height={800}
              className="heritage-detail-image"
            />
          </div>

          {/* TITLE */}

          <div className="heritage-detail-header">
            <Typography variant="caption">
              {site.location}
            </Typography>

            <Typography variant="display">
              {site.name}
            </Typography>
          </div>

          {/* DESCRIPTION */}

          <section className="heritage-detail-description">
            <Typography variant="heading">
              About this Place
            </Typography>

            <Typography variant="body">
              {site.description}
            </Typography>
          </section>

          {/* DETAILS */}

          <section className="heritage-detail-info">
            <Typography variant="heading">
              Heritage Information
            </Typography>

            <Typography variant="body">
              {site.details}
            </Typography>
          </section>

        </article>
      </main>
    </>
  );
}