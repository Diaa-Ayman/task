import styled from 'styled-components';

// Fun for using Attribute styling...

//////

// STYLING FUNCTIONS....

const size = (props) => props.fontSize;
const fontFamily = (props) => props.fontFamily;
const fontWeight = (props) => props.fontWeight;
const border = (props) => props.border;
const backgroundColor = (props) => props.backgroundColor;
const hoveredBackgroundColor = (props) => props.hoveredBackgroundColor;
const hoveredColor = (props) => props.hoveredColor;
const margin = (props) => props.margin;
const padding = (props) => props.padding;
const width = (props) => props.width;
const height = (props) => props.height;
const color = (props) => props.color;

// Styled Button...

export const Button = styled.button`
  outline: none;
  border: none;
  font-weight: 550;
  background-color: ${backgroundColor};
  margin: ${margin};
  padding: ${padding};
  width: ${width};
  color: ${color};
  border: ${border};
  font-size: ${size};

  &:hover {
    opacity: 0.8;
    transition: 0.7s;
    cursor: pointer;
    background-color: ${hoveredBackgroundColor};
    color: ${hoveredColor};
  }
`;

// Global Styled Attribue Element...

export const Attribute = styled.div`
  border: 0.8px solid #ccc;
  margin-right: 3px;
  padding: 3px;
  background-color: ${backgroundColor};
  font-size: ${size};
  width: ${width};
  height: ${height};
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${hoveredBackgroundColor};
    color: ${hoveredColor};
    transition: 0.5s;
  }
`;

// Global Styled Span...

export const StyledSpan = styled.span`
  font-size: ${size};
  color: ${color};
  font-weight: ${fontWeight};
  font-family: ${fontFamily};
  width: ${width};
  margin: ${margin};
`;
