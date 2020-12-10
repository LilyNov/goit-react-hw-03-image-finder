import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

//  componentDidMount() {
//     this.setState({ loading: true });
//     fetch(
//       'https://pixabay.com/api/?q=cat&page=1&key=19029120-3d5d472043b9b4c189da88885&image_type=photo&orientation=horizontal&per_page=12',
//     )
//       .then(response => response.json())
//       .then(image => this.setState({ image }))
//       .finally(() => this.setState({ loading: false }));
//   }
