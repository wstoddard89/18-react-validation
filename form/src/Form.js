import React, { useState } from "react"
import validator from "validator"

/*
          ERRORS THAT MUST BE SHOWN WHEN INPUTS ARE INVALID
- Name - Cannot be blank
- Email - Must be a valid email
- Username - Cannot be blank
- Password - Cannot be blank
- Confirm password - Must match the password
- Website - Must be a valid url
*/

function Form() {

  // State that is the value of each input
  const [nameText, setName] = useState("")
  const [emailText, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [website, setWebsite] = useState("")


  // State that will indicate whether the input is valid or not
  const [nameValid, setNameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true)
  const [userNameValid, setUserNameValid] = useState(true)
  const [websiteValid, setWebsiteValid] = useState(true)


  // State that will be starting label and placeholder for each input if valid
  const [nameLabel, setNameLabel] = useState('Name')
  const [emailLabel, setEmailLabel] = useState('Email')
  const [passwordLabel, setPasswordLabel] = useState('Password')
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState('Confirm Password')
  const [userNameLabel, setUserNameLabel] = useState('Username')
  const [websiteLabel, setWebsiteLabel] = useState('Website')

  // State that starts as heading, and will display as "thank you" if all inputs are valid
  const [profile, setProfile] = useState("Profile Form - All fields required");

  // State that starts as true, and when changed to false will hide the form
  const [errors, setErrors] = useState(true)

  // Tracks how many inputs are valid
  let correctInputs = 0

  // Function that will check each input for validity when form is submitted
  function handleSubmit(e) {
    e.preventDefault()

    // If statements that check if input is valid or not
    if (validator.isEmpty(nameText)) {
      setNameLabel("Name - Cannot be blank")
      setNameValid(false)
    } else {
      setNameValid(true)
      setNameLabel('Name')
      setName(nameText)
      correctInputs += 1
      inputsCorrect()
    }

    if (!validator.isEmail(emailText)) {
      setEmailLabel("Email - Please enter email")
      setEmailValid(false)
      setEmail("")
    } else {
      setEmailValid(true)
      setEmailLabel('Email')
      setEmail(emailText)
      correctInputs += 1
      inputsCorrect()
    }

    if (validator.isEmpty(userName)) {
      setUserNameLabel("Username - Cannot be blank")
      setUserNameValid(false)
    } else {
      setUserName(userName)
      setUserNameValid(true)
      setUserNameLabel('Username')
      correctInputs += 1
      inputsCorrect()
    }

    if (validator.isEmpty(password)) {
      setPasswordLabel("Password - Cannot be blank")
      setPasswordValid(false)
    } else {
      setPassword(password)
      setPasswordValid(true)
      setPasswordLabel('Password')
      correctInputs += 1
      inputsCorrect()
    }

    if (validator.isEmpty(confirmPassword)) {
      setConfirmPasswordLabel("Confirm Password - Cannot be blank")
      setConfirmPasswordValid(false)
    } else {
      setConfirmPassword(confirmPassword)
      setConfirmPasswordValid(true)
      setConfirmPasswordLabel('Confirm Password')
      correctInputs += 1
      inputsCorrect()
    }

    // Will check if "confirm password" strictly matches "password"
    if (confirmPassword !== password) {
      setConfirmPasswordValid(false)
      setConfirmPasswordLabel('Confirm Password - Must match password')
    
    }

     if (!validator.isURL(website)) {
       setWebsite("")
       setWebsiteLabel("Website - Must be a valid url")
       setWebsiteValid(false)
     } else {
       setWebsite(website)
       setWebsiteValid(true)
       setWebsiteLabel('website')
       correctInputs += 1
       inputsCorrect()
     }
     
     // Function that hides form and changes heading if all inputs are valid
     function inputsCorrect() {
      if (correctInputs === 6) {
        setErrors(false);
        setProfile("Thank you");
      }
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="heading">{profile}</h2>
      <div className={errors ? "" : "displayNone"}>
      <div id="formDiv">

        <label htmlFor="name" className={(nameValid ? "" : "textRed")}>{nameLabel}</label>
        <input
          id="name"
          type="text"
          placeholder={nameLabel}
          value={nameText}
          className={(nameValid ? "" : "borderRed")}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor="email" className={(emailValid ? "" : "textRed")}>{emailLabel}</label>
        <input
          id="email"
          type="email"
          placeholder={emailLabel}
          value={emailText}
          className={emailValid ? "" : "borderRed"}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="username" className={(userNameValid ? "" : "textRed")}>{userNameLabel}</label>
        <input
          id="text"
          type="username"
          placeholder={userNameLabel}
          value={userName}
          className={(userNameValid ? "" : "borderRed")}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="password" className={(passwordValid ? "" : "textRed")}>{passwordLabel}</label>
        <input
          id="password"
          type="password"
          placeholder={passwordLabel}
          value={password}
          className={passwordValid ? "" : "borderRed"}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword" className={(confirmPasswordValid ? "" : "textRed")}>{confirmPasswordLabel}</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder={confirmPasswordLabel}
          value={confirmPassword}
          className={confirmPasswordValid ? "" : "borderRed"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label htmlFor="website" className={(websiteValid ? "" : "textRed")}>{websiteLabel}</label>
        <input
          id="website"
          type="website"
          placeholder={websiteLabel}
          value={website}
          className={websiteValid ? "" : "borderRed"}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </div>
      </div>
    </form>
    
  )
}

export default Form
