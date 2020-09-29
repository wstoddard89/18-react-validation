import React, { useState } from "react"
import validator from "validator"

/*
- Name - Cannot be blank
- Email - Must be a valid email
- Username - Cannot be blank
- Password - Cannot be blank
- Confirm password - Must match the password
- Website - Must be a valid url
*/

function Form() {
  const [nameText, setNameValid] = useState("")
  const [emailText, setEmailText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailValid, setEmailValid] = useState(true)
  const [userName, setUserNameValid] = useState("")
  const [websiteText, setWebsiteValid] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!validator.isEmail(emailText)) {
      setEmailValid(false)
    } else {
      setEmailValid(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="heading">Profile Form - All fields required</h2>
      <div className="formDiv">
        <label>Name</label>
        <input
          id="email"
          type="text"
          value={nameText}
          className={"example-input" + (emailValid ? "" : "text-red")}
          onChange={(e) => setNameValid(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={emailText}
          className={emailValid ? "" : "text-red"}
          onChange={(e) => setEmailText(e.target.value)}
        />

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="username"
          value={userName}
          className={"example-input" + (emailValid ? "" : "text-red")}
          onChange={(e) => setUserNameValid(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={passwordText}
          onChange={(e) => setPasswordText(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="website"
          value={websiteText}
          onChange={(e) => setWebsiteValid(e.target.value)}
        />
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
