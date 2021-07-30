import styled from "styled-components";
import Logo from "../components/Logo";

export default function Send(){
    return(
        <Container>
            <Logo/>
            WHAT IF I CANT FORGET YOU
        </Container>
        
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:150px auto;
    border-radius:50px;
`;