import styled from 'styled-components';
import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { useHistory } from 'react-router';

export default function Header(){
    const history = useHistory();

    return(
        <>
        <Container>

            <div onClick = {() => history.push("/")}>
                <AiFillHome/>
                <h1>Início</h1>
            </div>

            <div onClick = {() => history.push("/enviar")}>
                <ImFolderUpload />
                <h1>Envie sua prova</h1>
            </div>

            <div onClick = {() => history.push("/sobre")}>
                <AiFillQuestionCircle/>
                <h1>Sobre</h1>
            </div>

        </Container>
        </>
        
    )
};

const Container = styled.div`
    width: 100%;
    height:100px;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.7);
    background-color:#000000;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 80px;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    
    div{
        display: flex;
        align-items: center;
        font-family:'Mitr';
        font-size:30px;
        font-weight: 500;
        color:#fff;
        cursor: pointer;

            h1{
                margin-left: 10px;
            }

            :hover{
                color: #ffcd00;
            }
    }
`;