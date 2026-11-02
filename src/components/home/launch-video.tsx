import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PromoVideo } from "@/components/ui/promo-video";
import { designerSuitePromoVideo } from "@/lib/site-config";

export function LaunchVideo() {
  return (
    <Section border={false}>
      <Container>
        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Now Available"
                title="Introducing tAIre Designer Suite"
                description="AI-assisted mould and section design for tyre engineering teams."
              />
              <Button href="/products/taire-designer-suite" variant="secondary">
                Explore the product
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <PromoVideo
              src={designerSuitePromoVideo.src}
              poster={designerSuitePromoVideo.poster}
              title="tAIre Designer Suite launch video"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
