import React from 'react';

const FriendForm = ({ cNameHandler, cAgeHandler, cEmailHandler}) => {
    return (
        <div className="friendform-wrapper">
            <h4>Create Buddy</h4>
            <form className="form">
                <div className="field">
                    <label
                        htmlFor="lfname">Name:</label><br />
                    <input
                        type="text"                        
                        onChange={(event) => cNameHandler(event)}
                        id="lfname"
                        name="fname"
                        required
                    />
                </div>
                <div className="field">
                    <label
                        htmlFor="lfage">Age:</label><br/>
                    <input
                        type="number"
                        onChange={(event) => cAgeHandler(event)}
                        id="lfage"
                        name="fage"
                        required
                    />
                </div>
                <div className="field">
                    <label
                        htmlFor="lfmail">Email:</label><br/>
                    <input
                        type="email"
                        onChange={(event) => cEmailHandler(event)}
                        id="lfmail"
                        name="fmail"
                        required
                    />
                </div>
                <button>Create</button>
            </form>
        </div>
    );
}

export default FriendForm;