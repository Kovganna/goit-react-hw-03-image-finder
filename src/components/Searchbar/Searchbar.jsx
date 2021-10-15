import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
class Searchbar extends Component {
  state = {
    searchQ: '',
  };

  handleQueryChange = e => {
    this.setState({ searchQ: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQ.trim() === '') {
      toast.error('Search images and photos', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(this.state.searchQ);
    this.setState({ searchQ: '' });
  };

  render() {
    return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.SearchForm__button}>
              <span className={s.SearchForm__buttonLabel}>Search</span>
            </button>

            <input
              className={s.SearchForm__input}
              type="text"
              autocomplete="off"
              value={this.state.searchQ}
              onChange={this.handleQueryChange}
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
