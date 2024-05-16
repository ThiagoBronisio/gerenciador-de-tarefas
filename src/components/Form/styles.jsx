import styled from "styled-components";

export const ContainerFormConsultar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
`
export const FormConsultar = styled.form`
        width: 100%;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;

        @media (min-width: 768px) and (max-width: 1023px){
            display: block;
            padding: 0 100px;
        }

        @media (max-width: 767px){
                display: block;
        }
        
`
export const ContainerFormInputDate = styled.div`
        width: 100%;
        display: flex;

        @media (max-width: 1023px){
                justify-content: center;
        }

        @media (max-width: 767px){
                flex-direction: column;
                margin-bottom: 6px;
        }

        label {
            font-size: 14px;
            font-weight: bold;
            margin-right: 10px;
            margin-bottom: 0px !important;

                @media (max-width: 1023px){
                    font-size: 12px;
                    margin-bottom: 10px !important;
                    width: 100%;
                }
                @media (max-width: 767px){
                    margin-right: 0px;
                    margin-bottom: 10px !important;
                }                 

            input {
                max-width: 100%;
                width: 100%;
                height: 45px;
                border-radius: 3px;
                border: solid 1px #333333;
                padding: 0 8px;
                margin-bottom: 0px !important;

                @media (max-width: 1023px){
                    margin-right: 0;
                    height: 35px;
                }    
                
                @media (max-width: 767px){
                    margin-right: 0;
                }    
            }
            &:last-child{
            margin-right: 0px !important;
        }
        }

        
            :nth-child(1){
                margin-bottom: 5px;
            }
            
        
`
export const ContainerFormInputName = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;

    input {
        margin-left: 0;
        max-width: 85%;
        width: 100%;
        height: 45px;
        border-radius: 3px;
        border: solid 1px #333333;
        padding: 0 12px;
        margin-bottom: 0px !important;

        @media (max-width: 1023px){
                width: 100%;
                max-width: 100%;
                margin-left: 0;
                height: 35px;
        }

        @media (max-width: 767px){
                width: 100%;
        }    
    }

    svg {
        right: 30px;
        position: relative;
        bottom: 12px;
        @media (max-width: 1023px){
            bottom: 7px;
            right: 10px;
            position: absolute;
        }

    }
`
export const ContainerFormButtonPostGet = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;

    @media (max-width: 1023px){
            margin-top: 12px;
    }

    @media (max-width: 767px){
            flex-direction: column;
    } 
`
export const ContainerButtonCadastrar = styled.div`
    display: flex;
    align-items: end;
    width: 100%;
    max-width: 200px ;
    margin-right: 10px;

    @media (max-width: 1023px){
        max-width: 100%;
        justify-content: end;
    }
    @media (max-width: 767px){
        margin-right: 0;
    }

    button {
        width: 100%;
        height: 45px;
        border: 1px solid #198754;
        background-color: #198754;
        color: #FFF;
        font-weight: 400;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        

        @media (max-width: 1023px){
            width: 100%;
            height: 38px;
        }

        @media (max-width: 767px){
            margin-bottom: 8px;
    }
    }
    :hover {
            background-color: rgba(0, 150, 0, 0.9);
            border: 1px solid rgba(0, 150, 0, 0.9);
            transition: 0.7s;
        }
`
export const ContainerButtonConsultar = styled.div`
    display: flex;
    align-items: end;
    width: 100%;
    max-width: 200px;

    @media (max-width: 1023px){
        max-width: 100%;
        justify-content: start;
        margin-bottom: 0px !important;
    }
    @media (max-width: 767px){
        margin-right: 0;
    }

    button {
        width: 100%;
        height: 45px;
        border: 1px solid rgba(0, 0, 255, 0.7);
        background-color: rgba(0, 0, 255, 0.7);
        color: #FFF;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-weight: 400;

        @media (max-width: 1023px){
            width: 100%;
            height: 38px;
        }
    }

    :hover {
            border: 1px solid rgba(0, 0, 255, 0.6);
            background-color: rgba(0, 0, 255, 0.6);
            transition: 0.7s;
        }
`