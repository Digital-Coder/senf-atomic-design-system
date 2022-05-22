/** @format */

import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { isMobileCustom } from "../../../hooks/customDeviceDetect";
import theme from "../../../styles/theme";
import Button from "../../atoms/buttons/Button";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Shape from "../../atoms/shapes/Shape";
import Typography from "../../atoms/typography/Typography";
import Accordion from "../../molecules/accordion/Accordion";
import OrganizationCard from "../../molecules/cards/OrganizationCard";
import List from "../../molecules/list/List";
import SwipeModal from "../../molecules/modals/SwipeModal";
import SubNavbar from "../../molecules/navs/SubNavbar";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import Toolbar from "../../toolbar/Toolbar";
import { OrganizationsOverviewProps } from "./OrganizationsOverview.types";

const Wrapper = styled.div<OrganizationsOverviewProps>`
  background-color: ${({ theme }) => theme.colors.beige.beige20};
  margin-left: 200px;
  width: ${({ open }) => (open ? "calc(100vw - 605px)" : "400px")};
  height: 100vh;
  overflow-y: scroll;
  z-index: 90;
  top: 0;
  position: fixed;
  transition: 0.3s;
  box-shadow: 40px 8px 30px -12px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
`;

const InnerWrapper = styled.div<OrganizationsOverviewProps>`
  overflow-y: scroll;
  pointer-events: all;
  height: calc(100% - 120px);
  width: 100%;
  margin-top: ${(props) => (props.isMobileCustom ? "-10px" : "0px")};
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
  open = true,
  data,
  selectedOrganizationTypes,
}) => {
  const { t } = useTranslation();
  const [searchOpen, setSearchOpen] = useState(false);

  console.log(isMobileCustom());

  return isMobileCustom() ? (
    <SwipeModal
      backgroundColor={theme.colors.beige.beige20}
      openModal={true}
      headerComponentHeight="102px"
      headerComponentBackgroundColor={theme.colors.beige.beige20}
      HeaderComponent={
        <React.Fragment>
          <Shape variant={1} position="absolute" marginTop="0px" />

          <SubNavbar
            iconLeft="arrow"
            header={t("organizations")}
            handlebar={true}
            // iconRight="plus"
            // iconRightTransform="rotate(45deg)"
          />
          <TagSlide
            type="organizationTypes"
            selectedOrganizationTypes={selectedOrganizationTypes}
          />
        </React.Fragment>
      }
    >
      <InnerWrapper isMobileCustom={isMobileCustom}>
        <FlexWrapper margin="16px 12px 16px 12px" width="calc(100% - 24px)">
          <Toolbar />
        </FlexWrapper>
        <FlexWrapper margin="0px 12px 6px 12px" width="calc(100% - 24px)">
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
        </FlexWrapper>
        <List CardType={OrganizationCard} data={data} />
      </InnerWrapper>
    </SwipeModal>
  ) : (
    <Wrapper open={open}>
      <SVGWrapper searchOpen={searchOpen}>
        <HeaderWrapper>
          <FlexWrapper
            margin="20px"
            width="calc(100% - 40px)"
            justifyContent="center"
          >
            <Typography
              variant="h2"
              // fontSize={document.body.clientWidth > 368 ? "22px" : "19px"}
              textAlign="center"
            >
              {t("organizations")}
            </Typography>
          </FlexWrapper>

          <FlexWrapper margin="16px 12px 16px 12px" width="calc(100% - 24px)">
            <Toolbar />
          </FlexWrapper>

          {/* <ButtonWrapper>
            <Button
              variant="secondary"
              borderStyle="dashed"
              size="small"
              text={t("createOrganization")}
              // onClick={
              //   user.authenticated
              //     ? openCreateOrganization
              //     : () => setOpenModalAuthenticate(true)
              // }
            />
          </ButtonWrapper> */}
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

      <InnerWrapper isMobileCustom={isMobileCustom}>
        <List CardType={OrganizationCard} data={data} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default OrganizationsOverview;
