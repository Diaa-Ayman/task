import { Component } from 'react';
import styled from 'styled-components';
import { StyledSpan, Attribute } from './Global';
export default class AttributeElement extends Component {
  render() {
    const {
      attributes,
      colors,
      width,
      height,
      hoveredBackgroundColor,
      hoveredColor,
      child,
    } = this.props;
    return (
      <AttrElement>
        <StyledSpan fontWeight='900' fontSize='12px'>
          {child}:
        </StyledSpan>
        <AttributesContainer>
          {attributes.map((attribute, index) => (
            <Attribute
              backgroundColor={colors ? attribute : '#fff'}
              width={width}
              height={height}
              hoveredBackgroundColor={hoveredBackgroundColor}
              hoveredColor={hoveredColor}
              key={index}
            >
              {/* Need for test IMP */}
              {!colors && attribute}
            </Attribute>
          ))}
        </AttributesContainer>
      </AttrElement>
    );
  }
}

const AttrElement = styled.div``;

const AttributesContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;
