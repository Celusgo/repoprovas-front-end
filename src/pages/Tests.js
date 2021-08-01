import styled from "styled-components";
import Logo from "../components/Logo";

export default function Tests(){
    return(
        <Container>
            <Logo/>
            <div>Olá</div>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:150px auto;
`;