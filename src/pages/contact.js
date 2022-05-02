import {useState} from "react";

const Contact = () => {

    const initialContactData = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const initialStatusInfo = {
        infoMsg: "",
        type: ""
    }

    const [contactData, setContactData] = useState(initialContactData)
    const [statusInfo, setStatusInfo] = useState(initialStatusInfo)
    const [isUserARobot, setIsUserARobot] = useState(true)

    const handleChange = (e) => {
        setContactData( prevState => ({
            ... prevState,
            [e.target.name]: e.target.value}
        ))
    }

    const handleCheckBox = (e) => {
        setIsUserARobot(!e.target.checked)
    }

    const checkFields = () => {
        let fieldsToAmend = [];
        Object.entries(contactData).forEach( ([key, value]) => {
            if (key !== 'phone' && value.trim() === ''){
                fieldsToAmend.push(key)
            }
        })
        return fieldsToAmend;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fieldsErrors = checkFields()
        if (fieldsErrors.length === 0 ){
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    name: contactData.name,
                    email: contactData.email,
                    phone: contactData.phone,
                    message: contactData.message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            const { apiError } = await res.json();
            if (apiError) {
                console.log(apiError);
                setStatusInfo({
                    infoMsg: "There was an error, please try again later",
                    type: "error"
                })
            }else{
                setStatusInfo({
                    infoMsg: "Thank you for your email, we will be in touch soon!",
                    type: "success"
                })
            }
        }else{
            setStatusInfo({
                    infoMsg: "The following fields cannot be empty: " + fieldsErrors.map(item => " " + item),
                    type: "error"
            })
        }

    };

    return (
        <>
            <div className="container">
                <h1 className="accent-title page-title">Contact Us</h1>
                <p>If you would like to contact us please use the form below.</p>
                <form>
                    <input
                        type="text"
                        name="name"
                        className="form-field"
                        aria-label="Your name and surname"
                        placeholder="Your name and surname"
                        onChange={handleChange}
                        required={true}
                    />
                    <input
                        type="email"
                        name="email"
                        className="form-field"
                        aria-label="Your email"
                        placeholder="Your email"
                        onChange={handleChange}
                        required={true}
                    />
                    <input
                        type="text"
                        name="phone"
                        className="form-field"
                        aria-label="Your phone (optional)"
                        placeholder="Your phone (optional)"
                        onChange={handleChange}
                        required={false}
                    />
                    <textarea
                        name="message"
                        className="form-field"
                        aria-label="Your message"
                        placeholder="Your message"
                        onChange={handleChange}
                        required={true}
                    />
                    {isUserARobot
                        ?   <div>
                                <span>To proceed, please <b>tick the box </b></span>
                                <input
                                    type="checkbox"
                                    className="is-user-a-robot"
                                    name="is-user-a-robot"
                                    onChange={handleCheckBox}
                                />
                                <span> to confirm that you are not a 🤖</span>
                            </div>
                        :   <button
                                type={"submit"}
                                onClick={handleSubmit}
                                className={"submit-button"}
                            >Send Message</button>
                    }
                </form>
                {statusInfo.type !== "" &&
                    <div className={"status-info"}>
                        <span>{statusInfo.type === 'error' ? "😞" : "✔️" }</span>
                        <span> {statusInfo.infoMsg}</span>
                    </div>
                }
            </div>
            <style jsx>{`

              .container{
                margin: 0 auto;
                max-width: 680px;
              }
              h1{
                font-size: 70px;
              }
              form{
                width: 100%;
              }
              .form-field{
                display: inline-block;
                width: 100%;
                border: 1px solid #dddddd;
                padding: 12px;
                font-family: 'Inter', sans-serif;
                margin: 10px 0;
                resize: vertical;
              }
              .form-field:focus{
                  border: 1px solid #000000;
                  outline: none;
              }
              .submit-button{
                background-color:#000;
                border: 0;
                color: #FFFFFF;
                cursor: pointer;
                text-transform: uppercase;
                width: 100%;
                padding: 20px;
                font-weight: bold;
              }
              .submit-button:hover{
                opacity: 0.8;
              }
              .status-info{
                padding: 20px;
                margin: 10px 0;
                border: 3px solid ${statusInfo.type === "error" ? '#d72700' : '#008000'}
              }
              @media (max-width: 768px) {  
                h1{
                  font-size: 50px;
                }
              }
            `}</style>
        </>
    )
}
export default Contact;