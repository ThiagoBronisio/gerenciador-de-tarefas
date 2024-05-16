import styled from "styled-components"; 

export const ContainerErrorPage = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #dcdcdc;
`
export const ContainerErrorPageImg = styled.div`
    width: 220px;
    height: 220px;
`
export const ContainerErrorPageMsg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 15px 0;
        font-size: 30px;
        

        @media (max-width: 767px) {
            font-size: 20px;
        }

        @media (min-width: 768px) and (max-width: 1023px){
            font-size: 30px;
        }
    }

    p {
        text-align: center;
        ;
        line-height: 18px;
        font-size: 16px;

        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
`
export const ButtonErrorPage = styled.button`
    background-color: #333333;
    color: #FFF;
    width: 200px;
    height: 40px;
    margin-top: 20px;
    border: none;
    border-radius: 20px;
    font-weight: 400;
    cursor: pointer;
    font-size: 16px;

    @media (max-width: 767px) {
            font-size: 14px;
        }

    &:hover {
        transition: all 0.5s;
        border: 1px solid #333333;
        background-color: #F5F5F5;
        color: #000;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`