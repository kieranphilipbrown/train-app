import styled from 'styled-components';

export const StyledErrorMessage = styled.div `
    align-items: center;
    background-color: rgba(250,92,124,.18);
    border-bottom: 1px solid #e9e9e9;
    box-shadow: 0 3px 13px -2px rgba(0,0,0,.15);
    color: #fa5c7c;
    display: flex;
    justify-content: center;
    padding: 0.7rem;
    margin-bottom: 0;

    svg {
        fill: #f95656;
        margin-right: 8px;
    }
`;
