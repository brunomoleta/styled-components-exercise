/* eslint-disable react/prop-types */
import styled from "styled-components";

import { COLORS } from "./constants";

const Ghost = styled.button`
      font-size: 21px;
      color: COLORS.gray;
      background-color: COLORS.gray;
    &:hover {
      border-radius: 8px;
      border: 2px solid transparentGray75;
    }
`

const Button = ({ variant, size, children }) => {
  return <Ghost>{children}</Ghost>
};

export default Button;
