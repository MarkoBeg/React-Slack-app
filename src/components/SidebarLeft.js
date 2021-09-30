import React from 'react'
import styled from "styled-components"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import AddIcon from '@material-ui/icons/Add';

export default function SidebarLeft() {
    return (
        <SidebarContainer>
            <SidebarBox>
                <CheckBoxOutlineBlankIcon style={{ backgroundColor: 'red'}}></CheckBoxOutlineBlankIcon>
            </SidebarBox>
             <SidebarBox>
                <CheckBoxOutlineBlankIcon style={{ backgroundColor: 'yellow'}}></CheckBoxOutlineBlankIcon>
            </SidebarBox>
            <SidebarAdd>
                <AddIcon></AddIcon>
            </SidebarAdd>

        </SidebarContainer>
    )
}


const SidebarContainer = styled.div`
    flex: 0.2;
    background-color: #3f0f40;
    max-width: 120px;
    padding-top: 60px;
    border: 1px solid gray;
    
    
`
const SidebarBox = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content:center;
    padding-top:15px;

    > .MuiSvgIcon-root{
        font-size: 50px;
        color: transparent;
        border-radius: 12px;
        cursor: pointer;

        :hover {
            border: 3px solid #fff;
            transition: all 0.4s ease;
        }
    }
`
const SidebarAdd = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content:center;
    padding-top:15px;

    > .MuiSvgIcon-root {
        font-size: 45px;
        color: #fff;
        cursor: pointer;
    }
`