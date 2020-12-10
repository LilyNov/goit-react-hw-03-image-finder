import { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=19029120-3d5d472043b9b4c189da88885&image_type=photo&orientation=horizontal&per_page=12',
    )
      .then(response => response.json())
      .then(console.log);
  }

  render() {
    return <div>Image</div>;
  }
}
