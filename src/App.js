import React, { Component } from "react";
import axios from "axios";
// import logo from './logo.svg'
import "./App.css";

import config from "./config.json";

const LINKS_URL = `http://${config.SERVE_HOSTNAME}:${config.SERVE_PORT}/api/links`;

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>Replace me with shortlinks UI</h1>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           <a
//             className='App-link'
//             onClick={() => {
//               fetch(LINKS_URL).then(resp => {
//                 resp.json().then(x => alert(JSON.stringify(x)));
//               })
//             }}
//           >
//             Alert /api/links
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

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
        console.log(this.state.fetchedUrl);
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
          fetchedUrl: data
        });
        console.log(this.state.fetchedUrl.data);
      })
      .catch(err => {
        throw err;
      });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState(
      {
        input: event.target.value
      },
      () => alert(this.state.input)
    );
  };

  render() {
    return (
      <div>
        <h1>Paste the url to shorten here</h1>
        <form onSubmit={this.generateShortenedUrl}>
          <label>
            URL:
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Shorten" />
        </form>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>fullurl</th>
              <th>short</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {
              this.state.fetchedUrl.data.map((item, index) => {
                return (
                  (<td>{index + 1}</td>),
                  (<td>(item.fullurl)</td>),
                  (<td>(item.shorturl)</td>)
                );
              })
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
