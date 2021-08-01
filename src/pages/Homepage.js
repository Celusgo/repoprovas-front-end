import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';
import Logo from '../components/Logo';
import { colourStyles } from '../styles/SelectStyle';
import Section from '../components/Section';


export default function Homepage(){
    const [choice, setChoice] = useState("");
    const [options, setOptions] = useState([]);
    const [render, setRender] = useState("");
    const [teacherId, setTeacherId] = useState("");

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
        setRender(e.name);
        setTeacherId(e.id);
    }

    return(
        <>
            <Container>
                <Logo/>
                <ButtonContainer>
                    <Button onClick = {()=> {setChoice("disciplina"); setRender("")}}>
                        Procurar por disciplina
                    </Button>
                    <Button onClick = {()=> {setChoice("professor"); setRender("")}}>
                        Procurar por professor
                    </Button>
                </ButtonContainer>


                {choice === "" 
                ? ""
                : <Select
                options={choice === "professor" ? options.teacherSubjects : choice === "disciplina" ? options.periods : ""}
                onChange = {(input) => eventHandler(input)}
                className = "selectMenu"
                placeholder = {choice === "professor" ? "Selecione um professor" : choice === "disciplina" ? "Selecione o período" : ""}
                isClearable = {true}
                getOptionLabel= {(value) => `=> ${value.name} ${choice === "disciplina" ? "período" : ""}`}
                getOptionValue= {(value) => value.name}
                styles = {colourStyles}
                value = {""}
                />}
            </Container>
            
                {choice === "professor" && render !== ""
                ? <Section type = "teachers" render = {render} teacherId = {teacherId} array = {options.teacherSubjects.filter(e => e.name === render)[0].subject}/>
                :choice === "disciplina" && render !== ""
                ? <Section type = "disciplines" render = {render} array = {options.periods.filter(e => e.name === render)[0].subject}/>
                : ""}
        </>
    )
};

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:150px auto 0 auto;

    .selectMenu{
        width:25%;
        margin-top:50px;
        background-color: #000;
        border:2px solid white;
        border-radius:5px;
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
    box-sizing:border-box;
    padding:10px;
    border-radius:10px;
    background-color: #000;
    color:#FFF;
    font-family:'Mitr';
    border:2px solid white;
    outline:none;
    font-size:20px;
    cursor: pointer;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.7);

        :hover{
            color: #ffcd00;
            border:2px solid #ffcd00;
            box-shadow: 0 0 1em rgba(255, 205, 0, 0.7);
        }
`;
