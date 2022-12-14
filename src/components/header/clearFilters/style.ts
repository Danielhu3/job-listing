import styled from "styled-components";
export const ClearFilters = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: hsl(180,8%,52%);
    font-weight: 700;

    transition: all .5s ease-in-out;

    &:hover{
        text-decoration: underline;
        color: hsl(180,29%,50%);
    }
`