import styled from "styled-components";

export const ContainerStatusTarefa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 140px;
    margin-bottom: 10px;
    width: 100%;

    @media (max-width: 1024px){
        padding: 0 60px;
        margin-bottom: 15px;
    }

    @media (max-width: 767px){
        flex-direction: column;
        padding: 0 16px;
    }
`
export const StatusSucess = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid rgba(0, 200, 0, 0.2);
    border-radius: 4px;
    width: 100%;
    max-width: 320px;
    height: 100px;
    margin-right: 16px;
    background-color: rgba(0, 200, 0, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 767px){
        max-width: 100%;
        margin-bottom: 16px;
        margin-right: 0;
        height: 60px;
    }

    div {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;

        span {
            font-weight: 400;
            font-size: 30px;

            @media (max-width: 767px){
                font-size: 22px;
            }
        }

        p {
            margin: 5px 0;
            font-size: 18px;

            @media (max-width: 767px){
                font-size: 16px;
                margin: 0;
            }
        }
    }
`
export const StatusSecondary = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solidrgba(169, 169, 169, 0.5);;
    border-radius: 4px;
    width: 100%;
    max-width: 320px;
    height: 100px;
    margin-right: 16px;
    background-color: rgba(169, 169, 169, 0.5);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 767px){
        max-width: 100%;
        margin-bottom: 16px;
        margin-right: 0;
        height: 60px;
    }
    
    div {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;

        span {
        font-weight: 400;
        font-size: 30px;

        @media (max-width: 767px){
                font-size: 22px;
            }
        }

        p {
            margin: 5px 0;
            font-size: 18px;

            @media (max-width: 767px){
                font-size: 16px;
                margin: 0;
            }
        }
    }
`
export const StatusPrimary = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid rgba(0, 0, 255, 0.1);
    border-radius: 4px;
    width: 100%;
    max-width: 320px;
    height: 100px;
    background-color: rgba(0, 0, 255, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 767px){
        max-width: 100%;
        margin-bottom: 16px;
        margin-right: 0;
        height: 60px;
    }

    div {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;

        span {
        font-weight: 400;
        font-size: 30px;

        @media (max-width: 767px){
                font-size: 22px;
            }
        }

        p {
            margin: 5px 0;
            font-size: 18px;
            ;

            @media (max-width: 767px){
                font-size: 16px;
                margin: 0;
            }
        }
    }
`