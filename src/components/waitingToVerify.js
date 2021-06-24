import React from 'react'
import Loading from './loading'
import { WaitingBody } from './waitingStyle'


function WaitingToVerify() {
    return (
        <div>
        <WaitingBody>
            <Loading/>           
        </WaitingBody>
        </div>
    )
}

export default WaitingToVerify
