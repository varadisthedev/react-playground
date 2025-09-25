import React from 'react'

const UserContext=React.createContext()
// comes with a producer and consumer
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserConsumer,UserProvider}