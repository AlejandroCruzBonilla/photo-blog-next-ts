import { FC, ReactElement, ReactNode, useRef, useState } from 'react';
import { Grid, Slide } from "@mui/material"
import { useInView } from 'react-intersection-observer';
// import { useOnScreen } from "../../../hooks"


// import { fadeInLeft } from 'react-animations'
// import styled, { keyframes } from 'styled-components';
// const bounceAnimation = keyframes`${fadeInLeft}`;

// const BouncyDiv = styled.div`
//   animation: 1s ${bounceAnimation};
// `;

interface Props {
  children: ReactElement
  direction: "right" | "left" | "up" | "down" | undefined
  timeout?: number
}


export const AnimateContainer: FC<Props> = ({ children, direction, timeout }) => {
  const { ref, inView } = useInView();
  console.log(inView);
  return (
    <Grid ref={ref}>
      <Slide direction={direction} in={inView} timeout={timeout}>
        {children}
      </Slide>
    </Grid>
  )
}
