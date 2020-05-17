import React, { Component } from "react";
import styles from '../../services/style.module.css'

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({
      query,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.ChangeQuery(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: "",
    });
  };

  render() {
    const query = this.state.query;
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={styles.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={query}
            />
          </form>
        </header>
      </>
    );
  }
}

// Searchbar.propTypes = {
//   handleOnChange: PropTypes.func.isRequired,
// };

export default Searchbar;
