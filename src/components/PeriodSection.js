import styled from 'styled-components';

export default function PeriodSection({type, array}){

    console.log(array);
    
    return(
        <Container>
            {type}
            <SubjectHolder>
                {array.map((e) =>
                <h1>{e.name}</h1>
                )}
            </SubjectHolder>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-family: 'Mitr';
    color:#FFF;
    font-size: 30px;
`;

const SubjectHolder = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;