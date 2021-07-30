import styled from 'styled-components';
import React, { useState } from 'react'
import Select from 'react-select'



export default function Homepage(){
    const[value, setValue] = useState([{name: "Marcelo"}, {name: "Laís"}]);
    const [nome, setNome] = useState("");
    console.log(nome);

    function eventHandler(e){
        if(e === null) return;
        setNome(e.name);
    }

    return(
        <Container>
            <Select
            options={value}
            onChange = {(input) => eventHandler(input)}
            className = "selectMenu"
            placeholder = "Selecione uma opção"
            isClearable = {true}
            getOptionLabel= {(value) => value.name}
            getOptionValue= {(value) => value.name}
            />
        </Container>
    )
};

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin:150px auto;
    border-radius:50px;
    .selectMenu{
        width:20%;
    }
`;
