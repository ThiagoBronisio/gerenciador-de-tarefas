import styled from "styled-components";

const grenn100 = '#88B257';
const grenn200 = '#4A701C';
const grenn300 = '#284703';
const gray200 = '#434D36';
const gray300 = '#555D4C';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
    background-color: ${grenn100};
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
        background-color: ${grenn200};
        color: #FFF;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export const Head = styled.header`
    width: 100%;
    height: 50px;
    padding: 0 70px;
    background-color: ${grenn100};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        img {
            width: 100%;
            max-width: 150px;
            min-width: 100px;
        }

        ul {
            width: 100%;
            display: flex;
            list-style-type: none;

                li {
                    display: inline-block;
                    margin-right: 20px;

                    a {
                        font-size: 15px;
                        color: #000;
                        text-decoration: none;
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    a:hover {
                        text-decoration: none;
                        color: #000;
                    }
                }
       }


    }
`
