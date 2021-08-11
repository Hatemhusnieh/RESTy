import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
  const mock = {
    'type': `mock ${props.data.data.method} data`,
    'cache-control': 'public, max-age=86400, s-maxage=86400',
    'content-type': 'application/json; charset=utf-8',
  };

  return (
    <section>
      <h2>Headers</h2>
      <JSONPretty data={props.data.headers ? props.data.headers : mock}></JSONPretty>
      <h2>Results</h2>
      <JSONPretty data={props.data.data.results}></JSONPretty>
    </section>
  );
}

export default Results;
