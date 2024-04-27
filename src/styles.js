import styled from "styled-components";
import backgroundImage from './img/jpg/backgroundHome.jpg';

const grenn100 = '#434D36';
const gray100 = '#F5F5F5';
const gray200 = '#333333';

export const ContainerHomePage = styled.div`
   
    padding: 0 0 50px 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100vh;

    @media (min-width:1024px) {
        background-image: url(${backgroundImage});
        background-size: cover;
    }

    @media (max-width: 1023px){
        padding: 80px 32px 120px 32px;
    }
`
export const ContainerHomePageTitle = styled.div`
    max-width: 600px;
    padding-bottom: 32px;

    @media (max-width: 767px){
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div {
        display: flex;
        align-items: center;

        @media (max-width: 767px){
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

        svg {
            font-size: 40px;
            margin-left: 20px;
            color: ${gray200};

            @media (max-width: 560px){
                display: none;
            }
        }
    }

    h1 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 44px;
        color: ${gray200};
        font-weight: bold;
        margin-bottom: 5px;

        @media (max-width: 767px){
            font-size: 40px;
            display: flex;
            justify-content: center;
            text-align: center;
    }
    }


    h2 {
        font-family: Arial, Helvetica, sans-serif;
        color: ${grenn100};
        margin-top: 10px;
        font-size: 18px;
        line-height: 26px;

        @media (max-width: 767px){
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 18px;
            line-height: 24px;
    }
    }
`
export const ContainerHomePageList = styled.div`
    margin-bottom: 25px;
    width: 100%;
    display: flex;
    flex-direction: column;

    ul {
        width: 100%;
        list-style-type: none;

        li {
            display: flex;
            align-items: center;
            margin-top: 20px;
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
            color: ${grenn100};

            svg {
                margin-right: 15px;
                font-size: 35px;
                color: ${gray200};
            }
        }
    }
`
export const ContainerHomePageButton = styled.div`
    min-width: 300px;
    max-width: 300px;

    @media (max-width: 1023px){
        min-width: 100%;
        max-width: 100%;
    }

    button {
        background-color: ${gray200};
        width: 100%;
        height: 58px;
        margin-top: 20px;
        border: none;
        border-radius: 25px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        font-size: 18px;
        color: #FFF;

        &:hover {
        transition: all 0.5s;
        border: 1px solid ${gray200};
        background-color: ${gray100};
        color: #000;
    }
    }
`
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
    width: 300px;
    height: 300px;
`
export const ContainerErrorPageMsg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 15px 0;
        font-family: Arial, Helvetica, sans-serif;

        @media (max-width: 767px) {
            font-size: 20px;
        }

        @media (min-width: 768px) and (max-width: 1023px){
            font-size: 30px;
        }
    }

    p {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 18px;
        font-size: 18px;

        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
`
export const ButtonErrorPage = styled.button`
    background-color: ${gray200};
    color: #FFF;
    width: 220px;
    height: 45px;
    margin-top: 20px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    font-size: 18px;

    @media (max-width: 767px) {
            font-size: 14px;
        }

    &:hover {
        transition: all 0.5s;
        border: 1px solid ${gray200};
        background-color: ${gray100};
        color: #000;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`
