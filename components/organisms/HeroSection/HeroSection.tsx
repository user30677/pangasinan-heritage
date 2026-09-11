import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";
import Image from "@/components/atoms/Image/Image";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <Typography variant="caption">
          PANGASINAN HERITAGE
        </Typography>

        <Typography variant="display">
          Discover the Heritage of Pangasinan
        </Typography>

        <Typography variant="body">
          Explore the history, culture, landmarks, and
          treasured places that make Pangasinan unique.
        </Typography>

        <Button
          onClick={() => {
            document
              .getElementById("heritage-sites")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Heritage
        </Button>
      </div>

      <div className="hero-image-wrapper">
        <Image
          src="/Images/Banaan-Museum.jpg"
          alt="Banaan Museum in Pangasinan"
          width={800}
          height={500}
          className="hero-image"
          loading="eager"
        />
      </div>
    </section>
  );
}