import React from 'react';
import './app.scss';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Form from './components/form/Form.jsx';
import Results from './components/results/Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    this.setState({ data, requestParams });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        {this.state.data && <Results data={this.state.data} />}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
