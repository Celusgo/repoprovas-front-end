import styled from 'styled-components';

export default function PeriodSection({type, array}){
    
    return(
        <Container>
            {type}
            <SubjectHolder>
                {array.map((e) =>
                <h1>• {e.name}</h1>
                )}
            </SubjectHolder>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 25px;
    font-family: 'Mitr';
    color:#FFF;
    font-size: 30px;
`;

const SubjectHolder = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    h1{
        cursor: pointer;
        margin-bottom: 10px;
        
        :hover{
            color: #ffcd00;
        }
    }
`;