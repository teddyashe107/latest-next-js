import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Typography/Heading';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="mt-12">
      <Container size="medium">
        <Heading variant="h3">hi, my name is</Heading>
        <Heading variant="h1" firstLetter>
          Tewodros Ashenafi.
        </Heading>
        <div className="mt-4" />

        <Heading variant="h6">
          I am an accomplished full-stack software developer with an unwavering
          passion for crafting elegant and efficient digital solutions that
          empower users and businesses alike. Equipped with an acute sense of
          creativity and a deep understanding of cutting-edge digital marketing
          techniques, I am a true maker of things, relentlessly pursuing the
          most effective and innovative ways to solve complex problems through
          design and technology. Whether it&apos;s building a robust backend
          infrastructure or delivering a seamless user experience, I thrive on
          pushing boundaries and exceeding expectations.
        </Heading>
        <div className="mt-4" />
        <Button size="large">Contact me </Button>
      </Container>
    </div>
  );
};

export default Hero;
