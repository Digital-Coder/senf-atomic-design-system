/** @format */

import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "../../atoms/buttons/Button";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import Input from "../../atoms/inputs/Input";
import Box from "../../atoms/box/Box";
import { ToolbarProps } from "./Toolbar.types";
import Arrow from "../../../assets/icons/Arrow";
import Search from "../../../assets/icons/Search";

const Wrapper = styled.div<ToolbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: 0.5s;
  animation: ToolbarAnimation 0.7s;

  flex-flow: wrap;

  @keyframes ToolbarAnimation {
    0% {
      opacity: 0;
      transform: translateY(10%);
    }
    20% {
      opacity: 0;
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  z-index: -1;
  pointer-events: auto;
`;

const SearchbarWrapper = styled.div`
  margin-top: 10px;
  display: relative;
  width: 100%;
`;

const Toolbar: FC<ToolbarProps> = ({
  handleDropdown,
  handledropdownStatus,
  dropdown,
  dropdownStatus,
  dropdownStatusNumbers,
  handleClickSwipe,
  dataFinalLength,
  setSearchOpen,
  searchOpen,
  searchPlaceholder,
  setSearchTerm,
  searchTerm,
  sortOptions,
  statusOptions,
  activeSortOptionLabel,

  secondButton,
}) => {
  const { t } = useTranslation();

  const setSearch = () => {
    setSearchOpen(!searchOpen);

    // if (isMobileCustom) {
    //   dispatch(setSwipePositionUp());
    // }
  };

  return (
    <Wrapper searchOpen={searchOpen}>
      <TertiaryButton
        onClick={handleDropdown}
        text={activeSortOptionLabel}
        iconRight={<Arrow transform="rotate(90deg)" />}
        variant="semibold"
      />

      <Box gap="8px">
        {secondButton}
        <Button
          variant="secondary"
          icon={<Search />}
          size="small"
          transform="scale(0.7)"
          onClick={setSearch}
          searchTerm={searchTerm}
          searchOpen={searchOpen}
        />
      </Box>

      {/* {isMobileCustom && <Background onClick={handleClickSwipe} />} */}
      {searchOpen && (
        <SearchbarWrapper>
          <Input
            type="search"
            placeholder={searchPlaceholder}
            onChange={setSearchTerm}
            value={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </SearchbarWrapper>
      )}
    </Wrapper>
  );
};

export default Toolbar;
