import React, { useEffect, useState } from 'react';

export default function Form(props) {
  const [form, setForm] = useState({text: ''});

  const handleChange = (event) => setForm((prev) => ({...prev, [event.target.name]: event.target.value,}));
  const handleSubmit = () => props.addPost(form.text);
  const handleSave = () => props.savePost(form.text);

  useEffect(() => props?.data && setForm((prev) => ({...prev, 'text': props.data.text})), [props.data]);

  return (
    <form>
      <textarea className="input-form" name="text" value={form.text} onChange={handleChange} placeholder="Введите текст"/>
      <div className="form-btn-container">
        {!props.data && <button className="create-btn btn" type="button" onClick={handleSubmit}>Опубликовать</button>}
        {props.data && <button className="save-btn btn" type="button" onClick={handleSave}>Сохранить</button>}
        <button className="close-btn btn" type="button" onClick={props.closePost}>X</button>
      </div>
    </form>
   );
}