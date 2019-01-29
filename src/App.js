import React, { Component } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ComponentLevel from './components/Level/Level';
import axios from 'axios';

class App extends Component {
  state = {
    level: 1,
    levelxp: 15,
    xp: 0,
    progresspercent: 0,
    questions: []
  }

  upLevelHandler = () => {
    let lvl = this.state.level;
    let xplvl = this.state.levelxp;
    if (lvl === xplvl) {
      lvl++;
      xplvl = this.state.xp + 5 * lvl; // A cada level, será calculado dinamicamente a quantidade de xps necessárias para o próximo level
    }
    this.setState({ level: lvl, xp: 0, progresspercent: 0, levelxp: xplvl })
  }

  componentDidMount() {
    axios.get(/* link do registro*/)
      .then(response => {
        this.setState({ questions: response.data }) //Recebendo o objeto onde está o registro
      }
      );


  }
  winXPHandler = () => {
    const question = this.state.questions.map(questions => {
      return {
        ...questions
      };
    }
    );
    question.forEach(function (grade, e) {
      this.setState({ xp: this.state.xp + (grade) / 10 }) 
      //Somando xp para cada nota. Quantidade de xp é a quantidade que o aluno já tinha de xp mais cada nota dele dividido por 10
    }
    )
  }

  render() {
    return ( //Falta ainda arrumar os componentes e referenciar as funções
      <div className="App">
        <ComponentLevel level={this.state.level} />
        <ProgressBar currenttxp={this.state.xp} levelxp={this.state.levelxp} />
      </div>
    );
  }
}

export default App;
