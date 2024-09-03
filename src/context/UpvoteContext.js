import { useState, createContext, useContext, useEffect } from 'react'

export const UpvoteContext = createContext()
export const useUpvoteContext = () => useContext(UpvoteContext)

export const UpvoteContextProvider = ({ children }) => {
  const [upVoteData, setUpVoteData] = useState([])

  useEffect(()=> {
    const upVoteData = JSON.parse(localStorage.getItem('upVoteData'))
    upVoteData?.length && setUpVoteData(upVoteData)
  }, [])

  useEffect(() => {
    upVoteData?.length
      ? localStorage.setItem('upVoteData', JSON.stringify(upVoteData))
      : localStorage.setItem('upVoteData', JSON.stringify([]))
  }, [upVoteData])

  return (
    <UpvoteContext.Provider value={{ upVoteData, setUpVoteData }}>
      {children}
    </UpvoteContext.Provider>
  )
}
