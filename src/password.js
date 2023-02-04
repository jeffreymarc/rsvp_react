import React, { useState } from "react";
import "./App.css";

const PasswordForm = (props) => {
    const { handleSubmitPassword, invalidPassword } = props;
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSubmitPassword(e, password);
    };

    return (
        <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div class="flex flex-wrap formbold--mx-3">
                        <div class="w-full sm:w-half formbold-px-3">
                            <div class="formbold-mb-5">
                                <label
                                    for="password"
                                    class="formbold-form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    class="formbold-form-input"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            {invalidPassword && (
                                <div
                                    class="formbold-form-label"
                                    style={{ color: "red" }}
                                >
                                    <p>"Sorry invalid password"</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <button class="formbold-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <label htmlFor="password">Password:</label>
    //             <input
    //                 type="password"
    //                 id="password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //             />
    //         </div>
    // 		{invalidPassword && <div style={{ color: "red" }}><p>"Sorry invalid password"</p></div>}
    //         <button type="submit">Submit</button>
    //     </form>
    // );
};

export default PasswordForm;
