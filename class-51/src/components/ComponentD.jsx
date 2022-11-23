import React, { useContext } from 'react'
import ComponentE from './ComponentE'
import { UserContext, ChannelContext } from '../App'

export default function ComponentD() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

  return (
    <div>
        {user} - {channel}
    </div>
  )
}
