import { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export default class Searchbar extends Component {
  state = {
    image: '',
  };

  handleNameChange = e => {
    this.setState({ image: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ image: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleNameChange}
          ></input>
          <button type="submit">
            <BiSearchAlt />
            Найти
          </button>
        </form>
      </div>
    );
  }
}
