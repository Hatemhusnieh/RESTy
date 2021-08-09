import React from 'react';
import { useState } from 'react';
import './app.scss';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Form from './components/form/Form.jsx';
import Results from './components/results/Results.jsx';
import { BeatLoader } from 'react-spinners';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  function callApi(formData, resData) {
    setData(resData);
    setRequestParams(formData);
  }
  function handleLoad(load) {
    setLoading(load);
  }
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} handleLoading={handleLoad} />
      {loading ? <BeatLoader loading /> : <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
