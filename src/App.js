import { useState } from 'react';

//Import Components
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [colabs, setColabs] = useState([])

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

  const addColab = (colab) => {
    console.log(colab)
    setColabs([...colabs, colab])
  }

  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map((team) => team.name)} addColab={(colab) => addColab(colab)} />
      {teams.map((team) => {
        return <Team
          key={team.id}
          name={team.name}
          colorPrimary={team.colorPrimary}
          colorSecondary={team.colorSecondary}
          colabs={colabs.filter((colab) => colab.team === team.name)}
        />
      })}
      <Footer/>



    </div>
  );
}

export default App;
