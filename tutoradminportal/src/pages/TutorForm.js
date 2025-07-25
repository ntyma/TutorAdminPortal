import React, {useState} from 'react';
import axios from 'axios';

function TutorForm() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phoneNum: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        axios.post('/tutors', {firstName: form.firstName, lastName: form.lastName, email: form.email, phoneNum: form.phoneNum})
      .then((data) => {
        console.log(data)
        setUsers([...users, { ...form, id: Date.now() }]);
        setForm({ firstName: '', lastName: '', email: '', phoneNum: '' });
      })
      .catch((error) => {
        console.error('Error adding user:', error);
        alert('Failed to add user. Please check the server endpoint.');
      });
    };

    return (
    <div style={{ padding: '2rem' }}>
      <h1>New Tutor Form</h1>
      <input
        name="firstName"
        placeholder="First Name"
        value={form.firstNameame}
        onChange={handleChange}
        style={{ margin: '0.5rem' }}
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={form.lastNameame}
        onChange={handleChange}
        style={{ margin: '0.5rem' }}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{ margin: '0.5rem' }}
      />

      <input
        name="phoneNum"
        placeholder="Phone Number"
        value={form.phoneNum}
        onChange={handleChange}
        style={{ margin: '0.5rem' }}
      />

      <button onClick={handleSubmit}>Add User</button>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName} {user.lastName} ({user.email}) ({user.phoneNum})</li>
        ))}
      </ul>
    </div>
    )
}

export default TutorForm;