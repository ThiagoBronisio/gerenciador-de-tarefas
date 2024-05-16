import styled from "styled-components";

export const Separator = styled.hr`
    border:1px solid #dcdcdc;
    margin-bottom: 5px;
    box-sizing:border-box;
    width:100%;
    @media (max-width: 767px){
        display: none;
    }
`
export const ContainerConsultarPage = styled.div`
    padding: 45px 60px;
    @media (max-width: 1023px){
        padding: 40px 32px;
    }
`
export const ContainerPagination = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    button {
        padding: 4px 12px;
        border: 1px solid #DDDDDD;
        background-color: #fff;
        border-radius: 1px;
        color: inherit;

        &:hover {
            background-color: #f4f4f4;
            border-color: #f4f4f4;
        }
    }
    .active {
        background-color: #f4f4f4;
        }

    select {
        padding: 2px 10px;
        border: 1px solid #DDDDDD;
    }
`
export const ContainerTitleModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    svg {
        font-size: 25px;
        color: #666666;
        margin-right: 5px;
    }
`
export const TitleModal = styled.h2`
    margin: 5px 0 0 0;
    font-size: 30px;
    font-family: "Nunito Sans", sans-serif;
    color: #666666;
`
export const SeparatorModal = styled.hr`
    border:1px solid #dcdcdc;
    margin: 0px 0 16px 0;
    box-sizing:border-box;
    width:100%;
`
export const ContainerInputModal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    label {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        margin-bottom: 5px;
    }

    input {
        border: 1px solid #ced4da;
        border-radius: 3px;
        height: 40px;
        font-weight: 400;
        line-height: 1.5;
        background-color: #fff;
        padding: 15px 12px 15px 12px;
    }

    textarea {
        border: 1px solid #ced4da;
        border-radius: 3px;
        height: 80px;
        font-weight: 400;
        line-height: 1.5;
        background-color: #fff;
        padding: 12px 0px 0px 12px;
    }

    span {
        color: red;
        font-size: 16px;
    }
`
export const ContainerSelectedModal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    label {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        margin-bottom: 5px;
    }

    select {
        border: 1px solid #ced4da;
        border-radius: 3px;
        height: 40px;
        padding: 0 10px;
    }

    span {
        color: red;
        font-size: 16px;
    }
`
export const ButtonModal = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 255, 0.7);
    background-color: rgba(0, 0, 255, 0.7);
    color: #FFF;
    font-weight: bold;
    margin-bottom: 10px;
    

    &:hover {
        border: 1px solid rgba(0, 0, 255, 0.6);
        background-color: rgba(0, 0, 255, 0.6);
        transition: 0.7s;
    }
`
