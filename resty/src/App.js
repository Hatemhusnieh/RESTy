import React from 'react';
import axios from 'axios';
import './app.scss';
import { useState, useEffect, useReducer } from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Form from './components/form/Form.jsx';
import Results from './components/results/Results.jsx';
import History from './components/history/History';
import { BeatLoader } from 'react-spinners';
import { test } from '../src/logic/logic';
const { initialState, historyReducer, historyAction } = test;

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (requestParams.url) {
      if (requestBody) {
        const data = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
        setData(data);
        setLoading(false);
        dispatch(historyAction(requestParams));
      } else {
        const data = await axios[requestParams.method](requestParams.url);
        setData(data);
        setLoading(false);
        dispatch(historyAction(requestParams));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams]);

  async function callApi(formData, requestBody) {
    setLoading(true);
    if (formData.url) {
      setRequestBody(requestBody);
      setRequestParams(formData);
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
      dispatch(historyAction(formData));
      setLoading(false);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method?.toUpperCase()}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {state.history.length ? <History history={state.history} /> : null}
      {loading ? <BeatLoader loading /> : data && <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
