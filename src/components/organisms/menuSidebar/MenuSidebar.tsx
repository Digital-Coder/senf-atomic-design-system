/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import Info from "../../../assets/icons/Info";
import Mail from "../../../assets/icons/Mail";
import More from "../../../assets/icons/More";
import User from "../../../assets/icons/User";
import Box from "../../atoms/box/Box";
import Button from "../../atoms/buttons/Button";
import ContentDropdown from "../../atoms/contentDropdown/ContentDropdown";
import Divider from "../../atoms/divider/Divider";
import { MenuSidebarProps } from "./MenuSidebar.types";

const Wrapper = styled.div<MenuSidebarProps>`
  position: absolute;
  width: 85px;
  height: 100%;
  padding: 20px 10px 20px 12px;
  left: 0;
  top: 0;
  z-index: 996;
  display: flex;
`;

// const ButtonPlacer = styled.div<OrganizationCardProps>`
//   box-sizing: border-box;
//   width: 50px;
//   height: 50px;
//   box-shadow: ${({ theme }) => theme.shadows[5]}
//       ${({ theme }) => theme.colors.brown.brown20tra},
//     ${({ theme }) => theme.shadows[3]}
//       ${({ theme }) => theme.colors.white.white20tra};
//   background-color: #faf8f3;
//   border-radius: 8px;
//   border: 2px solid rgba(255, 255, 255, 0.8);
//   position: absolute;
//   bottom: 0;
// `;

// const StyledDivider = styled.div<DividerProps>`
//   position: relative;
//   width: 2px;
//   height: 100%;
//   border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};

//   background-color: ${({ theme }) => theme.colors.brown.brown20tra};

//   margin: 0;
// `;

const MenuSidebar: FC<MenuSidebarProps> = ({
  handleOpenMyAccount,
  setInfoPageOpen,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <Wrapper>
      <Box
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        width="36px"
      >
        <Box gap="14px" flexDirection="column" width="36px">
          <Button variant="primary" size="small" text={<More />} />
          <Button variant="white" size="small" icon={<More />} />

          <Button
            variant="white"
            size="small"
            icon={<Info />}
            onClick={() => setInfoPageOpen(true)}
          />
          <Button
            variant="white"
            size="small"
            icon={<User />}
            onClick={() => {
              handleOpenMyAccount(true);
            }}
          />
        </Box>

        <Box gap="14px" flexDirection="column" width="36px">
          <ContentDropdown
            open={dropdownOpen}
            setOpen={setDropdownOpen}
            openButtonWidth="36px"
            OpenButton={
              <Button
                variant="white"
                size="small"
                onClick={handleToggle}
                text={"DE"}
              />
            }
            Content={
              <Box gap="5px" flexDirection="column">
                <Button variant="primary" size="small" text="🇩🇪 Deutsch" />
                <Button size="small" variant="secondary" text="🇬🇧 English" />
              </Box>
            }
          />
          <Divider />

          <Button variant="white" size="small" icon={<Mail />} />
          <Button variant="white" size="small" icon={<More />} />
        </Box>
      </Box>

      <Divider height="100%" width="2px" margin="0px 16px 0px 10px" />
    </Wrapper>
  );
};

export default MenuSidebar;
