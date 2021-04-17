import * as Menu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, Content as StyledContent, Item } from "./styled";

const Content = styled(StyledContent)`
  transform-origin: top left; /* we want the scaling animation to come from the top-left corner */
`;

export function MotionMenuDropdown() {
  return (
    <Menu.Root>
      <Button>Open</Button>
      <Content
        forwardedAs={motion.div} // notice forwardedAs, instead of as
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { type: "spring", duration: 0.3 },
        }}
        align="start" // we want it to align to the left
      >
        <Item onSelect={() => console.log("Cut")}>Cut</Item>
        <Item onSelect={() => console.log("Copy")}>Copy</Item>
        <Item onSelect={() => console.log("Paste")}>Paste</Item>
      </Content>
    </Menu.Root>
  );
}
