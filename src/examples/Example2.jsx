import {Basic,LoginBase1,SignUpBase1,Settings1,Theme} from 'appi_react_components'
import {Fragment} from 'react'

export default function Example() {
    return ( 
        <Fragment>
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
            {/*<Settings1
                setDark={setDark}
                dark={dark}
            />*/}
        </Fragment>
    );
}

export const subtitle = "Login / Signup / Profile Components";

export const code = `import {Basic,LoginBase1,SignUpBase1,Settings1,Theme} from 'appi_react_components'
import {Fragment} from 'react'

export default function Example() {
    return ( 
        <Basic>
            <Theme primary='#68d388' secondary='#f43a09'>{({dark,setDark}) => (
                <Fragment>
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
                    <Settings1
                        setDark={setDark}
                        dark={dark}
                    />
                </Fragment>
            )}</Theme>
        </Basic> 
    );
}`;