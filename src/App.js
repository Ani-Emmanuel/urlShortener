import React, { Component } from "react";
import axios from "axios";
// import logo from './logo.svg'
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import config from "./config.json";

const LINKS_URL = `http://${config.SERVE_HOSTNAME}:${config.SERVE_PORT}/api/links`;

class App extends Component {
  state = {
    fetchedUrl: [],
    input: ""
  };

  componentDidMount() {
    this.getAllUrl();
  }

  generateShortenedUrl = event => {
    event.preventDefault();
    axios
      .post(LINKS_URL, { fullurl: this.state.input })
      .then(data => {
        this.setState({
          fetchedUrl: data
        });
        this.setState({
          input: ""
        });
        this.getAllUrl();
      })
      .catch(err => {
        throw err;
      });
  };

  getAllUrl = () => {
    axios
      .get(LINKS_URL)
      .then(data => {
        this.setState({
          fetchedUrl: data.data
        });
        console.log(this.state.fetchedUrl);
      })
      .catch(err => {
        throw err;
      });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };

  getOneUrl = (value) =>{
    axios
      .get(`${LINKS_URL}/${value}`, {
        headers: { "content-Access-Control-Allow-Origin": "*" }
      })
      .catch(err => {
        throw err;
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Paste the url to shorten here</h1>
        <form onSubmit={this.generateShortenedUrl}>
          <label>
            <span>URL:</span>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn btn-primary" type="submit" value="Shorten" />
        </form>

        <table
          id="table"
          className="table table-dark table-hover table-responsive table-bordered table-striped"
        >
          <thead>
            <tr>
              <th>s/n</th>
              <th>FullUrl</th>
              <th>ShortUrl</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fetchedUrl.length
              ? this.state.fetchedUrl.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.fullurl}</td>
                      {/* <Router>
                        <Link to="/"> */}
                          <td onClick={this.getOneUrl.bind(this, item.shorturl)}>{item.shorturl}</td>
                        {/* </Link>
                      </Router> */}
                    </tr>
                  );
                })
              : <tr></tr>}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
