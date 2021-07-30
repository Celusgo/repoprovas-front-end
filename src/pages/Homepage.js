import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';
import Logo from '../components/Logo';
import { colourStyles } from '../styles/SelectStyle';
import {useHistory} from 'react-router-dom';


export default function Homepage(){
    const [choice, setChoice] = useState("");
    const [options, setOptions] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        const request = axios.get('http://localhost:4000/inicio')
        request.then(response => {
            setOptions(response.data);
        });
        request.catch((error) => {
            alert(error.response.data);
        });
    }, []);

    function eventHandler(e){
        if(e === null) return;
        history.push(`/${choice}/${e.id}`);
    }

    return(
        <Container>
            <Logo/>
            <ButtonContainer>
                <Button onClick = {()=> setChoice("disciplina")}>
                    Procurar por disciplina
                </Button>
                <Button onClick = {()=> setChoice("professor")}>
                    Procurar por professor
                </Button>
            </ButtonContainer>
            {choice === "" 
            ? ""
            : <Select
            options={choice === "professor" ? options.teachers : choice === "disciplina" ? options.subjects : ""}
            onChange = {(input) => eventHandler(input)}
            className = "selectMenu"
            placeholder = {choice === "professor" ? "Selecione um professor" : choice === "disciplina" ? "Selecione uma disciplina" : ""}
            isClearable = {true}
            getOptionLabel= {(value) => value.name}
            getOptionValue= {(value) => value.name}
            styles = {colourStyles}
            />}
        </Container>
    )
};

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:150px auto;
    border-radius:50px;
    .selectMenu{
        width:25%;
        margin-top:50px;
        background-color: #000;

        div{
            background-color:#000;
        }
    }
`;

const ButtonContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 45%;
    border-radius:50px;
    background-color: #000;
    color:#FFF;
    font-family:'Mitr';
    border:none;
    outline:none;
    font-size:30px;
`;
