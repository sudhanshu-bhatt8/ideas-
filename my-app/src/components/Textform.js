import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter your text here')

    function handleupclick() {
        console.log("upper was clicked " + text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("The letter has been converted into uppercase ")
    }
    function handleonchange(event) {
        console.log("on change")
        setText(event.target.value)
    }
    function handleupclickup() {
        let Newtext = text.toLowerCase()
        setText(Newtext)
        props.showalert("The letter has been converted into lowercase ")
    }
    // const [mystyle, setstyle] = useState({
    //     backgroundColor: 'white', color: 'black'
    // })
    // const [btn, btntext] = useState("dark mode")
    // function modechange() {
    //     if (mystyle.color === 'black') {
    //         btntext("light mode ")
    //         setstyle({
    //             backgroundColor: 'black', color: 'white'

    //         })
    //     }

    //     else {
    //         btntext("dark mode")
    //         setstyle({
    //             backgroundColor: 'white', color: 'black'

    //         })
    //     }
    // }
    return (
        <div>
            <>
                <div>
                <h3 className='my-2'>Press this button to convert the inserted letter into upper case  </h3>
                    {/* <h1>{props.heading}</h1> */}
                    <div className="mb-3">
                        <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(62, 63, 63)', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" id="exampleFormControlTextarea1" onChange={handleonchange} value={text} rows="8"></textarea><br />
                        <button className="btn btn-primary my-2 mx-1" onClick={handleupclick}> convert into uppercase </button>
                        <button className="btn btn-primary my-2 mx-1" onClick={handleupclickup}> convert into lowercase </button>
                        {/* <button className="btn btn-primary mx-1" onClick={modechange}>{btn} </button> button to change the mode of the text area  */}
                    </div>
                </div>
                <div className="container my-2">
                    <h1>your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters </p>
                    <p>{0.004 * text.split(" ").length} this much time is required to read the statement </p>
                    <h2>preview</h2>
                    <p>{text}</p>
                </div>
            </>
        </div>
    )
}
