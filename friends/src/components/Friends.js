import React from 'react';

// define sticky tag background colors
const colors = ["#d5e9fc", "#dde3fc", "#dfc275", "#3daba0", "#fd25b0", "#82b3ff", "#f16304", "3de5e59", "#5cc1f2"];

const Friends = ({ friendsList, setEdit, deleteFriend }) => {
    return (
        <div className="friends-wrapper">
            {
                friendsList.map(friend => {
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const style = { backgroundColor: `${color}` }
                    return (
                        <div
                            style={style}
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