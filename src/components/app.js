import React, { Component } from 'react';

//components
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
