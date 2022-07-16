import { Component } from 'react';
import styled from 'styled-components';
import { StyledSpan, Attribute } from './styles/Global';
export default class AttributeElement extends Component {

  render() {
    const { attribute } = this.props;
    const colorAttr = attribute.name === 'Color';
    let width = ''
    let height = ''
    if(this.props.overlay){
       width = colorAttr ? '8px' : '25px';
       height = colorAttr ? '8px' : '20px';
    }
    else{
      width = colorAttr ? '12px' : '45px';
      height = colorAttr ? '12px' : '27px';
    }
    return (
      <AttrElement>
        <StyledSpan fontWeight='900' fontSize='1rem' fontFamily='raleway'>
          {attribute.name.toUpperCase()}:
        </StyledSpan>
        <AttributesContainer>

          {attribute.items.map((item) => {
            return (
              <Attribute
              onClick={ (e) => {
                if(this.props.highlight){
                attribute.items.forEach(thisItem => {
                  thisItem.selected = false
                  if(item.id === thisItem.id){
                    thisItem.selected = true
                  }
                })
                this.props.getAttributes &&
                  this.props.getAttributes();

              }}}
              overlay = {this.props.overlay}
              selected = {item.selected}
              color = {colorAttr ? item.value : undefined}
              colorAttr = {colorAttr}
              key={item.id}
              backgroundColor={colorAttr ? item.value : '#fff'}
              width={width}
              height={height}
              hoveredBackgroundColor={!colorAttr && this.props.hoverBg}
              hoveredColor= {this.props.hoverColor}
            >
              {/* Need for test IMP */}
              {!colorAttr && item.value}
            </Attribute>
            )
          }
           
          )}
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
