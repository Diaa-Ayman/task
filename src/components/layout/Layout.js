import { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
export default class Layout extends Component {
  render() {
    return (
      <OutputLayout>
        <Header />
        <Main>{this.props.children}</Main>
      </OutputLayout>
    );
  }
}

const OutputLayout = styled.div`
  padding: 0 8%;
`;

const Main = styled.div`
  margin-top: 4rem;
`;
