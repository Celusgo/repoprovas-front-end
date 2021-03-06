import styled from "styled-components";
import Logo from "../components/Logo";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Select from 'react-select';
import {useHistory} from 'react-router-dom';

export default function Send(){

    const [options, setOptions] = useState([]);
    const [link, setLink] = useState("");
    const [teacher, setTeacher] = useState("");
    const [discipline, setDiscipline] = useState("");
    const [chosenTeacher, setChosenTeacher] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const categories = [
        { name: 'P1', label: 'P1' },
        { name: 'P2', label: 'P2' },
        { name: 'P3', label: 'P3' },
        { name: 'VR', label: 'VR' },
        { name: 'VS', label: 'VS' }
      ];
      
    const month = new Date().getMonth()+1;
    const history = useHistory();

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/send`)
        request.then(response => {
            setOptions(response.data.subjects);
        });
        request.catch((error) => {
            alert(error.response.data);
        });
    }, []);

    function sendData(){
        const body = {
            name: `${year.slice(0, 4)}.${parseInt(year.slice(5, 7) <= 6 ? "1" : "2")}`,
            link,
            category,
            teacher: chosenTeacher,
            subject: discipline
        }
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/send`, body);
        request.then(() => {
            setIsDisabled(false);
            alert("Sua prova foi enviada com sucesso!");
            history.push("/");
        });
        request.catch(() => {
            alert("Ocorreu um erro.");
        });
    }

    return(
        <Container>
            <Logo/>
            <MessageHolder>
                <h1>Preencha o formulário abaixo para nos enviar sua prova de forma totalmente anônima!</h1>
            </MessageHolder>
            <FormHolder>
                <div>
                    <h1>1) Para começar, coloque aqui o link da sua prova (no formato PDF):</h1>
                    <input disabled = {isDisabled} placeholder="Coloque o link do seu pdf aqui..." onChange = {(e)=>setLink(e.target.value)}/>
                </div>
                <div>
                    <h1>2) Agora, nos diga o ano e o mês em que essa prova foi aplicada:</h1>
                    <input disabled = {isDisabled} type="month" max = {`${new Date().getFullYear()}-${month < 10 ? '0' + month : "" + month}`} onChange = {(e)=>setYear(e.target.value)}/>
                </div>


                <ChoicesHolder>
                    <h1>3) Nos diga a qual disciplina, professor e categoria pertence a prova que está sendo enviada:</h1>
                    <div className = "holder">
                        <Select
                        options={options}
                        onChange = {(input) => {setChosenTeacher(""); setDiscipline(input.name) ; setTeacher(options.filter(e => e.name === input.name))}}
                        className = "selectMenu"
                        placeholder = "Escolha a disciplina"
                        getOptionLabel= {(value) => value.name}
                        getOptionValue= {(value) => value.name}
                        disabled = {isDisabled}
                        />

                        {teacher === ""
                        ? ""
                        : <Select
                        options={teacher[0].teacher}
                        onChange = {(input) => setChosenTeacher(input.name)}
                        className = "selectMenu"
                        placeholder = {chosenTeacher === "" ? "Escolha um professor" : chosenTeacher}
                        getOptionLabel= {(value) => value.name}
                        getOptionValue= {(value) => value.name}
                        value={""}
                        disabled = {isDisabled}
                        />}

                        {teacher === ""
                        ? ""
                        : <Select
                        options={categories}
                        onChange = {(input) => setCategory(input.name)}
                        className = "selectMenu"
                        placeholder = "Escolha uma categoria"
                        getOptionLabel= {(value) => value.name}
                        getOptionValue= {(value) => value.name}
                        disabled = {isDisabled}
                        />}
                    </div>

                </ChoicesHolder>
                    {link !== "" && category !== "" && chosenTeacher !== "" && discipline !== "" && year !== ""
                    ?<div className = "buttonHolder">
                        <SendButton onClick = {()=>{setIsDisabled(true); sendData()}}>
                            Enviar prova
                        </SendButton>
                    </div>
                    :""}

            </FormHolder>
        </Container>
        
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:150px auto;
    border-radius:50px;
`;

const MessageHolder = styled.div`
    h1{
        font-family: 'Mitr';
        font-weight:500;
        color:#FFF;
        font-size: 30px;
    }
`;

const FormHolder = styled.div`
    box-sizing:border-box;
    width:50%;
    margin: 50px auto;
    justify-content: left;

    h1{
        font-family:'Mitr';
        font-weight:'500';
        font-size: 20px;
        margin-top:15px;
        margin-bottom:15px;
        color:#FFF;
    }

    input{
        box-sizing:border-box;
        width:100%;
        padding:10px;
        border-radius:10px;
        border: none;
        outline: none;
    }

    .buttonHolder{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top:50px;
    }
`;

const ChoicesHolder = styled.div`

    .selectMenu{
        width:30%;
        border-radius:5px;
    }

    .holder{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const SendButton = styled.button`
    box-sizing: border-box;
    padding:20px;
    color:#FFF;
    background-color: #000;
    font-family:'Mitr';
    font-size:25px;
    border:none;
    outline:none;
    border-radius:10px;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.7);
    cursor: pointer;
`;