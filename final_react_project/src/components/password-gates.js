import React from 'react'

class passwordGates extends React.Component{
    clicken(){
        const gateLeft =document.getElementsByClassName("gate-left")[0]
        const gateRight =document.getElementsByClassName("gate-right")[0]
        const formPass =document.getElementsByClassName("enter__form")[0]
        let passwordInput =document.getElementsByClassName("password-input")[0].value
        if(passwordInput == "spaceship" | passwordInput == "Spaceship" | passwordInput =="Spaceship"){
            gateLeft.classList.add("animationGateMove")
            gateRight.classList.add("animationGateMove")
            formPass.style.display="none"
    
        }

    }
    render(){
    return <> 
    <div className="gate-left"></div>
    <div className="gate-right"></div>
    <form className="enter__form">
        <input className="password-input" type="text" placeholder="Password is spaceship" />
        <button className="password-button" type="button" onClick={this.clicken}>⮝</button>
    </form></>
}
}
export default passwordGates;