import React from 'react'
import { Card} from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import Login from './Login';
import Signup from './Signup';


const LeftSide = () => {
    return (
        <Card>
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}  >
                <Tab label="Login"  ><Login /></Tab>
                <Tab label="Sign Up"><Signup /></Tab>
            </Tabs>
        </Card>
    )
}

export default LeftSide
