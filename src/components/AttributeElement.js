import { Component } from 'react';
import styled from 'styled-components';
import { StyledSpan, Attribute } from './styles/Global';
export default class AttributeElement extends Component {
  state = {
    items: [],
  };

  render() {
    const { attribute } = this.props;

    const colorAttr = attribute.name === 'Color';
    return (
      <AttrElement>
        <StyledSpan fontWeight='900' fontSize='1rem'>
          {attribute.name.toUpperCase()}:
        </StyledSpan>
        <AttributesContainer>
          {attribute.items.map((item) => (
            <Attribute
              onClick={async () => {
                if (!this.state.items.includes(item)) {
                  await this.setState({
                    items: [...this.state.items, item],
                  });
                }

                this.props.getAttributes &&
                  this.props.getAttributes({
                    ...attribute,
                    items: this.state.items,
                  });
              }}
              key={item.id}
              backgroundColor={colorAttr ? item.value : '#fff'}
              width={colorAttr ? '12px' : '45px'}
              height={colorAttr ? '12px' : '27px'}
              hoveredBackgroundColor={!colorAttr && '#0f0f0f'}
              hoveredColor='#fff'
            >
              {/* Need for test IMP */}
              {!colorAttr && item.displayValue}
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
