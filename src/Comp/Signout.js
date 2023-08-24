import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signout() {
    const handleSignout = () => {
        // Implement your sign-out logic here
        console.log("User signed out");
        alert("signed out");
    };

    return (
        <div className="container mt-5 text-center justify-text text-warning fs-3">
            <h2>Sign Out</h2>
            <p>Are you sure you want to sign out?</p>
            <form>
                <button type="button" className="btn btn-danger" onClick={handleSignout}>
                    Sign Out
                </button>

               
            </form>
        </div>
    );
}

export default Signout;
