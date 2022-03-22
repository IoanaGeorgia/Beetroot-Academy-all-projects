import React from 'react'


class MainTriad extends React.Component{

    displayCommandsList(){
        const commandsButton =document.getElementsByClassName("commands-display__main-button")[0];
        const commandsList =document.getElementsByClassName("commands-display__list")[0];
        commandsButton.style.display ="none";
        commandsList.style.display="flex";
    }
    historyShow(){
        const history =document.getElementsByClassName("commands-display__history")[0];
        const commandsListOpt =document.getElementsByClassName("commands-display__list-options")[0];
        commandsListOpt.style.display="none";
        history.style.display="block";

    }
    historyEng(){
        const historyEnglish =document.getElementsByClassName("history-output")[0]
        historyEnglish.style.display="block";
        historyEnglish.style.fontFamily ="Franklin Gothic Medium";
        historyEnglish.style.fontSize="1.1em";

    }
    orionLang(){
        const historyEnglish =document.getElementsByClassName("history-output")[0]
        historyEnglish.style.fontFamily ="Animoto";
        historyEnglish.style.fontSize="0.6em";
        historyEnglish.style.display="block";
    }
    sagLang(){
        const historyEnglish =document.getElementsByClassName("history-output")[0]
        historyEnglish.style.fontFamily ="Kabasan";
        historyEnglish.style.fontSize="1.2em";
        historyEnglish.style.display="block";
    }
    mailShow(){
        const mail =document.getElementsByClassName("commands-display__mails")[0];
        const commandsListOpt =document.getElementsByClassName("commands-display__list-options")[0];
        commandsListOpt.style.display="none";
        mail.style.display="flex";
    }
    returnCommand(){
        const mail =document.getElementsByClassName("commands-display__mails")[0];
        const history =document.getElementsByClassName("commands-display__history")[0];
        const commandsListOpt =document.getElementsByClassName("commands-display__list-options")[0];
        const historyEnglish =document.getElementsByClassName("history-output")[0]
        historyEnglish.style.display="none";
        commandsListOpt.style.display="block";
        history.style.display="none";
        mail.style.display="none";
        const letterDear =document.getElementsByClassName("letterDear-output")[0];
        letterDear.style.display="none"
        const letterWho =document.getElementsByClassName("letterWho-output")[0];
        letterWho.style.display="none"
        const map =document.getElementsByClassName("earthMap")[0];
        map.style.display="none"
        const mapDiv =document.getElementsByClassName("commands-display__map")[0]
        mapDiv.style.display="none"
        const fuelTank =document.getElementsByClassName("fuelTank")[0];
        fuelTank.style.display="none"
        const fuelTankDiv =document.getElementsByClassName("commands-display__fuel")[0];
        fuelTankDiv.style.display="none"
        const specimenShow =document.getElementsByClassName("commands-display__specimen")[0];
        specimenShow.style.display="none"
        const specimenEye =document.getElementsByClassName("specimen_eye")[0];
        specimenEye.style.display="none"
        const specimenButterfly =document.getElementsByClassName("specimen_butterfly")[0];
        specimenButterfly.style.display="none"
        const specimenPlant =document.getElementsByClassName("specimen_plant")[0];
        specimenPlant.style.display="none"
        const mary =document.getElementsByClassName("scientists_mary")[0];
        mary.style.display="none"
        const aaron =document.getElementsByClassName("scientists_aaron")[0];
        aaron.style.display="none"
        const scientistsShow =document.getElementsByClassName("commands-display__scientists")[0];
        scientistsShow.style.display="none"        
        const fuelDone =document.getElementsByClassName("fuelDone")[0]
        const fuelKey= document.getElementsByClassName("fuelKey")[0]
        fuelDone.style.display="none"
        fuelKey.style.display="none"
        const fuelKeyDis =document.getElementsByClassName("commands-display__fuel-key")[0]
        const fuelDis =document.getElementsByClassName("commands-display__fuel")[0]
        fuelKeyDis.style.display="none"
        fuelDis.style.display="none"
        
    }
    letterDear(){
        const letterDear =document.getElementsByClassName("letterDear-output")[0];
        letterDear.style.display="block"
        const letterWho =document.getElementsByClassName("letterWho-output")[0];
        letterWho.style.display="none"
    }
    letterWho(){
        const letterDear =document.getElementsByClassName("letterDear-output")[0];
        letterDear.style.display="none"
        const letterWho =document.getElementsByClassName("letterWho-output")[0];
        letterWho.style.display="block"
    }
    specimenShow(){
        const specimenShow =document.getElementsByClassName("commands-display__specimen")[0];
        specimenShow.style.display="block"
        const commandsListOpt =document.getElementsByClassName("commands-display__list-options")[0];
        commandsListOpt.style.display="none";


    }
    mapShow(){
        const map =document.getElementsByClassName("earthMap")[0];
        const mapDiv =document.getElementsByClassName("commands-display__map")[0]
        mapDiv.style.display="block"
        map.style.display="block"
        const commandsListOpt =document.getElementsByClassName("commands-display__list-options")[0];
        commandsListOpt.style.display="none";
    }
    scientistsShow(){
        const scientistsShow =document.getElementsByClassName("commands-display__scientists")[0];
        scientistsShow.style.display="block"
        const commandsListOpt =document.getElementsByClassName("commands-display__list-options")[0];
        commandsListOpt.style.display="none";

    }
    fuelShow(){
        const fuelTank =document.getElementsByClassName("fuelTank")[0];
        fuelTank.style.display="flex"
        const fuelTankDiv =document.getElementsByClassName("commands-display__fuel")[0];
        fuelTankDiv.style.display="block"
        const commandsListOpt =document.getElementsByClassName("commands-display__list-options")[0];
        commandsListOpt.style.display="none";

    }
    showSpecimentPlant(){
        const specimenPlant =document.getElementsByClassName("specimen_plant")[0];
        specimenPlant.style.display="block"
        const specimenButterfly =document.getElementsByClassName("specimen_butterfly")[0];
        specimenButterfly.style.display="none";
        const specimenEye =document.getElementsByClassName("specimen_eye")[0];
        specimenEye.style.display="none"
    }
    showSpecimentButterfly(){
        const specimenPlant =document.getElementsByClassName("specimen_plant")[0];
        specimenPlant.style.display="none"
        const specimenButterfly =document.getElementsByClassName("specimen_butterfly")[0];
        specimenButterfly.style.display="block";
        const specimenEye =document.getElementsByClassName("specimen_eye")[0];
        specimenEye.style.display="none"
    }
    showSpecimentEye(){
        const specimenEye =document.getElementsByClassName("specimen_eye")[0];
        specimenEye.style.display="block"
        const specimenButterfly =document.getElementsByClassName("specimen_butterfly")[0];
        specimenButterfly.style.display="none";
        const specimenPlant =document.getElementsByClassName("specimen_plant")[0];
        specimenPlant.style.display="none"
    }
    showScMary(){
        const mary =document.getElementsByClassName("scientists_mary")[0];
        mary.style.display="flex"
        const aaron =document.getElementsByClassName("scientists_aaron")[0];
        aaron.style.display="none"
    }
    showScAaron(){
        const aaron =document.getElementsByClassName("scientists_aaron")[0];
        aaron.style.display="flex"
        const mary =document.getElementsByClassName("scientists_mary")[0];
        mary.style.display="none"
    }

    fuelCheck(){
        const tankOne =document.getElementsByClassName("tankOne")[0].value
        const tankTwo =document.getElementsByClassName("tankTwo")[0].value
        const tankThree =document.getElementsByClassName("tankThree")[0].value
        const tankFour =document.getElementsByClassName("tankFour")[0].value
        const fuelTank =document.getElementsByClassName("fuelTank")[0]
        const fuelKeyDis =document.getElementsByClassName("commands-display__fuel-key")[0]
        const fuelDis =document.getElementsByClassName("commands-display__fuel")[0]
        const fuelKey =document.getElementsByClassName("fuelKey")[0]
        if ((25 < tankOne && tankOne <50) && (75 < tankTwo && tankTwo <100) && 
        (50 < tankThree && tankThree<100) && (0 < tankFour && tankFour < 25)){
            fuelKeyDis.style.display="block"
            fuelKey.style.display="block"
            fuelDis.style.display="none"
            fuelTank.style.display="none"
        }}
    fuelKeyboard = (e)=>{
        const fuelO = document.getElementsByClassName("fuel-key__O")[0]
        const fuelR =document.getElementsByClassName("fuel-key__R")[0]
        const fuelI =document.getElementsByClassName("fuel-key__I")[0]
        const fuelO2 =document.getElementsByClassName("fuel-key__O2")[0]
        const fuelN =document.getElementsByClassName("fuel-key__N")[0]
        const fuelDone =document.getElementsByClassName("fuelDone")[0]
        const fuelKey= document.getElementsByClassName("fuelKey")[0]
        if (e.key ==="O"){
            fuelO.style.color ="black"
            fuelO.style.backgroundColor ="cyan"
            fuelO.style.boxShadow = "1px 2px 20px cyan";
        }
        if (e.key ==="o"){
            fuelO2.style.color ="black"
            fuelO2.style.backgroundColor ="cyan"
            fuelO2.style.boxShadow = "1px 2px 20px cyan";
        }
        if (e.key === "r" || e.key === "R"){
            fuelR.style.color ="black"
            fuelR.style.backgroundColor ="cyan"
            fuelR.style.boxShadow = "1px 2px 20px cyan";
        }
        if (e.key === "i" || e.key === "I"){
            fuelI.style.color ="black"
            fuelI.style.backgroundColor ="cyan"
            fuelI.style.boxShadow = "1px 2px 20px cyan";
        }
        if (e.key === "n" || e.key === "N"){
            fuelN.style.color ="black"
            fuelN.style.backgroundColor ="cyan"
            fuelN.style.boxShadow = "1px 2px 20px cyan";
            fuelDone.style.display="flex";
            fuelKey.style.display="none";
        }
    }
    keyCommands = (e) => {
        if (e.key === "Enter") {
                const inputVal =document.getElementsByClassName("input_value")[0].value;
                const screen =document.getElementsByClassName("output-screen")[0]
                if (inputVal == "mail" || inputVal =="Mail"){
                    this.mailShow()
                    screen.style.display = "block";
                }
                if(inputVal == "specimens" || inputVal =="Specimens"){
                    this.specimenShow()
                    screen.style.display = "block";
                }
                if (inputVal == "History" || inputVal == "history"){
                    this.historyShow()
                    screen.style.display = "block";
                }
                
                if (inputVal == "english"){
                    this.historyEng()
                    screen.style.display = "none";
                }
                if (inputVal == "orion language" || inputVal == "orion"){
                    this.orionLang()
                    screen.style.display = "none";
                }
                if (inputVal == "sagittarius language" || inputVal =="sagittarius"){
                    this.sagLang()
                    screen.style.display = "none";
                }
                if (inputVal == "Dear reader..." || inputVal =="dear reader..."|| inputVal == "Dear reader"|| inputVal=="dear reader"){
                    this.letterDear()
                    screen.style.display = "none";
                }
                if (inputVal == "Who are you..." || inputVal =="who are you"|| inputVal=="who are you"|| inputVal=="Who are you"){
                    this.letterWho()
                    screen.style.display = "none";
                }
                if (inputVal ==" back" || inputVal == "go back"){
                    this.returnCommand()
                    screen.style.display = "block";
                }
                if (inputVal == "Fuel tank" || inputVal == "fuel tank"){
                    this.fuelShow()
                    screen.style.display = "none";
                }
                if (inputVal == "map"|| inputVal == "Map"){
                    this.mapShow()
                    screen.style.display = "none";
                }
                if (inputVal =="scientists"|| inputVal =="scientist" || inputVal =="Scientists" || inputVal == "Scientists"){
                    this.scientistsShow()
                    screen.style.display = "block";
                }
                if (inputVal == "quantum species"|| inputVal == "Quantum species"){
                    this.showSpecimentPlant()
                    screen.style.display = "none";
                }
                if (inputVal == "Transcendental species"|| inputVal == "transcendental species"){
                    this.showSpecimentButterfly()
                    screen.style.display = "none";
                }
                if (inputVal == "kardashev5 immitation species"|| inputVal == "Kardashev5 immitation species"){
                    this.showSpecimentEye()
                    screen.style.display = "none";
                }
                if (inputVal == "display commands" || inputVal == "Display commands"|| inputVal == "Display commands"){
                    this.displayCommandsList()
                    screen.style.display = "block";
                }
                if (inputVal == "mary" || inputVal == "Mary"|| inputVal=="Mary Jones" || inputVal == "mary jones"){
                    this.showScMary()
                    screen.style.display = "none";
                }
                if (inputVal == "aaron" || inputVal == "Aaron"|| inputVal=="Aaron Smith" || inputVal == "aaron smith"){
                    this.showScAaron()
                    screen.style.display = "none";
                }
            }

        }
    render(){
        return <>
        <div className="container-input">
        <div className="container-input__bleep">{">"}</div>
        <input className="input_value" onKeyDown={this.keyCommands} placeholder = "Enter ' display commands' here"></input>
        </div>
        <div className="container-output">
        <div className='output-screen'></div>
        <div className='history-output'>
        <p>Long time ago, when the Sun still existed, humans were living on a small, rocky planet names Earth.
        Technologically retarded, they have spend most of their lifespan as a species solely visiting their Solar System.
        It is only a few billions of years ago when the Four Nebulae graced humans with superior Technologically.
        It was too late, sadly. The Sun was soon to implode.</p>
        <p>
         Humans knew it was too late to save everyone, 
        so they have created a capsule with only a 
        few individuals. They sent the capsule in space, hoping it could travel
        fast enough and far enough to find another inhabitable planet. Earth is no longer. The Sun and the Solar System are no longer.
        The capsule, however, still remainds, drifting incessantly through space. </p>
        The Capsule, dear reader,
        is the one you are on right now. If you are human, congratulations! You are one of the few to have survived.
        If you are not human, then have mercy on a dying species. Have mercy on us.
        </div>
        <div className="letterDear-output">
        <p>Dear reader, </p>
        <p>I hope this letter finds you well. And I hope you're human :) .
        I want to be clear: you and your crew are humanity's last hope. You are to find 
        a new planet and to recreate what Earth once was.
        </p>
        <p> As I am writing this letter, around me,
        the Earth is dying. People are starving and dying of thirst, animals are rare and plants lost their color.
        The soil is hot and wild fires are very common. The Sun that once gave us life is now
        giving us death.
        </p>
        <p>You are the new Adam. It is on you to make sure the species. Please, don't let humanity die. Fight for what is right. Fight for us.</p>
        <p>Sent: 10 000 billions years ago, Milky Way, unknown</p>
        </div>

        <div className="letterWho-output">
        <p>Who are you, stranger? </p>
        <p>Our systems recognised a rather suspicious presence in your way. You are not registered
            in our database and your species is unknown to all databases from this constellation.
        </p>
        <p>We are informing you that we will take all necessary measures to keep ourselves safe. Therefore, we ask you to state your
            intentions as clear as possible. If you come in peace, we will welcome you. If you come here to wage war, we will answer accordingly.
        </p>
        <p>Make your intentions clear, stranger!</p>
        <p>Sent: 10 million years ago, Vega, rrS--44-Ge?3-4</p>
        </div>

        <div className="earthMap">
        <p className='earthMapIndicator'>Current Position ➧</p>
        </div>

        <div className='fuelTank'>
        <p>Fuel tank 1</p>
        <input className='tankOne' type="range" min="1" max="100" defaultValue="50" />
        <p>Fuel tank 2</p>
        <input className='tankTwo' type="range" min="1" max="100" defaultValue="50" />
        <p>Fuel tank 3</p>
        <input className='tankThree' type="range" min="1" max="100" defaultValue="50" />
        <p>Fuel tank 4</p>
        <input className='tankFour' type="range" min="1" max="100" defaultValue="50" />
        <button onClick={this.fuelCheck}>⏏</button>
        </div>
        
        <div className='specimen_plant'>
            <div className='specimen_plant-container'>
            <div className='specimen_plant-img'></div>
            <div className='specimen_plant-info'>
                <ul>
                <li>Name: Euphorie Blue</li>
                <li>Origin: Orion-G Alpha32</li>
                <li>Type: Colony</li>
                <li>Average lifespan :2-4 miliseconds</li>
                </ul>
            </div>
            </div>
            <div className='specimen_plant-description'>
            ➧ Description: Euphorie Blue is a very common type of plasma animal.
                It is considered to be one of the most beautiful 
                of its species. The colony is composed of a huge number
                of individuals, who live and are reborn at hugely fast rates.
                The individuals may live up to a few miliseconds, but the 
                whole colony can survive up to 400 billion years. Currently,
                they are inhabiting only their origin planet. There is no
                trace of them anywhere else in the known Universe.
            </div>
        </div>

        <div className='specimen_butterfly'>
            <div className='specimen_butterfly-container'>
            <div className='specimen_butterfly-img'></div>
            <div className='specimen_butterfly-info'>
                <ul>
                <li>Name: Ghost's Butterfly</li>
                <li>Origin: Ursa Major</li>
                <li>Type: Solitary</li>
                <li>Average lifespan :300-350 years</li>
                </ul>
            </div>
            </div>
            <div className='specimen_butterfly-description'>
            ➧ Description: This beautiful butterfly was the first
            species to be discovered by our crew. It feeds with
            electromagnetic radiation emmited by the brain.
            It is latent if it is not observed, and it can
            survived without being observed as long as 4 trillin years.
            It is physically harmless, however, in large groups
            it can permanently damage the conscious mind state of the 
            observer.
            </div>
        </div>

        <div className='specimen_eye'>
            <div className='specimen_eye-container'>
            <div className='specimen_eye-img'></div>
            <div className='specimen_eye-info'>
                <ul>
                <li>Name: Superior-A</li>
                <li>Origin: Aquila, Altair</li>
                <li>Type: Unique</li>
                <li>Average lifespan :1 universe</li>
                </ul>
            </div>
            </div>
            <div className='specimen_eye-description'>
            ➧ Description: This creature has been found lurking
            around Altair. Superios have been found all over the universe,
            however, the green ones can only be found around Altair.
            They do feed off star energy and are harmless to intelligent beings.
            Superior-As are easy to catch and very docile. They immitate the Kardashev V civilisation beings,
            however, they are pillarsto hold the universe together, and not creators.
            </div>
        </div>

        <div className='scientists_mary'>
            <div className='scientists-mary__profile-container'>
            <div className='scientists-mary__profile'></div>
            <div className='scientists-mary__heartbeat'> --//n#ne/-</div>
            </div>
            <div className='scientists-mary__info'>
            <ul>
                <li>Full Name: Mary-Anne Jones</li>
                <li>Origin: Outer Space | Carina Nebula</li>
                <li>Species: human (third generation)</li>
                <li>Function: IT technician</li>
                <li>Blood type: B</li>
                <li>Description: competent | sociable | short-tempered |
                    team-worker |leader
                </li>
                <li>Affections: left lung not functioning propertly | 
                    Two ribs lost in a mission | DNA - active | RNA - flawed
                </li>
                <li>Floor access: all floors</li>
                <li>Last activity: 3 000 years ago, Draco</li>
            </ul>
            </div>
        </div>

        <div className='scientists_aaron'>
            <div className='scientists-aaron__profile-container'>
            <div className='scientists-aaron__profile'></div>
            <div className='scientists-aaron__heartbeat'></div>
            </div>
            <div className='scientists-aaron__info'>
            <ul>
                <li>Full Name: Aaron Smith</li>
                <li>Origin: Earth | Orion Arm</li>
                <li>Species: human (original)</li>
                <li>Function: Biologist | Historian</li>
                <li>Blood type: AB</li>
                <li>Description: quiet | silent | patient |
                one-man team
                </li>
                <li>Affections: poor eyesight | septum deviation  | DNA - not functioning | RNA - active
                </li>
                <li>Floor access: 4th floor | central engine</li>
                <li>Last activity: 4s ago, Cat Eye Nebula</li>
            </ul>
            </div>
        </div>
        <div className ="fuelKey" onKeyDown={this.fuelKeyboard} tabIndex="0">
            <p className='fuel-key__O'>O</p>
            <p className='fuel-key__R'>r</p>
            <p className='fuel-key__I'>i</p>
            <p className='fuel-key__O2'>o</p>
            <p className='fuel-key__N'>n</p>
        </div>
        <div className='fuelDone'>
            <p>Engine operational. All turbines are functional.</p>
        </div>
        </div>
        <div className="container-commands">
        <div className="commands-display__main">
        <button type="button" className="commands-display__main-button">Display Commands</button>    
        </div>
        <div className="commands-display__list">
        <div className="commands-display__list-info">
        This are the commands available for your user category. To execute a command, type its name in the chat below and hit 'enter'. Do not use brackets, quotation marks or capital letters.
        </div>
        <div className='commands-display__list-options'>
        <ul>
            <li>mail</li> 
            <li >specimens</li>
            <li >scientists</li>
            <li >history</li>
            <li >map</li>
            <li >fuel tank</li>

        </ul>
        </div>
        <div className="commands-display__history">
            <ul>
            <li >english</li>
            <li >orion language</li>
            <li >sagittarius language</li>
            <li >go back</li>
        </ul>
        </div>
        <div className='commands-display__mails'>
        <ul>
            <li>dear reader</li>
            <li>who are you</li>
            <li>go back</li>
        </ul>
        </div>
        <div className='commands-display__map'>
        <ul>
            <li>go back</li>
        </ul>
        </div>
        <div className='commands-display__fuel'>
        <p>Instructions:</p>
        <p>Fuel Tank 1: 25%-50%</p>
        <p>Fuel Tank 2: 75%-100%</p>
        <p>Fuel Tank 3: 50%-75%</p>
        <p>Fuel Tank 4 : 0%-25%</p>
        <p> ➧ go back</p>
        </div>
        </div>

        <div className ="commands-display__fuel-key">
        <p>Instructions:</p>
        <p>Click outside the input box</p>
        <p>Notice the letters on each cube</p>
        <p>Press the keys on order</p>
        <p>They are CASE SENSITIVE</p>
        <p>You should be all set</p>
        <p> ➧ go back</p>
        </div>

        <div className='commands-display__specimen'>
            <ul>
                <li>quantum species</li>
                <li>transcendental species</li>
                <li>kardashev5 immitation species</li>
                <li>go back</li>
            </ul>
        </div>
        <div className='commands-display__scientists'>
        <ul>
        <li>mary jones</li>
        <li>aaron smith</li>
        <li> #notfound</li>
        <li> #notfound</li>
        <li> #notfound</li>
        <li> go back</li>
        </ul>
        </div>
        </div>
        </>
}}
export default MainTriad;