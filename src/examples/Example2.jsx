import {Basic,LoginBase1,SignUpBase1,Theme} from 'appi_react_components'

export default function Example() {
    return ( 
        <Basic>
            <Theme primary='#68d388' secondary='#f43a09'>
                <span style={{fontSize:"16px"}} >These are prebuild account management components, you can use the existing account ( USER, PASSWORD ):</span>
                <br></br><br></br>
                <LoginBase1
                    onWaiting={()=>console.log("waiting")} 
                    Logo={ ()=><img src='appi_nosub.png' /> } 
                    onLogin={()=>{}} 
                    toSignUp={()=>window.alert("signup signal")} 
                /> 
                <SignUpBase1
                    onWaiting={()=>console.log("waiting")} 
                    Logo={ ()=><img src='appi_nosub.png' /> } 
                    onSignUp={()=>{}} 
                    toLogin={()=>window.alert("login signal")} 
                /> 
            </Theme>
        </Basic> 
    );
}

export const subtitle = "Login / Signup / Profile Components";

export const code = `import {Basic,LoginBase1,SignUpBase1,Theme} from 'appi_react_components'

export default function Example() {
    return ( 
        <Basic>
            <Theme primary='#68d388' secondary='#f43a09'>
                <span style={{fontSize:"16px"}} >These are prebuild account management components:</span>
                <br></br><br></br>
                <LoginBase1
                    onWaiting={()=>console.log("waiting")} 
                    Logo={ ()=><img src='appi_nosub.png' /> } 
                    onLogin={()=>{}} 
                    toSignUp={()=>window.alert("signup signal")} 
                /> 
                <SignUpBase1
                    onWaiting={()=>console.log("waiting")} 
                    Logo={ ()=><img src='appi_nosub.png' /> } 
                    onSignUp={()=>{}} 
                    toLogin={()=>window.alert("login signal")} 
                /> 
            </Theme>
        </Basic> 
    );
}`;