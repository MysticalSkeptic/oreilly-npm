import { useState } from "react";

// controlled forms allow immediate feedback to user. the input fields are linked
// allowing the app to check for proper inputs without first submitting form

export const ControlledFormPage = () => {
    // create constants to allow use of the state in input fields
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [sign, setSign] = useState('');
    // read the input states with props in the input elements
    // value="whatYouWant" onChange={x => setWhatYouWant.(x.target.value)}
    // sets values linked with state values 1:1 - standard controlled form

    return (
        <form>
            <h3>You will fill out this form</h3>
            <div>
                <input type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={n => setName(n.target.value)} />
            </div>
            <div>
                <input type="text" 
                    placeholder="Occupation"
                    value={job}
                    onChange={j => setJob(j.target.value)} />
            </div>
            <div>
                <input type="text" 
                    placeholder="Astrological Sign"
                    value={sign}
                    onChange={s => setSign(s.target.value)} />
            </div>
            <button onClick={b => {
                alert(
                    `
                    You are ${name}
                    Your job is ${job}
                    You are a ${sign}`);
                b.preventDefault();
            }}>Submission</button>
        </form>
    )
}