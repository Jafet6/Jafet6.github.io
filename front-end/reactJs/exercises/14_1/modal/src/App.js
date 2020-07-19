import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
      clickedSkill: 'JavaScript ES6',
    }
    this.handleClickSkills = this.handleClickSkills.bind(this)
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisableButton: !state.isDisableButton
      }
    ))
  }

  handleClickSkills(event) {
    const { innerHTML } = event.target;
    this.setState({ clickedSkill: innerHTML })
  }

  render() {
    const content = [
      {id: 1, item: 'JavaScript ES6'},
      {id: 2, item: 'ReactJS'},
      {id: 3, item: 'CSS'},
      {id: 4, item: 'HTML'},
    ];
    const obj = {title: "Minhas Habilidades", content: content, timeSeconds: 3000 }
    return (
      <div className='main'>
        <Button content={this.state.clickedSkill}  isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Alert hideComponent={this.changeShowComponent} onClick={this.handleClickSkills} >
            {obj}
          </Alert>}
      </div>
    )
  }
}

export default App;
