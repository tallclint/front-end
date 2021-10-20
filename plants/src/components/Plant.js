import React from "react";
import styled from "styled-components";

const Plant = (props) => {
  const { plant } = props;
  return (
    <div className="plant">
      <StyledPlant>
        <h2>Plant {plant.id}</h2>
        <h3>Nickname: {plant.nickname}</h3>
        <p>Species: {plant.species}</p>
        <p>Watering Frequency: {plant.h2oFrequency}</p>
      </StyledPlant>
    </div>
  );
};
export default Plant;

const StyledPlant = styled.div`
  background-color: #fbe7c6;
  width: 30rem;
  padding: 0.5rem;
  margin: 0.5rem;
`;
