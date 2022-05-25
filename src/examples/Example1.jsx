import {Basic,LoginState} from 'appi_react_components'

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
}

export const subtitle = "Reactive Login State";

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