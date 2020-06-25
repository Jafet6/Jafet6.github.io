import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { filtersAction } from '../../actions/filtersAction';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        category: '',
        difficulty: '',
        type: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { filter } = this.state;
    const { name, value } = event.target;
    this.setState({
      filter: {
        ...filter,
        [name]: value,
      },
    });
  }

  render() {
    const { categories, filterDispatch } = this.props;
    const {
      category, type, difficulty, filter,
    } = this.state;
    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        <form>
          <label>
            Catergory
            <select name="category" value={category} onChange={this.handleChange}>
              <option value="">Any Category</option>
              {categories.map(({ id, name }) => (<option value={id} key={id}>{name}</option>))}
            </select>
          </label>
          <label>
            Type
            <select name="type" value={type} onChange={this.handleChange}>
              <option value="">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </label>
          <label>
            Difficulty
            <select name="difficulty" value={difficulty} onChange={this.handleChange}>
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </form>
        <Link to="/">
          <button type="button" onClick={() => filterDispatch(filter)}>
            Aplicar Filtro
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.apiCategoriesReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  filterDispatch: (filterObj) => dispatch(filtersAction(filterObj)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
