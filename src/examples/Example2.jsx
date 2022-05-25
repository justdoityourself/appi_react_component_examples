import {Basic,LoginBase1,SignUpBase1,Theme} from 'appi_react_components'

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
                    onLogin={()=>{}} 
                    toSignUp={()=>window.alert("signup signal")} 
                /> 
            </Theme>
        </Basic> 
    );
}

export const subtitle = "Login / Signup / Profile Components";

export const code = `import {Basic,LoginState} from 'appi_react_components'

export default function Example() {
    return ( 
        <Basic>
            <span style={{fontSize:"16px"}} >The current login state is rendered below and can be one of the following strings: loading, login, logout, noAccount;</span>
            <br></br><br></br>
            <LoginState>
                {({login}) => (
                    <span>{login}</span>
                )}
            </LoginState>
        </Basic> 
    );
}`;