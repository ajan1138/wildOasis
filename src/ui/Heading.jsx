import styled, { css } from "styled-components";

const test = css`
  text-align: center;
`;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600px;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2ren;
      font-weight: 500px;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3ren;
      font-weight: 5600px;
      text-align: center;
    `}

  line-height: 1.4 rem;
`;

export default Heading;
