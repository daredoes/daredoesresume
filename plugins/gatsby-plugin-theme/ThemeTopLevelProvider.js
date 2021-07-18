import React, { useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import MuiCustomTheme from "./MuiCustomTheme"
import { LightDarkProvider } from "./LightDarkContext"

const EVENT_OPTIONS = {
  capture: true,
  once: false,
}

function ThemeTopLevelProvider({ children, initTheme }) {
  const [mode, setMode] = useState(initTheme)
  const [printMode, setPrintMode] = useState(false)
  const [printEvent, setPrintEvent] = useState(false)
  const [printModeRendered, setPrintModeRendered] = useState(false)

  const setTheme = useCallback(
    async (isDark) => {
      const val = isDark ? "dark" : "light"
      setMode(val)
    },
    [setMode, mode]
  )

  const switchToLightForPrint = useCallback(
    (e) => {
      const isAfter = e.type === "afterprint"
      if (isAfter) {
        setPrintMode(false)
        setPrintModeRendered(false)
        setPrintEvent(false)
      } else {
        if (!printMode) {
          setPrintEvent(true)
          setPrintMode(true)
        }
      }
    },
    [setPrintMode, printMode, setPrintEvent, setPrintModeRendered]
  )

  const addListeners = useCallback(async () => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "afterprint",
        switchToLightForPrint,
        EVENT_OPTIONS
      )
      window.addEventListener(
        "beforeprint",
        switchToLightForPrint,
        EVENT_OPTIONS
      )
    }
  }, [switchToLightForPrint])

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
    if (printModeRendered && !printEvent) {
      window.print()
      setPrintMode(false)
      setPrintModeRendered(false)
    }
  }, [printModeRendered, setPrintMode, setPrintModeRendered, printEvent])

  useEffect(() => {
    localStorage.setItem("theme", mode)
  }, [mode])

  useEffect(() => {
    addListeners()
  }, [])

  return (
    <MuiCustomTheme darkMode={!printMode && mode === "dark"}>
      <LightDarkProvider
        printMode={printMode}
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
