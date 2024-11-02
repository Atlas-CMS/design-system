import { useState } from "react";

import styled from "styled-components";

import { ellipsisStyle } from "../_Typography/utils";
import { Box, BoxProps } from "../Box";
import { Tooltip } from "../Tooltip";

export interface CarouselImageProps extends BoxProps<"img"> {
  alt: string;
  src: string;
}

const StyledImage = styled(Box)`
  ${ellipsisStyle({ ellipsis: true })}
`;

export const CarouselImage = (props: CarouselImageProps) => {
  const [isError, setIsError] = useState(false);

  const handleImageError = () => {
    setIsError(true);
  };

  if (isError) {
    return (
      <Tooltip description={props.alt ?? ""}>
        <StyledImage as="img" height="100%" maxWidth="100%" {...props} />
      </Tooltip>
    );
  }

  return (
    <StyledImage
      as="img"
      height="100%"
      maxWidth="100%"
      {...props}
      onError={handleImageError}
    />
  );
};
