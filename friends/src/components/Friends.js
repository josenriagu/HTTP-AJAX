import React from 'react';

const Friends = ({ friendsList, setEdit, deleteFriend }) => {
    return (
        <div className="friends-wrapper">
            {
                friendsList.map(friend => {
                    return (
                        <div
                            key={friend.id}
                            className="friend"
                            draggable
                        >
                            <h3>Buddy {friend.id}</h3>
                            <p>Name: <span>{friend.name}</span></p>
                            <p>Age: <span>{friend.age}</span></p>
                            <p>Email:<br></br><span>{friend.email}</span></p>
                            <div className="action-button">
                                <button
                                    type="button"
                                    onClick={() => setEdit(friend.id)}
                                >
                                    Edit
                                    </button>
                                <button
                                    type="button"
                                    onClick={() => deleteFriend(friend.id)}
                                >
                                    Delete
                                    </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Friends