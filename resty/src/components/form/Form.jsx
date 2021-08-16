import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [method, setMethod] = useState('GET');
  const [element, setElement] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      props.handleLoading(true);
      const res = await fetch(`${e.target.url.value}`);
      const data = await res.json();
      const formData = {
        method: method,
        url: e.target.url.value,
      };
      props.handleLoading(false);
      props.handleApiCall(formData, data.results);
    } catch (e) {
      console.error(e);
    }
  }

  function handleChange(e) {
    if (element) element.className = '';
    setElement(e.target);
    setMethod(e.target.id.toUpperCase());
    e.target.className = 'active';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleChange}>
            GET
          </span>
          <span id="post" onClick={handleChange}>
            POST
          </span>
          <span id="put" onClick={handleChange}>
            PUT
          </span>
          <span id="delete" onClick={handleChange}>
            DELETE
          </span>
        </label>

        {(method.toLocaleLowerCase() === 'post' || method.toLocaleLowerCase() === 'put') && (
          <textarea name="body" id="body" cols="60" rows="15" placeholder="{'key': 'value'}"></textarea>
        )}
      </form>
    </>
  );
}

export default Form;
