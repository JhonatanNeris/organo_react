import React, { useState } from 'react'

//Import do CSS
import './Form.css'

//components
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'

const Form = (props) => {

    const [name, setName] = useState("")
    const [post, setPost] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColab({
            name,
            post,
            image,
            team
        })

        // setImage("")
        // setName("")
        // setPost("")
        // setTeam("")

    }

    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto
                    value={name}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                />
                <CampoTexto
                    value={post}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    onChange={(e) => setPost(e.target.value)}
                />
                <CampoTexto
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
        </section>
    )
}

export default Form