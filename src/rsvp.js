// https://formbold.com/templates/rsvp-form

import React, { useState } from "react";
import "./App.css";

const RSVPForm = (props) => {
    const { allowedGuests, handleSubmit } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("-");
    const [dietaryRequirements, setDietaryRequirements] = useState("");
    const [songRequests, setSongRequests] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState(1);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: fullName,
            email: email,
            phone: phoneNumber,
            diet: dietaryRequirements,
            song: songRequests,
            rsvp: numberOfGuests,
        };
        handleSubmit(e, data);
        // Implement form submission logic here
        console.log(
            fullName,
            email,
            phoneNumber,
            dietaryRequirements,
            songRequests,
            numberOfGuests
        );
    };

    return (
        <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
                <form onSubmit={handleFormSubmit}>
                    <div class="formbold-mb-5">
                        <label
                            for="full-name"
                            class="formbold-form-label-required"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            placeholder="Full Name"
                            class="formbold-form-input"
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div class="formbold-mb-5">
                        <label for="email" class="formbold-form-label-required">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            class="formbold-form-input"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div class="formbold-mb-5">
                        <label for="phone" class="formbold-form-label">
                            Phone number (Optional)
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            class="formbold-form-input"
                        />
                    </div>
                    <div class="formbold-mb-5">
                        <label for="diet" class="formbold-form-label">
                            Dietary Requirements (Optional)
                        </label>
                        <input
                            type="text"
                            name="diet"
                            id="diet"
                            onChange={(e) =>
                                setDietaryRequirements(e.target.value)
                            }
                            class="formbold-form-input"
                        />
                    </div>
                    <div class="formbold-mb-5">
                        <label for="song" class="formbold-form-label">
                            Song requests (Optional)
                        </label>
                        <input
                            type="text"
                            name="song"
                            id="song"
                            onChange={(e) => setSongRequests(e.target.value)}
                            class="formbold-form-input"
                        />
                    </div>
                    <div class="formbold-mb-5">
                        <label for="guest" class="formbold-form-label-required">
                            How many guest are you bringing? ({allowedGuests}{" "}
                            allowed)
                        </label>
                        <input
                            type="number"
                            name="guest"
                            id="guest"
                            min={1}
                            placeholder="1"
                            max={allowedGuests}
                            class="formbold-form-input"
                            onChange={(e) => setNumberOfGuests(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <button class="formbold-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RSVPForm;
