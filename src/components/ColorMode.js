import React from "react"

const coloModeContext = React.createContext({
  mode: "dark"
})

export default function ColorModeProvider({ children }) {
  return (
    <coloModeContext.Provider>
      {children}
    </coloModeContext.Provider>
  )
}