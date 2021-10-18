import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


const StyledDiv = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ghostwhite;
width : 350px;
height: 70%;
padding: 2%;
border: 5px solid #007360;
color: #007360;
`;
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    font-weight: bolder;
    width: 300px;
`;
const StyledEntryBoxes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
`
<StyledDiv>
    <Route>
        <StyledCard>
             <StyledForm>
                <StyledEntryBoxes>
                    <div>
                        <label>Plant Name</label>
                        <input type='text'
                        placeholder='plant name here'
                        value={plantName}
                        onChange={(e)=>setPlantName(e.target.value)}/>
                    </div>
            <div>
                <label>Nickname for your Plant</label>
                <input type='text'
                placeholder='nickname for your plant'
                value={nickName}
                onChange={(e)=>setNickName(e.target.value)}/>
            </div>
        <div>
            <label>Amount of Water Plant Needs</label>
            <input type='text'
            placeholder='plant name here'
            value={waterNeeds}
            onChange={(e)=>setWaterNeeds(e.target.value)}/>
        </div>
    <div>
        <label></label>
        <input type='text'
        placeholder='plant name here'
        value={time}
        onChange={(e)=>setTime(e.target.value)}/>
    </div>
        </StyledEntryBoxes>
        <input type='submit' value='Save Plant' />
            </StyledForm>
        </StyledCard>
    </Route>
</StyledDiv>