import React from 'react';
import { UserContext, ChannelContext } from '../App';

export default function ComponentE() {
  return (
    <div>
        {
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value {user}, channel name where you study recat js {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        }
    </div>
  )
}
