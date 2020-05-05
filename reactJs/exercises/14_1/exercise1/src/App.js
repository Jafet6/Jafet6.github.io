import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';
import Pictures from './Pictures';
import PicturesList from './PicturesList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Minha Lista de Componentes',
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  render() {
    return (
      <div className='main'>
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value='Título Show' />
          <Pictures 
            src={"https://course.betrybe.com/images/logo_white.png"}
            alt={"Logo da Trybe"}
            height={200}
            legenda={"Lista feita na Trybe"}>
          </Pictures>
          <PicturesList>
            <img src="https://cdn.pixabay.com/photo/2019/03/10/16/38/vorarlberg-4046557_1280.jpg" width="200px"/>
            <img src="https://cdn.pixabay.com/photo/2015/03/26/10/01/snowboarder-690779_1280.jpg" width="200px" />
          </PicturesList>
        </MyList>
      </div>
    )
  }
}
export default App;
