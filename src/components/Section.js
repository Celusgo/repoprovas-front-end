import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

export default function Section({type, array, render, teacherId}){

    console.log(teacherId);
    const history = useHistory();

    function redirect(id){
        if(type === 'teachers'){
            return history.push(`/${type}/${teacherId}/${id}`)
        }

        else{
            return history.push(`/${type}/${id}`)
        }
    }
    
    return(
        <Container>
            {type === 'teachers' ? `Disciplina(s) ministrada(s) pelo(a) professor(a) ${render}` : `Disciplinas do ${render} período`}
            <SubjectHolder>
                    {array.map((e) =>
                        <div>
                            <h1 key = {e.id} onClick = {()=> redirect(e.id)}>• {e.name}</h1>
                        </div>
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
    font-weight: 500;
`;

const SubjectHolder = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    font-size:18px;
    font-weight: 300;

    div{
        margin-bottom: 10px;
    }

    h1{
        cursor: pointer;
        
        :hover{
            color: #ffcd00;
        }
    }
`;