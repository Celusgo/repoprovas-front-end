import styled from "styled-components";
import Logo from "../components/Logo";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios';

export default function Tests(){
    const [options, setOptions] = useState([]);
    const [setArray, setSetArray] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const request = axios.get(`http://localhost:4000/disciplines/${id}`);
        request.then((response) => {
            setOptions(response.data);
            setSetArray([...new Set(response.data.map(e => e.name))]);
        });
    }, [id]);

    return(
        <Container>
            <Logo/>
            {setArray.length === 0 ? "" : <Information>Provas da disciplina {options[0].subject.name}</Information>}
            {setArray.length === 0
            ? <Information>Nada por aqui ainda :(</Information>
            : setArray.map((e, i) => {
                return <div key = {i} className = "testsHolder">
                            <Title>{e}</Title>
                            {options.map((o, u) => {
                                return e === o.name
                                ? <div key = {u} className = "testInformation"><a href={o.link} target="_blank" rel = "noreferrer">{`• ${o.category.name} de ${o.subject.name} do(a) professor(a) ${o.teacher.name}`}</a></div>
                                : ""
                            })}
                        </div>;
            })}
            
            
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:150px auto;

    .testsHolder{
        display:flex;
        flex-direction:column;
        align-items: center;
        margin-bottom: 30px;
        justify-content: left;

        .testInformation{
            color:white;
            font-family:'Mitr';
            font-weight:300;
            margin-bottom:10px;

            :hover{
                color: #ffcd00;
            }
        }
    }
`;

const Title = styled.h1`
    font-family: 'Mitr';
    font-weight: 400;
    font-size: 20px;
    color: white;
    margin-bottom:10px;
`;

const Information = styled.h1`
    font-family: 'Mitr';
    font-size: 40px;
    font-weight: 500;
    color:white;
    margin-bottom:30px;
`;