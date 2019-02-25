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
    registerAnswer: {}
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



  }
  winXPHandler = () => {
    axios.get(/* link do registro*/).then(response => {
      this.setState({ registerAnswer: response.data }) //Recebendo o objeto onde está o registro
    }
    );

    let summ = 0; //Variável de soma das notas
    const register = Object.entries(this.registerAnswer);
    const appl = register.get(1); //Pegando o array ["aplications"]
    const actv = appl.get(1);//Pegando o aray ["activities"]
    actv.forEach(e => { //Para objeto neste array, é necessário olhar cada uma das notas atribuidas
      e.questions.forEach(el => {
        summ = summ + el.grade;
      })
    });

    this.setState({xp: this.state.xp + summ})
    upLevelHandler();

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
