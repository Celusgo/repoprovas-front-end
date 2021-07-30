import styled from "styled-components";

export default function TeacherSection({type, array}){
    return(
        <Container>
            {type}
        </Container>
    )
}

const Container = styled.div`
    margin-top: 50px;
    font-family: 'Mitr';
    color:#FFF;
    font-size: 30px;
`;