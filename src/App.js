import React, { useEffect, useState } from "react";
import PasswordForm from "./password";
import RSVPForm from "./rsvp";
import axios from "axios";
import ThankYouMessage from "./thanks";

function App() {
    const [showPasswordForm, setShowPasswordForm] = useState(true);
    const [displayError, setDisplayError] = useState(false);
    const [allowedGuests, setAllowedGuests] = useState(0);
    const [formDone, setFormDone] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmitPassword = async (e, pass) => {
        const pw = pass.toUpperCase();
        e.preventDefault();

        // Get allowed guests
        try {
            setIsFetching(true);
            const response = await axios.get(
                "https://rsvp-9xe4.onrender.com/guests?" + pw
            );
            setAllowedGuests(response.data.allowed);
            setDisplayError(false);
            setShowPasswordForm(false);
            setIsFetching(false);
        } catch (error) {
            setIsFetching(false);
            setDisplayError(true);
        }
    };

    const handleRsvpFormSubmit = async (e, data) => {
        e.preventDefault();
        await axios.post(`https://rsvp-9xe4.onrender.com/rsvp`, { ...data });
        setFormDone(true);
    };
    return (
        <div>
            {showPasswordForm && !allowedGuests && (
                <PasswordForm
                    class="formbold-form-wrapper"
                    handleSubmitPassword={handleSubmitPassword}
                    invalidPassword={displayError}
                    onSubmitButton={isFetching}
                ></PasswordForm>
            )}
            {!showPasswordForm && allowedGuests && !formDone && (
                <RSVPForm
                    allowedGuests={allowedGuests}
                    handleSubmit={handleRsvpFormSubmit}
                ></RSVPForm>
            )}
            {formDone && (
                <div class="parent">
                    <ThankYouMessage />{" "}
                </div>
            )}
        </div>
    );
}

export default App;
