import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';


class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = event => {
    const { createBook } = this.props;
    event.preventDefault();
    createBook(this.state);
    this.setState({ title: '', category: '' });
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    return (
      <form>
        <div>
          <div>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div>
          <select id="category" name="category" value="">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save Book</button>
      </form>
    );
  }
};

BooksForm.prototypes = {
  createBook: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {dispatch(createBook(bool)); }
})

export default connect(null, mapDispatchToProps)(BooksForm);
