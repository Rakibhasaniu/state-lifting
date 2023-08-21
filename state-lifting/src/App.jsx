import { useState } from "react"

const CONTACT_FORM_INIT = {
  name: '',
  email: '',
}
const ContactForm = ({ getData }) => {

  const [values, setValues] = useState({ ...CONTACT_FORM_INIT })
  const { name, email } = values;
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(values);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={email} onChange={handleChange} />
      </div>
      <input type="submit" value="Create New Contact" />
    </form>
  )
}


const App = () => {
  const [contacts, setContacts] = useState([]);
  const getData = (contact) => {
    setContacts([].concat(contacts, contact))
  }
  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getData={getData} />
    </div>
  )
}

export default App;