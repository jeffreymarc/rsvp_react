import React, { useState } from "react";
import "./App.css";
import spinner from "./loading.gif";

const PasswordForm = (props) => {
    const { handleSubmitPassword, invalidPassword, onSubmitButton } = props;
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSubmitPassword(e, password);
    };

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap formbold--mx-3">
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5">
                                <label
                                    htmlFor="password"
                                    className="formbold-form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="formbold-form-input"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            {invalidPassword && (
                                <div
                                    className="formbold-form-label"
                                    style={{ color: "red" }}
                                >
                                    <p>"Sorry invalid password"</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <button
                            className="formbold-btn"
                            disabled={onSubmitButton}
                        >
                            Submit{" "}
                        </button>
                        {onSubmitButton && (
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

export default PasswordForm;
