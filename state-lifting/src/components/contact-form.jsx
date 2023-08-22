import { useState } from "react";



const CONTACT_FORM_INIT = {
    name: '',
    email: '',
    group: '',
}
const ContactForm = ({ getData }) => {

    const [values, setValues] = useState({ ...CONTACT_FORM_INIT })
    const { name, email, group } = values;
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
            <div>
                <label htmlFor="group">Group</label>
                <select name="group" id="group" value={group} onChange={handleChange}>
                    <option value="">Select Group</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
            </div>
            <input type="submit" value="Create New Contact" />
        </form>
    )
}

export default ContactForm;