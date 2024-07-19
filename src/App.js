import { useState } from 'react';

//Import Components
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      id: 1,
      name: "Programação",
      colorPrimary: "#57C278",
      colorSecondary: "#D9F7E9",
    },
    {
      id: 2,
      name: "Front-End",
      colorPrimary: "#82CFFA",
      colorSecondary: "#E8F8FF",
    },
    {
      id: 3,
      name: "Data Science",
      colorPrimary: "#A6D157",
      colorSecondary: "#F0F8E2",
    },
    {
      id: 4,
      name: "Devops",
      colorPrimary: "#E06B69",
      colorSecondary: "#FDE7E8",
    },
    {
      id: 5,
      name: "Ux e Design",
      colorPrimary: "#DB6EBF",
      colorSecondary: "#FAE9F5",
    },
    {
      id: 6,
      name: "Mobile",
      colorPrimary: "#FFBA05",
      colorSecondary: "#FFF5D9",
    },
    {
      id: 7,
      name: "Inovação e Gestão",
      colorPrimary: "#FF8A29",
      colorSecondary: "#FFEEDF",
    },
    {
      id: 8,
      name: "Full-stack",
      colorPrimary: "#f0422b",
      colorSecondary: "#f08e81",
    }
  ]

  const colabsBase = [
    {
      name: 'JULIANA AMOASEI',
      post: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'DANIEL ARTINE',
      post: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'GUILHERME LIMA',
      post: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'PAULO SILVEIRA',
      post: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'JULIANA AMOASEI',
      post: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'DANIEL ARTINE',
      post: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'GUILHERME LIMA',
      post: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'PAULO SILVEIRA',
      post: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'JULIANA AMOASEI',
      post: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'DANIEL ARTINE',
      post: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'GUILHERME LIMA',
      post: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'PAULO SILVEIRA',
      post: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'JULIANA AMOASEI',
      post: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'DANIEL ARTINE',
      post: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'GUILHERME LIMA',
      post: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'PAULO SILVEIRA',
      post: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'JULIANA AMOASEI',
      post: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'DANIEL ARTINE',
      post: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'GUILHERME LIMA',
      post: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'PAULO SILVEIRA',
      post: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'JULIANA AMOASEI',
      post: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'DANIEL ARTINE',
      post: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'GUILHERME LIMA',
      post: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'PAULO SILVEIRA',
      post: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [colabs, setColabs] = useState(colabsBase)

  const addColab = (colab) => {
    console.log(colab)
    setColabs([...colabs, colab])
  }

  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map((team) => team.name)} addColab={(colab) => addColab(colab)} />
      <section className='teams'>
        <h1>Minha organização</h1>
        {teams.map((team) => {
          return <Team
            key={team.id}
            name={team.name}
            colorPrimary={team.colorPrimary}
            colorSecondary={team.colorSecondary}
            colabs={colabs.filter((colab) => colab.team === team.name)}
          />
        })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
