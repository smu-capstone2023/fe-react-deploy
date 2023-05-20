import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
const HambergerMenu = ({ menu }) => {
    return (
        <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<RxHamburgerMenu />} variant="outline" />
            <MenuList>
                {menu.map((item) => {
                    return (
                        <MenuItem onClick={item.onClick} key={item.name}>
                            {item.name}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default HambergerMenu;
