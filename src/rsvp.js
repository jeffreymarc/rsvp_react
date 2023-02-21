// https://formbold.com/templates/rsvp-form

import React, { useState } from "react";
import "./App.css";
import spinner from "./loading.gif";

const RSVPForm = (props) => {
    const { allowedGuests, handleSubmit } = props;
    const [fullNames, setFullNames] = useState({});
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("-");
    const [dietaryRequirements, setDietaryRequirements] = useState("");
    const [songRequests, setSongRequests] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [isGoing, setIsGoing] = useState("yes");
    const [isFetching, setIsFetching] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsFetching(true);
        const data = {
            going: isGoing === "yes",
            name: fullNames,
            email: email,
            phone: phoneNumber,
            diet: dietaryRequirements,
            song: songRequests,
            rsvp: isGoing === "yes" ? numberOfGuests : 0,
        };
        await handleSubmit(e, data);
        setIsFetching(false);
    };

    const handleOptionChange = (e) => {
        setIsGoing(e.target.value);
    };

    const handleAddFullNames = (n, name) => {
        let names = {};
        names[n] = name;
        const combined = { ...fullNames, ...names };

        setFullNames(combined);
    };

    const getFullNameField = () => {
        let fields = [];
        for (let i = 0; i < numberOfGuests; i++) {
            const placeholder = "Guest " + (i + 1) + " full name";
            fields.push(
                <div className="formbold-mb-5" key={i}>
                    <input
                        type="text"
                        name={"full-name" + i}
                        id="full-name"
                        placeholder={placeholder}
                        className="formbold-form-input"
                        onChange={(e) => handleAddFullNames(i, e.target.value)}
                        required
                    />
                </div>
            );
        }
        return fields;
    };

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex formbold-mb-5">
                        <label className="formbold-form-label"></label>
                        <div className="flex">
                            <input
                                type="radio"
                                name="isGoing"
                                id="radioButton1"
                                className="formbold-radio"
                                value={"yes"}
                                onChange={handleOptionChange}
                                checked={isGoing === "yes"}
                            />
                            <label
                                htmlFor="radioButton1"
                                className="formbold-radio-label"
                            >
                                I'm going
                            </label>
                        </div>
                        <div className="flex">
                            <input
                                type="radio"
                                name="isGoing"
                                id="radioButton2"
                                className="formbold-radio"
                                value={"no"}
                                onChange={handleOptionChange}
                                checked={isGoing !== "yes"}
                            />
                            <label
                                htmlFor="radioButton2"
                                className="formbold-radio-label"
                            >
                                I'm not going
                            </label>
                        </div>
                    </div>
                    {allowedGuests > 1 && isGoing === "yes" && (
                        <div className="formbold-mb-5">
                            <label
                                htmlFor="guest"
                                className="formbold-form-label-required"
                            >
                                How many people are coming including yourself?
                            </label>
                            <input
                                type="number"
                                name="guest"
                                id="guest"
                                min={1}
                                placeholder="1"
                                max={allowedGuests}
                                className="formbold-form-input"
                                onChange={(e) =>
                                    setNumberOfGuests(e.target.value)
                                }
                                required
                            />
                        </div>
                    )}
                    {numberOfGuests > 1 && (
                        <label className="formbold-form-label-required">
                            Full Names
                        </label>
                    )}
                    {numberOfGuests <= 1 && (
                        <label className="formbold-form-label-required">
                            Full Name
                        </label>
                    )}
                    {getFullNameField().map((f) => f)}

                    <div className="formbold-mb-5">
                        {allowedGuests > 1 && (
                            <label
                                htmlFor="email"
                                className="formbold-form-label-required"
                            >
                                Email (Only one email is required)
                            </label>
                        )}
                        {allowedGuests <= 1 && (
                            <label
                                htmlFor="email"
                                className="formbold-form-label-required"
                            >
                                Email
                            </label>
                        )}
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            className="formbold-form-input"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    {isGoing === "yes" && (
                        <div className="formbold-mb-5">
                            <label
                                htmlFor="phone"
                                className="formbold-form-label"
                            >
                                Phone number (Optional)
                            </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="formbold-form-input"
                            />
                        </div>
                    )}
                    {isGoing === "yes" && (
                        <div className="formbold-mb-5">
                            <label
                                htmlFor="diet"
                                className="formbold-form-label-required"
                            >
                                Dietary Requirements
                            </label>
                            <input
                                type="text"
                                name="diet"
                                id="diet"
                                onChange={(e) =>
                                    setDietaryRequirements(e.target.value)
                                }
                                className="formbold-form-input"
                                required
                                placeholder="Any allergies or food intolerances?"
                            />
                        </div>
                    )}
                    {isGoing === "yes" && (
                        <div className="formbold-mb-5">
                            <label
                                htmlFor="song"
                                className="formbold-form-label"
                            >
                                Song requests (Optional)
                            </label>
                            <input
                                type="text"
                                name="song"
                                id="song"
                                onChange={(e) =>
                                    setSongRequests(e.target.value)
                                }
                                className="formbold-form-input"
                            />
                        </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <button className="formbold-btn" disabled={isFetching}>
                            Submit{" "}
                        </button>
                        {isFetching && (
                            <img
                                src={spinner}
                                alt="Loading..."
                                width={"50px"}
                                style={{ marginRight: "10px" }}
                            />
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RSVPForm;
