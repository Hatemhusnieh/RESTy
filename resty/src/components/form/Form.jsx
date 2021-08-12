import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [method, setMethod] = useState('get');

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
    };
    props.handleApiCall(formData);
  }

  // if (method === 'POST') {
  //   // return a from for creating and saving into database
  // }
  // if (method === 'PUT') {
  //   // return a from for updating instance in database
  // }
  // if (method === 'DELETE') {
  //   // delete from database
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={() => setMethod('get')}>
            GET
          </span>
          <span id="post" onClick={() => setMethod('post')}>
            POST
          </span>
          <span id="put" onClick={() => setMethod('put')}>
            PUT
          </span>
          <span id="delete" onClick={() => setMethod('delete')}>
            DELETE
          </span>
        </label>
        <label>
          <textarea name="body" id="body" cols="30" rows="15" placeholder="dssdg"></textarea>
        </label>
      </form>
    </>
  );
}

export default Form;
