import React, { useState } from 'react'

//Import do CSS
import './Form.css'

//components
import Input from '../Input/Input.js'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'

const Form = (props) => {

    const [name, setName] = useState("")
    const [post, setPost] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
    const [teamName, setTeamName] = useState("")
    const [teamColor, setTeamColor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColab({
            name,
            post,
            image,
            team
        })

        setImage("")
        setName("")
        setPost("")
        setTeam("")

    }
    const handleSubmitTeam = (e) => {
        e.preventDefault()
        props.createTeam({
            name: teamName,
            color: teamColor
        })

        setTeamName("")
        setTeamColor("")
       
    }

    return (
        <section className='formulario-container'>
            <form  className="formulario" onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <Input
                    value={name}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    value={post}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    onChange={(e) => setPost(e.target.value)}
                />
                <Input
                    value={image}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    onChange={(e) => setImage(e.target.value)}
                />
                <ListaSuspensa 
                    value={team}   
                    obrigatorio={true} 
                    itens={props.teamsName} 
                    label="Time" 
                    onChange={(e) => setTeam(e.target.value)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form className="formulario" onSubmit={handleSubmitTeam}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <Input
                    value={teamName}
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <Input
                    value={teamColor}
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    onChange={(e) => setTeamColor(e.target.value)}
                    type="color"
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Form