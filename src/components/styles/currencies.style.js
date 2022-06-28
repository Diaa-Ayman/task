import styled from 'styled-components';

const Select = styled.select`
  /* width: 20px;
  height: 20px; */
  background-color: white;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  margin-right: 25px;
  padding: 8px 0;
  cursor: pointer;
`;
const Option = styled.option`
  box-shadow: none !important;
`;

export { Select, Option };
