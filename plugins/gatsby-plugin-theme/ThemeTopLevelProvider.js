import React, { useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import MuiCustomTheme from "./MuiCustomTheme"
import { LightDarkProvider } from "./LightDarkContext"

function ThemeTopLevelProvider({ children, initTheme }) {
  const [mode, setMode] = useState(initTheme)
  const [printMode, setPrintMode] = useState(false)
  const [printModeRendered, setPrintModeRendered] = useState(false)

  const setTheme = useCallback(
    async (isDark) => {
      const val = isDark ? "dark" : "light"
      setMode(val)
    },
    [setMode, mode]
  )

  const altPrint = useCallback(() => {
    if (typeof window !== "undefined" && !printMode) {
      setPrintMode(true)
    }
  }, [setPrintMode, printMode])

  useEffect(() => {
    if (printMode) {
      setPrintModeRendered(true)
    }
  }, [printMode, setPrintModeRendered])

  useEffect(() => {
    if (printModeRendered) {
      window.print()
      setPrintMode(false)
      setPrintModeRendered(false)
    }
  }, [printModeRendered, setPrintMode, setPrintModeRendered])

  return (
    <MuiCustomTheme darkMode={!printMode && mode === "dark"}>
      <LightDarkProvider
        theme={printMode ? "light" : mode}
        changeTheme={setTheme}
        print={altPrint}
      >
        {children}
      </LightDarkProvider>
    </MuiCustomTheme>
  )
}

ThemeTopLevelProvider.propTypes = {
  children: PropTypes.node,
  initTheme: PropTypes.string.isRequired,
}

export default ThemeTopLevelProvider
