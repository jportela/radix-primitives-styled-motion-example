import * as Menu from "@radix-ui/react-dropdown-menu";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import styled from "styled-components";

const Button = styled(Menu.Trigger)`
    font-size: 1.3rem;
    color: white;
    background-color: orangered;
    border: none;
    padding: 5px 10px;
`

const Content = styled(Menu.Content)`
  min-width: 150px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 5px 15px -5px teal;
  transform-origin: top left;
  margin-top: 4px;
`;

const Item = styled(Menu.Item)`
  font-size: 1.1rem;
  padding: 5px 10px;
  cursor: default;
  &:hover, &:focus {
      outline: 0;
      background: rgba(0,0,0, 0.1)
  }
`;

export default function MenuDropdown() {
    const [open, setOpen] = useState(false)
  return (
      <Menu.Root open={open} onOpenChange={setOpen}>
        <Button>Open</Button>
        <AnimatePresence>
            {open ? 
        <Content
          forwardedAs={motion.div}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { type: 'spring', duration: 0.4 } }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
          forceMount
        >
          <Item onSelect={() => console.log("Cut")}>Cut</Item>
          <Item onSelect={() => console.log("Copy")}>Copy</Item>
          <Item onSelect={() => console.log("Paste")}>Paste</Item>
        </Content> : null}
        </AnimatePresence>
      </Menu.Root>
  );
}
