import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [method, setMethod] = useState('get');
  const [body, setBody] = useState('');
  const [element, setElement] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
    };
    if (method === 'get' || method === 'delete') props.handleApiCall(formData);
    if (method === 'post' || method === 'put') props.handleApiCall(formData, body);
  }

  function handleMethod(e) {
    if (element) element.className = '';
    setElement(e.target);
    setMethod(e.target.id);
    e.target.className = 'active';
  }

  function handleBody(e) {
    setBody(e.target.value);
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
          <span id="get" onClick={(e) => handleMethod(e)}>
            GET
          </span>
          <span id="post" onClick={(e) => handleMethod(e)}>
            POST
          </span>
          <span id="put" onClick={(e) => handleMethod(e)}>
            PUT
          </span>
          <span id="delete" onClick={(e) => handleMethod(e)}>
            DELETE
          </span>
        </label>
        <label>
          {(method === 'post' || method === 'put') && (
            <textarea name="body" id="body" cols="60" rows="15" placeholder="{'key': 'value'}" onChange={handleBody}></textarea>
          )}
        </label>
      </form>
    </>
  );
}

export default Form;
