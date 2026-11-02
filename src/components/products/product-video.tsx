import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PromoVideo } from "@/components/ui/promo-video";

export function ProductVideo({
  title,
  description,
  src,
  poster,
}: {
  title: string;
  description?: string;
  src?: string;
  poster?: string;
}) {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="See It in Action" title={title} description={description} />
        </Reveal>

        <Reveal delay={100}>
          <PromoVideo src={src} poster={poster} title={title} className="mt-10" />
        </Reveal>
      </Container>
    </Section>
  );
}
