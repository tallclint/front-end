import React from "react";
import { plantsStart } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";

import Plant from "./Plant";

const PlantsList = (props) => {
  const handleClick = () => {};
  return (
    <div className="PlantsList">
      <StyledPlantsList>
        <div>
          <h2>Plants List</h2>
          {!props.isFetching &&
            props.plantsArr[0].map((plant) => {
              return <Plant key={plant.id} plant={plant} />;
            })}
        </div>
      </StyledPlantsList>
      <button onClick={handleClick}>Add Plant</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    plantsArr: state.plantsArr,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { plantsStart })(PlantsList);

const StyledPlantsList = styled.div`
  display: flex;
  justify-content: center;
`;
