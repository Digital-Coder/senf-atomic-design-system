/** @format */

import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import theme from "../../../styles/theme";
import Button from "../../atoms/buttons/Button";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import Box from "../../atoms/box/Box";
import Shape from "../../atoms/shapes/Shape";
import Typography from "../../atoms/typography/Typography";
import OrganizationCard from "../../molecules/cards/OrganizationCard";
import List from "../../molecules/list/List";
import SwipeModal from "../../molecules/modals/SwipeModal";
import SubNavbar from "../../molecules/navs/SubNavbar";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import Toolbar from "../../molecules/toolbar/Toolbar";
import { OrganizationsOverviewProps } from "./OrganizationsOverview.types";
import Arrow from "../../../assets/icons/Arrow";

const Wrapper = styled.div<OrganizationsOverviewProps>`
  background-color: ${({ theme }) => theme.colors.beige.beige20};
  margin-left: 10px;
  margin-top: 10px;
  width: ${({ open }) => (open ? "calc(100vw - 475px)" : "470px")};
  height: calc(100vh - 20px);
  border-radius: 18px;
  overflow-y: scroll;
  z-index: 90;
  top: 0;
  position: fixed;
  transition: 0.3s;
  box-shadow: 40px 8px 30px -12px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  @media (max-width: 1350px) {
    width: ${({ open }) => (open ? "calc(100vw - 200px)" : "400px")};
  }
`;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  overflow-y: scroll;
  pointer-events: all;
  height: calc(100% - 120px);
  width: 100%;
  margin-top: ${(props) => (props.isMobile ? "-10px" : "0px")};
  overflow: scroll;
  z-index: 1;
  margin-left: 50%;
  padding-bottom: 200px;
  transform: translateX(-50%);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const SVGWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.beige.beige20};
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  height: ${(props) => (props.searchOpen ? "210px" : "150px")};
`;

const HeaderWrapper = styled.div`
  position: absolute;
  width: 600px;
  height: 120px;
  margin-left: 50%;
  top: 0;
  transform: translateX(-50%);
  background-color: transparent;
`;

const OrganizationsOverview: FC<OrganizationsOverviewProps> = ({
  openOrganizationsModal = true,
  setOpenOrganizationsOverview,
  data,
  selectedOrganizationTypes,
  handleSelectOrganizationTypes,
  user,
  openCreateOrganization,
  setOpenModalAuthenticate,
}) => {
  const { t } = useTranslation();
  const isMobile = isMobileCustom();
  const [searchOpen, setSearchOpen] = useState(false);

  return isMobile ? (
    <SwipeModal
      backgroundColor={theme.colors.beige.beige20}
      openModal={openOrganizationsModal}
      headerComponentHeight="102px"
      headerComponentBackgroundColor={theme.colors.beige.beige20}
      HeaderComponent={
        <React.Fragment>
          <Shape variant={1} position="absolute" marginTop="0px" />

          <SubNavbar
            iconLeft={<Arrow transform="rotate(90deg)" />}
            header={t("organizations")}
            handlebar={true}
            // iconRight="plus"
            // iconRightTransform="rotate(45deg)"
          />
          <TagSlide
            type="organizationTypes"
            selectedOrganizationTypes={selectedOrganizationTypes}
            handleSelectOrganizationTypes={handleSelectOrganizationTypes}
          />
        </React.Fragment>
      }
    >
      <InnerWrapper isMobile={isMobile}>
        <Box margin="16px 12px 16px 12px">
          <Toolbar />
        </Box>
        <Box margin="0px 12px 6px 12px">
          <Button
            variant="secondary"
            borderStyle="dashed"
            size="small"
            text={t("createOrganization")}
            fillWidth="max"
            // onClick={
            //   user.authenticated
            //     ? openCreateOrganization
            //     : () => setOpenModalAuthenticate(true)
            // }
          />
        </Box>
        <List CardType={OrganizationCard} data={data} listType="grid" />
      </InnerWrapper>
    </SwipeModal>
  ) : (
    <Wrapper open={openOrganizationsModal}>
      <SVGWrapper searchOpen={searchOpen}>
        <Box position="fixed" margin="20px" zIndex={2}>
          <RoundedButton
            icon={<Arrow transform="rotate(180deg)" />}
            onClick={() => setOpenOrganizationsOverview(false)}
          />
        </Box>
        <HeaderWrapper>
          <Box margin="20px" justifyContent="center">
            <Typography
              variant="h2"
              // fontSize={document.body.clientWidth > 368 ? "22px" : "19px"}
              textAlign="center"
            >
              {t("organizations")}
            </Typography>
          </Box>

          <Box margin="16px 12px 16px 12px">
            <Toolbar
              setSearchOpen={setSearchOpen}
              searchOpen={searchOpen}
              secondButtonClick={
                user?.authenticated
                  ? openCreateOrganization
                  : () => setOpenModalAuthenticate(true)
              }
              secondButtonLabel={t("createOrganization")}
              searchPlaceholder={t("searchBar")}
              activeSortOptionLabel={t("newest_ideas")}
              sortOptions={[
                { name: "newest", label: t("newest_ideas") },
                { name: "hottest", label: t("hottest_ideas") },
              ]}
              statusOptions={[
                { name: "Unprocessed", label: t("unprocessed") },
                { name: "Accepted", label: t("accepted") },
                { name: "Planning", label: t("planning") },
                { name: "Implemented", label: t("implemented") },
                { name: "Rejected", label: t("rejected") },
              ]}
            />
          </Box>
        </HeaderWrapper>
        <svg
          width="100%"
          height="126"
          viewBox="0 0 1100 126"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 125.5V0.5H1130.5V99C1025 143 974.588 95.9476 942.5 83C828.5 37 819 43.5 704 62.5C558 86.6217 307.5 44.5 196 99C128.785 131.854 37.1667 124.667 0 125.5Z"
            fill="#FED957"
          />
        </svg>
      </SVGWrapper>

      <InnerWrapper isMobile={isMobile}>
        <List CardType={OrganizationCard} data={data} listType="grid" />
      </InnerWrapper>
    </Wrapper>
  );
};

export default OrganizationsOverview;