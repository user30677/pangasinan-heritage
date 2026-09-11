import HeaderNavigation from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import Typography from "@/components/atoms/Typography/Typography";

export default function AboutPage() {
  return (
    <>
      <HeaderNavigation />

      <main>
        <section className="about-page">
          <div className="about-header">
            <Typography variant="caption">
              ABOUT THE PROJECT
            </Typography>

            <Typography variant="display">
              Pangasinan Heritage
            </Typography>

            <Typography variant="body">
              A digital showcase celebrating the historical,
              cultural, and natural heritage of Pangasinan.
            </Typography>
          </div>

          <div className="about-content">
            <section className="about-card">
              <Typography variant="heading">
                Our Purpose
              </Typography>

              <Typography variant="body">
                Pangasinan Heritage is a digital tourism showcase
                designed to make information about the province&apos;s
                heritage sites easier to discover and explore.
              </Typography>

              <Typography variant="body">
                The website presents historical landmarks, cultural
                destinations, and natural attractions through an
                accessible and mobile-friendly interface.
              </Typography>
            </section>

            <section className="about-card">
              <Typography variant="heading">
                Explore Pangasinan
              </Typography>

              <Typography variant="body">
                Discover notable destinations throughout the province,
                learn about their significance, and explore the stories
                behind the places that contribute to Pangasinan&apos;s
                identity.
              </Typography>
            </section>

            <section className="about-card">
              <Typography variant="heading">
                Built for Everyone
              </Typography>

              <Typography variant="body">
                The website follows a mobile-first approach and is
                designed to provide a clear and accessible experience
                across smartphones, tablets, and desktop devices.
              </Typography>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}