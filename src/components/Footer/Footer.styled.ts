import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 60px 20px 30px;
  font-family: 'Roboto', sans-serif;
`;

export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #cccccc;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const Bottom = styled.div`
  text-align: center;
  font-size: 13px;
  color: #999999;
  padding-top: 10px;
  border-top: 1px solid #333333;
`;

