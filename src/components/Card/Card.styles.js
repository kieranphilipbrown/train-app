import styled from 'styled-components';

export const StyledCard = styled.div `
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 3px 13px -2px rgba(0,0,0,.15);
    display: flex;
    flex-direction: column;
    position: relative;

    &:active {
        transform: scale(0.99);
    }

    &:hover {
        background: #ffffff85;
        cursor: pointer;
    }

    .right-arrow {
        fill: #dbdbdb;
        height: 50px;
        position: absolute;
        right: 0;
        top: 36px;
        width: 50px;
    }

    .more-info {
        font-size: 14px;
        text-decoration: underline;
        margin-bottom: 0;
    }
`;

export const CardInner = styled.div `
    padding: 1.3rem;
    text-align: left;

    .train-title {
        color: #646464;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 0;
        padding-right: 20px;

        svg {
            vertical-align: middle;
            fill: #d3d3d3;
            height: 24px;
            width: 24px;
            margin-right: 8px;
            margin-top: -6px;
        }
    }

    .train-time {
        color: #646464;
        display: inline-block;
        margin-right: 10px;
    }

    .train-from {
        color: #929292;
        margin-bottom: 10px;
    }

    .train-status {
        border-radius: .25rem;
        display: inline-block;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 10px;
        padding: .35em .7em;;
        text-align: center;
        vertical-align: baseline;
        white-space: nowrap;
    }

    .train-status--green {
        background-color: rgba(10,207,151,.18);
        color: #009e71;
    }

    .train-status--red {
        background-color: rgba(250,92,124,.18);
        color: #fa5c7c;
    }
`;
