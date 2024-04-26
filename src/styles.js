import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Head = styled.header`
    width: 100%;
    height: 50px;
    padding: 0 70px;
    background-color: #88B257;
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
