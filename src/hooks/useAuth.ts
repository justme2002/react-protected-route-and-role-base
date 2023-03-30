import React from 'react'

const useAuth = () => {

  const ROLE = "USER"
  const accessToken = "123456789"

  return {
    ROLE,
    accessToken
  }
}

export default useAuth