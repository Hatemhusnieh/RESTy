import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
  return (
    <section>
      <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
    </section>
  );
}

export default Results;
