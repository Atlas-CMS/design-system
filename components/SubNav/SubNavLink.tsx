import React from "react";

import { Dot } from "@strapi/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Box, BoxProps } from "../Box";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

export interface SubNavLinkProps extends BoxProps {
  icon: React.ReactNode;
  isSubSectionChild?: boolean;
  withBullet?: boolean;
}

const SubNavLinkWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral800};
  svg > * {
    fill: ${({ theme }) => theme.colors.neutral600};
  }

  &.active {
    ${({ theme }) => {
      return `
      background-color: ${theme.colors.primary100};
      border-right: 2px solid ${theme.colors.primary600};
      svg > * {
        fill: ${theme.colors.primary700};
      }
      ${Typography} {
        color: ${theme.colors.primary700};
        font-weight: 500;
      }
      `;
    }}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;
const CustomBullet = styled(Dot)<{ $active?: boolean }>`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme, $active }) =>
      $active ? theme.colors.primary600 : theme.colors.neutral600};
  }
`;
const IconWrapper = styled.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`;

export const SubNavLink = ({
  children,
  icon,
  withBullet = false,
  isSubSectionChild = false,
  ...props
}: SubNavLinkProps) => {
  return (
    <SubNavLinkWrapper
      // @ts-ignore
      as={NavLink}
      icon={icon}
      background="neutral100"
      paddingLeft={isSubSectionChild ? 9 : 7}
      paddingBottom={2}
      paddingTop={2}
      {...props}
    >
      <Flex>
        {icon ? <IconWrapper>{icon}</IconWrapper> : <CustomBullet />}
        <Box paddingLeft={2}>
          <Typography as="span">{children}</Typography>
        </Box>
      </Flex>
      {withBullet && (
        <Box as={Flex} paddingRight={4}>
          <CustomBullet $active />
        </Box>
      )}
    </SubNavLinkWrapper>
  );
};
