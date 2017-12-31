import React, { Component } from 'react';

//components
import BookList from '../containers/BookList';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
