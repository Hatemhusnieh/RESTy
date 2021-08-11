import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './app.scss';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Form from './components/form/Form.jsx';
import Results from './components/results/Results.jsx';
import History from './components/history/History';
import { BeatLoader } from 'react-spinners';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (requestParams.url) {
      const data = await axios[requestParams.method](requestParams.url);
      setData(data);
      setLoading(false);
    }
  }, [requestParams]);

  async function callApi(formData) {
    setLoading(true);
    if (formData.url) {
      setRequestParams(formData);
      setHistory([...history, formData]);
    } else {
      const data = {
        count: 2,
        method: formData.method,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setData({ data });
      setRequestParams(formData);
      setHistory([...history, formData]);
      setLoading(false);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method?.toUpperCase()}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {history.length ? <History history={history} /> : null}
      {loading ? <BeatLoader loading /> : data && <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
