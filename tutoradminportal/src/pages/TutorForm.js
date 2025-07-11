import React, {useState} from 'react';

function TutorForm() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setUsers([...users, { ...form, id: Date.now() }]);
        setForm({ firstName: '', lastName: '', email: '' });
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
      <button onClick={handleSubmit}>Add User</button>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName} {user.lastName} ({user.email})</li>
        ))}
      </ul>
    </div>
    )
}

export default TutorForm;