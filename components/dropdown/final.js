import { useState } from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Content as StyledContent, Item } from "./styled";

const Content = styled(StyledContent)`
  transform-origin: top left;
`;

export function FinalMenuDropdown() {
    const [open, setOpen] = useState(false);
    return (
      <Menu.Root open={open} onOpenChange={setOpen}>
        <Button>
          Open
        </Button>
        <AnimatePresence>
          {open ? (
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
              forceMount
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