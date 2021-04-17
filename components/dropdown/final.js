import { useState } from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Content as StyledContent, Item } from "./styled";

const Content = styled(StyledContent)`
  transform-origin: top left;
`;

export function FinalMenuDropdown() {
  // using the plain useState React Hook to control the state of the dropdown
  const [open, setOpen] = useState(false); // by default it is closed

  return (
    <Menu.Root open={open} onOpenChange={setOpen}>
      <Button>Open</Button>
      <AnimatePresence>
        {open ? ( // if it is opened, render the Content. Otherwise, don't render anything (null)
          <Content
            forwardedAs={motion.div}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring", duration: 0.3 },
            }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }}
            align="start"
            forceMount // forceMount will always mount the Content, see note below
          >
            <Item onSelect={() => console.log("Cut")}>Cut</Item>
            <Item onSelect={() => console.log("Copy")}>Copy</Item>
            <Item onSelect={() => console.log("Paste")}>Paste</Item>
          </Content>
        ) : null}
      </AnimatePresence>
    </Menu.Root>
  );
}
