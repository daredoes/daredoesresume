import React, { useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import MuiCustomTheme from "./MuiCustomTheme"
import { LightDarkProvider } from "./LightDarkContext"

const EVENT_OPTIONS = {
  capture: true,
  once: true,
}

function ThemeTopLevelProvider({ children, initTheme }) {
  const [mode, setMode] = useState(initTheme)

  const setTheme = useCallback(
    (isDark) => {
      const val = isDark ? "dark" : "light"
      setMode(val)
    },
    [setMode, mode]
  )

  const switchToLightForPrint = useCallback(
    async (e) => {
      const isDark = e.type === "afterprint"
      setTheme(isDark)
    },
    [setTheme]
  )

  const removeListeners = useCallback(async () => {
    if (typeof window !== "undefined") {
      window.removeEventListener("afterprint", switchToLightForPrint)
      window.removeEventListener("beforeprint", switchToLightForPrint)
    }
  }, [switchToLightForPrint])

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

  const print = useCallback(() => {
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        setTheme(false)
        setTimeout(() => {
          window.print()
          setTheme(true)
        }, 50)
      } else {
        window.print()
      }
    }
  }, [setTheme, mode])

  useEffect(() => {
    localStorage.setItem("theme", mode)
    if (mode === "dark") {
      addListeners()
    } else {
      removeListeners()
    }
  }, [mode])

  return (
    <MuiCustomTheme darkMode={mode === "dark"}>
      <LightDarkProvider theme={mode} changeTheme={setTheme} print={print}>
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
