import React from "react";

const colors =["navy", "darkred", "purple","darkslategrey", "darkgreen", "black"];
class OverlayBackground extends React.Component{
    showTheStatus(){
        const overlayMessage = document.getElementsByClassName("overlay-message")[0]
        const overlayBackground = document.getElementsByClassName("overlay-background")[0]
        overlayMessage.getElementsByTagName("p")[0].innerHTML=`Status: active <br> All components are operational`
        overlayBackground.style.display = "block";
        overlayMessage.style.display = "block";
    }
    showTheSpeed(){
        const overlayMessage = document.getElementsByClassName("overlay-message")[0]
        const overlayBackground = document.getElementsByClassName("overlay-background")[0]
        let currentSpeed =Math.floor(Math.random() * (500 - 1) + 1)
        overlayMessage.getElementsByTagName("p")[0].style.fontSize="1.1em"
        overlayMessage.getElementsByTagName("p")[0].innerHTML=`Current Speed: ${currentSpeed} years per second`
        overlayBackground.style.display = "block";
        overlayMessage.style.display = "block";
    }

    themeChange(){
        let color = colors.shift();
        colors.push(color);
        document.body.style.backgroundColor=color;
    }
    overlayClose(){
        const overlayBackground = document.getElementsByClassName("overlay-background")[0]
        const overlayMessage = document.getElementsByClassName("overlay-message")[0]
        overlayBackground.style.display = "none";
        overlayMessage.style.display = "none";
        overlayMessage.getElementsByTagName("p")[0].innerHTML="You cannot turn the camera off. <br> Its purpose is to verify you're human."
    }
    powerComp(){
        const overlayBackground = document.getElementsByClassName("overlay-background")[0]
        const overlayMessage = document.getElementsByClassName("overlay-message")[0]
        overlayMessage.getElementsByTagName("p")[0].innerHTML="You are not authorized to perform this action."
        overlayBackground.style.display = "block";
        overlayMessage.style.display = "block";
    }
    sysDetail(){
        const overlayBackground = document.getElementsByClassName("overlay-background")[0]
        const overlayMessage = document.getElementsByClassName("overlay-message")[0]
        overlayMessage.getElementsByTagName("p")[0].style.fontSize="0.7em"
        overlayMessage.getElementsByTagName("p")[0].innerHTML="System: OrionX2 <br> Manufacturer: Terra eX33A <br> Type: II-V <br> Generation: XVI <br> MaxSpeed: 500 years/second"
        overlayBackground.style.display = "block";
        overlayMessage.style.display = "block";
    }
    cameraClose(){
        const overlayBackground = document.getElementsByClassName("overlay-background")[0]
        const overlayMessage = document.getElementsByClassName("overlay-message")[0]
        overlayBackground.style.display = "block";
        overlayMessage.style.display = "block";
        overlayMessage.getElementsByTagName("p")[0].innerHTML="You cannot turn the camera off. <br> Its purpose is to verify you're human."
    }
    render(){
        return <>
        <div className="overlay-background"></div>
        <div className="overlay-message">
        <p>You cannot turn the camera off. <br/>
        Its purpose is to verify you're human.</p>
        <div className="overlay-message-closing" onClick={this.overlayClose}>X</div>
    </div>
    <div className="container-info">
        <p className="showStatus" onClick={this.showTheStatus}>Status</p>
        <p className="showSpeed" onClick={this.showTheSpeed}>Speed</p>
        <p className="sysDetails" onClick={this.sysDetail}>System details</p>
        <p className="themeChanger" onClick={this.themeChange}>Change theme</p>
        <p className="powerComputer" onClick={this.powerComp}>Power on/off</p>
    </div>
    <div className="container-camera" onClick={this.cameraClose}>
        <div className="cameraDiv">
        </div>

    </div></>
    }
}

export default OverlayBackground;