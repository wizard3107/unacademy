import React from 'react'
import styles from "./Login.module.css"
const EmailDrwaer = ({pToggle,setIsRegisterPresent,setPage}) => {
  return (
    <div className={styles.loginBox}>
            <h1>Login</h1>
            <p>
              or{" "}
              <span className={styles.createAccount}>create your account</span>
            </p>
            <form>
              <input
                className={styles.emailDrwerInput}
                placeholder="Email address"
              />

              <div className={styles.loginInfo}>
                <button
                  className={styles.loginBtn}
                  style={{ width: 120, height: 50 }}
                  onClick={() => {
                    pToggle();
                    setIsRegisterPresent(true);
                  }}
                >
                  Login
                </button>
                <div>
                  <button style={{ border: "none", backgroundColor: "white" }}>
                    <h5 onClick={()=>setPage(true)}>Continue with mobile number</h5>
                  </button>
                </div>
              </div>
            </form>
            <p className={styles.bottomP} style={{fontSize:13}}>Having trouble? Please contact <span>help@unacademy.com</span> for further support.</p>
          </div> 
  )
}

export default EmailDrwaer