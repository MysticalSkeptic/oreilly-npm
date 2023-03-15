import React from "react";
// unlike other pages, importing here must be explicit to use React.createRef()

export const UncontrolledFormPage = () => {
    // for easy coding, reusing the form inputs...
    // for uncrontol, create references to inputs with react createRef function
    const nameInput = React.createRef();
    const jobInput = React.createRef();
    const signInput = React.createRef();
    // link to the corresponding input via ref prop in the inputs

    return (
        <form>
            <h3>Give me information!!</h3>
            <div>
                <input ref={nameInput}
                    type="text" 
                    placeholder="Name" />
            </div>
            <div>
                <input ref={jobInput}
                    type="text" 
                    placeholder="Occupation" />
            </div>
            <div>
                <input ref={signInput}
                    type="text" 
                    placeholder="Astrological Sign" />
            </div>
            <button
                onClick={b => {
                    alert(`
                    Your name is ${nameInput.current.value}
                    Your job is ${jobInput.current.value}
                    Your sign is ${signInput.current.value}`);
                    b.preventDefault();
                }}
            >Submit Chaos Form</button>
        </form>
    )
}