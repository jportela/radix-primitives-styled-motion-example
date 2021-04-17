import styled from "styled-components";
import { FinalMenuDropdown } from "../components/dropdown/final";
import { SimpleMenuDropdown } from "../components/dropdown/simple";
import { StyledMenuDropdown } from "../components/dropdown/styled";
import { MotionMenuDropdown } from "../components/dropdown/motion";

const ExampleContainer = styled.div`
  margin-bottom: 64px;
`;

export default function Home() {
  return (
    <main>
      <h1>Radix Primitives with styled-components and framer-motion</h1>
      <p>
        Example on how to add animation to <a href="https://radix-ui.com/primitives/docs/overview/introduction">Radix Primitives</a>, using <a href="https://www.framer.com/motion/">Framer Motion</a>
        {' '}and <a href="https://styled-components.com/">Styled Components</a>.
      </p>
      <p><a href="https://www.joaoportela.com/blog/animate-styled-radix-primitives-framer-motion">Check my blog post for more details.</a></p>
      <ExampleContainer>
        <h2>Menu Dropdown (Final)</h2>
        <FinalMenuDropdown />
      </ExampleContainer>
      <ExampleContainer>
        <h2>Menu Dropdown (Simple)</h2>
        <SimpleMenuDropdown />
      </ExampleContainer>
      <ExampleContainer>
        <h2>Menu Dropdown (Styled)</h2>
        <StyledMenuDropdown />
      </ExampleContainer>
      <ExampleContainer>
        <h2>Menu Dropdown (Motion)</h2>
        <MotionMenuDropdown />
      </ExampleContainer>
    </main>
  );
}
