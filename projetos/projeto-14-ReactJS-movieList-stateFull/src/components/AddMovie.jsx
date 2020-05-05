import React from 'react';

const initialState = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: 0,
  imagePath: '',
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  inputFunction = (htmlFor, label, name) => {
    return (
      <label htmlFor={htmlFor}>
        {label}
        <input
          type="text"
          id={htmlFor}
          name={name}
          onChange={this.handleChange}
          value={this.state[name]}
        />
      </label>
    );
  }

  genre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genero">
        Gênero
        <select
          type="text"
          id="genero"
          name="genre"
          onChange={this.handleChangeGenre}
          value={genre}
        >
          <option text="Ação" value="action">Ação</option>
          <option text="Comédia" value="comedy">Comédia</option>
          <option text="Suspense" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.inputFunction('titulo', 'Título', 'title')}
          {this.inputFunction('subtitulo', 'Subtítulo', 'subtitle')}
          {this.inputFunction('imagem', 'Imagem', 'imagePath')}
          {this.inputFunction('sinopse', 'Sinopse', 'storyline')}
          {this.inputFunction('avaliacao', 'Avaliação', 'rating')}
          {this.genre()}
          <button
            type="button"
            value="Adicionar filme"
            onClick={this.handleClick}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
