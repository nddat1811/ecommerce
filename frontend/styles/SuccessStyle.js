
import { styled } from "styled-components";
const { motion } = require("framer-motion");

export const Wrapper = styled.div`
  margin: 5rem 15rem;
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  h2 {
    margin-bottom: 1rem 0.5rem;
  }
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem;
`;

export const Address = styled.div`
  font-size: 1rem;
  width: 100%;
`;

export const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding-bottom: 1rem;
  }
`;
