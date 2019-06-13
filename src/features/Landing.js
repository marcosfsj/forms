import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/FormikForm">Formik Form</Link>
          </li>
          <li>
            <Link to="/PureReactForm">Pure React Form</Link>
          </li>
          <li>
            <Link to="/SongPlayer">Song Player</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
        </ul>
      </div>
    );
  }
}
