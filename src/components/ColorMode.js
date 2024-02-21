import React, { useState } from "react"

export const colorModeContext = React.createContext({ 
  mode: "", 
  setMode: () => alert('Você precisa me configurar primeiro!')
})

export default function ColorModeProvider({ children, initialMode }) {

  const [mode, setMode] = useState(initialMode)

  return (
    <colorModeContext.Provider value={{ mode: mode, setMode: setMode }}>
      {children}
    </colorModeContext.Provider>
  )
}