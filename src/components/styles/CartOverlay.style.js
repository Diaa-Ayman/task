import styled from 'styled-components';
import { Button } from './Global';

const ActionButton = styled(Button)`
  padding: 10px 12px;
  margin: 5px;
  background: transparent;
  font-size: 1rem;
  width: 50%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  &hover {
    background-color: ${(props) => props.hoveredBackground};
    color: ${(props) => props.hoveredColor};
  }
`;
const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  img {
    width: 200px;
    object-fit: contain;
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Actions, Container, ActionButton, TotalAmount };
