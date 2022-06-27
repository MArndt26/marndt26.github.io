import { About } from '@components/About';
import { Contact } from '@components/Contact';
import { HTMLContainer } from '@components/Layout';
import { MetaTags } from '@components/MetaTags';
import { Projects } from '@components/Projects';
import { Education } from '@components/Education';

interface Props {}

export default function Home({}: Props) {
  return (
    <HTMLContainer>
      <MetaTags />
      <Contact />
      <About />
      <Projects />
      <Education />
      <Footer />
    </HTMLContainer>
  );
}

const Footer = () => {
  return (
    <div className="pb-4 italic">
      <p>
        View Portfolio Source Code{' '}
        <a
          href="https://github.com/MArndt26/marndt26.github.io"
          target="_blank"
        >
          here
        </a>
      </p>
    </div>
  );
};
