import React from 'react';
import './UserSearch.css';

function UserSearch() {
    const users = [
        { id: 1, name: 'Alice Johnson', role: 'admin' },
        { id: 2, name: 'Bob Smith', role: 'Project Manager' },
        { id: 3, name: 'Charlie Brown', role: 'Designer' },
        { id: 4, name: 'David Wilson', role: 'Frontend Developer' },
        { id: 5, name: 'Eva Adams', role: 'Backend Developer' },
        { id: 6, name: 'Frank Taylor', role: 'DevOps Engineer' },
        { id: 7, name: 'Grace Lee', role: 'Marketing' },
    ];

    const [searchTerm, setSearchTerm] = React.useState('');
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='search-card'>
            <h2>User Search</h2>
            <input
                type='text'
                placeholder='Search by name or role...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='search-input'
            />
            <ul className='user-list'>
                {filteredUsers.length === 0 ? (
                    <li className='no-result'>No users found.</li>
                ) : (
                    filteredUsers.map(user => (
                        <li key={user.id} className='user-item'>
                            <div className='avatar-circle'>
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className='user-info'>
                                <h3 className='user-name'>{user.name}</h3>
                                <p className='user-role'> {user.role}</p>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default UserSearch;