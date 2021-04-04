import * as Menu from "@radix-ui/react-dropdown-menu";

export function SimpleMenuDropdown() {
  return (
    <Menu.Root>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.Content>
        <Menu.Item onSelect={() => console.log("Cut")}>Cut</Menu.Item>
        <Menu.Item onSelect={() => console.log("Copy")}>Copy</Menu.Item>
        <Menu.Item onSelect={() => console.log("Paste")}>Paste</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
}
