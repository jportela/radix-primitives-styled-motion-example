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
      <p>Example on how to add animation to Radix Primitives, using Framer Motion and Styled Components.</p>
      <p>Check my blog post for more details (coming soon).</p>
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
