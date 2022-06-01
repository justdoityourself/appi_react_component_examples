import {UserList,UserGrid,UserStack} from 'appi_react_components'
import {useAppi} from 'appi_react'
import {Fragment} from 'react'

export default function Example() {
    const [user] = useAppi("@user");

    return ( 
        <Fragment>
            <span style={{fontSize:"16px"}} >Users and users lists can be render thusly :) :</span>
            <br></br><br></br>
            <UserGrid userIds={user?._following} onUser={userId=>window.alert("Select " + userId)} />
            <br></br><br></br>
            <UserList userIds={user?._following} onUser={userId=>window.alert("Select " + userId)} />
            <br></br><br></br>
            <UserStack userIds={user?._following} onUser={userId=>window.alert("Select " + userId)} />
        </Fragment>
    );
}

export const subtitle = "User Components";

export const code = `import {UserList,UserGrid,UserStack} from 'appi_react_components'
import {useAppi} from 'appi_react'
import {Fragment} from 'react'

export default function Example() {
    const [user] = useAppi("@user");

    return ( 
        <Fragment>
            <span style={{fontSize:"16px"}} >Users and users lists can be render thusly :) :</span>
            <br></br><br></br>
            <UserGrid userIds={user?._following} onUser={userId=>window.alert("Select " + userId)} />
            <br></br><br></br>
            <UserList userIds={user?._following} onUser={userId=>window.alert("Select " + userId)} />
            <br></br><br></br>
            <UserStack userIds={user?._following} onUser={userId=>window.alert("Select " + userId)} />
        </Fragment>
    );
}`;