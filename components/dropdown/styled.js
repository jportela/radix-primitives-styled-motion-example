import * as Menu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const Button = styled(Menu.Trigger)`
  font-size: 1.3rem;
  color: white;
  background-color: hsl(19deg 93% 57%);
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  outline-offset: 2px;
  box-shadow: 0px 1px 1px -1px hsl(44deg 13% 11%);
  &:hover,
  &:active {
    background-color: hsl(19deg 93% 44%);
  }
`;

export const Content = styled(Menu.Content)`
  min-width: 150px;
  margin-top: 5px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -5px teal;
`;

export const Item = styled(Menu.Item)`
  font-size: 1.1rem;
  padding: 5px 10px;
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export function StyledMenuDropdown() {
  return (
    <Menu.Root>
      <Button>Open</Button>
      <Content align="start">
        <Item onSelect={() => console.log("Cut")}>Cut</Item>
        <Item onSelect={() => console.log("Copy")}>Copy</Item>
        <Item onSelect={() => console.log("Paste")}>Paste</Item>
      </Content>
    </Menu.Root>
  );
}
