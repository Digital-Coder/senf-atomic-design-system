/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { FlexWrapperProps } from "./FlexWrapper.types";

const Wrapper = styled.div<FlexWrapperProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  width: ${(props) => (props.height ? props.height : "auto")};

  margin: ${(props) => (props.margin ? props.margin : "0")};
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : null)};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  gap: ${(props) => (props.gap ? props.gap : null)};
`;

const FlexWrapper: FC<FlexWrapperProps> = ({
  children,
  direction,
  gap,
  margin,
  width,
  alignItems,
  justifyContent,
  height,
}) => {
  return (
    <Wrapper
      direction={direction}
      gap={gap}
      margin={margin}
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Wrapper>
  );
};

export default FlexWrapper;
