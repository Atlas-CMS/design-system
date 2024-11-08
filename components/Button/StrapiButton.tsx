import React from "react";

import styled, { keyframes } from "styled-components";
import { Loader } from "@strapi/icons";

import {
  getDisabledStyle,
  getHoverStyle,
  getActiveStyle,
  getVariantStyle,
} from "./utils";
import { BUTTON_SIZES, Variant, ButtonSizes, DEFAULT } from "./constants";
import { BaseButton, BaseButtonProps } from "../BaseButton";
import { Typography, Flex, Box } from "..";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const LoaderAnimated = styled(Loader)`
  animation: ${rotation} 2s infinite linear;
  will-change: transform;
`;

export const ButtonWrapper = styled(BaseButton)<
  Required<Pick<ButtonProps, "size" | "variant">>
>`
  height: ${({ theme, size }) => theme.sizes.button[size]};

  svg {
    height: ${12 / 16}rem;
    width: auto;
  }

  &[aria-disabled="true"] {
    ${getDisabledStyle}

    &:active {
      ${getDisabledStyle}
    }
  }

  &:hover {
    ${getHoverStyle}
  }

  &:active {
    ${getActiveStyle}
  }

  ${getVariantStyle}
`;

export interface ButtonProps extends BaseButtonProps {
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSizes;
  startIcon?: React.ReactNode;
  variant?: Variant;
}

export const StrapiButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = DEFAULT,
      startIcon,
      endIcon,
      disabled = false,
      children,
      onClick,
      size = BUTTON_SIZES[0],
      loading = false,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
      e: any
    ) => {
      if (!isDisabled && onClick) {
        onClick(e);
      }
    };

    return (
      <ButtonWrapper
        ref={ref}
        aria-disabled={isDisabled}
        disabled={isDisabled}
        size={size}
        variant={variant}
        onClick={handleClick}
        fullWidth={fullWidth}
        alignItems="center"
        background="buttonPrimary600"
        borderColor="buttonPrimary600"
        gap={2}
        inline={fullWidth}
        justifyContent={fullWidth ? "center" : undefined}
        paddingLeft={4}
        paddingRight={4}
        width={fullWidth ? "100%" : undefined}
        {...props}
      >
        {(startIcon || loading) && (
          <Box aria-hidden>{loading ? <LoaderAnimated /> : startIcon}</Box>
        )}

        <Typography
          variant={size === "S" ? "pi" : undefined}
          fontWeight="bold"
          textColor="buttonNeutral0"
        >
          {children}
        </Typography>

        {endIcon && <Flex aria-hidden>{endIcon}</Flex>}
      </ButtonWrapper>
    );
  }
);

StrapiButton.displayName = "Button";
