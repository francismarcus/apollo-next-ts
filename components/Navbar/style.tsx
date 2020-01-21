import styled from 'styled-components';
import Link  from 'next/Link'

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
width: 100vw;
align-items: stretch;
  background-color: #fff;
  box-shadow: #f5f5f5 0 2px 0 0;
  display: flex;
  min-height: 3.25rem;
  padding: 1rem 2rem;
  position: relative;
  z-index: 30;
  color: #462626;
  font-weight: 600
  height: 240px;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #462626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;

const MenuLink = styled.a`
margin-right: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Img = styled.img`
height: 4vmin;
margin-bottom: -1.4vmin;
margin-right: 0.5vmin;
  @media (max-width: 812px) {
    height: 6vmin;
  }
`

export { Nav, NavHeader, NavLeft, NavCenter, NavRight, Input, MenuLink, StyledLink, Img };