import { useState } from "react"
import ContactForm from "./components/contact-form";
import Table from "./components/Table";




const App = () => {
  const [contacts, setContacts] = useState([]);
  const getData = (contact) => {
    setContacts([].concat(contacts, contact))
  }
  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getData={getData} />
      <Table contacts={contacts} />
    </div>
  )
}

export default App;