"use client"

import React from "react"

import { useState, useEffect } from "react"

interface HistoryEntry {
  equation: string
  result: string
}

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<string | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [showHistory, setShowHistory] = useState(false)

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
      return
    }
    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const clear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(display)
    } else if (operation) {
      const currentValue = parseFloat(previousValue)
      let result: number

      switch (operation) {
        case "+":
          result = currentValue + inputValue
          break
        case "-":
          result = currentValue - inputValue
          break
        case "×":
          result = currentValue * inputValue
          break
        case "÷":
          result = inputValue !== 0 ? currentValue / inputValue : 0
          break
        default:
          result = inputValue
      }

      setDisplay(String(result))
      setPreviousValue(String(result))
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = () => {
    if (!operation || previousValue === null) return

    const inputValue = parseFloat(display)
    const currentValue = parseFloat(previousValue)
    let result: number

    switch (operation) {
      case "+":
        result = currentValue + inputValue
        break
      case "-":
        result = currentValue - inputValue
        break
      case "×":
        result = currentValue * inputValue
        break
      case "÷":
        result = inputValue !== 0 ? currentValue / inputValue : 0
        break
      default:
        result = inputValue
    }

    // Add to history
    const equation = `${previousValue} ${operation} ${display} =`
    setHistory([{ equation, result: String(result) }, ...history])

    setDisplay(String(result))
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(true)
  }

  const toggleSign = () => {
    setDisplay(String(parseFloat(display) * -1))
  }

  const percentage = () => {
    setDisplay(String(parseFloat(display) / 100))
  }

  const backspace = () => {
    if (display.length === 1 || display === "0") {
      setDisplay("0")
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default for calculator keys
      if (/^[0-9+\-*/=.%]$/.test(e.key) || e.key === "Enter" || e.key === "Escape" || e.key === "Backspace") {
        e.preventDefault()
      }

      // Numbers
      if (/^[0-9]$/.test(e.key)) {
        inputDigit(e.key)
      }
      // Decimal
      else if (e.key === ".") {
        inputDecimal()
      }
      // Operations
      else if (e.key === "+") {
        performOperation("+")
      } else if (e.key === "-") {
        performOperation("-")
      } else if (e.key === "*" || e.key === "×") {
        performOperation("×")
      } else if (e.key === "/" || e.key === "÷") {
        performOperation("÷")
      }
      // Calculate
      else if (e.key === "Enter" || e.key === "=") {
        calculate()
      }
      // Clear
      else if (e.key === "Escape") {
        clear()
      }
      // Backspace
      else if (e.key === "Backspace") {
        backspace()
      }
      // Percentage
      else if (e.key === "%") {
        percentage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [display, previousValue, operation, waitingForOperand])

  const Button = ({
    children,
    onClick,
    className = "",
  }: {
    children: React.ReactNode
    onClick: () => void
    className?: string
  }) => (
    <button
      onClick={onClick}
      className={`h-16 text-xl font-medium rounded-full transition-all active:scale-95 ${className}`}
    >
      {children}
    </button>
  )

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 gap-4">
      {/* History Panel */}
      {showHistory && (
        <div className="w-full max-w-xs bg-neutral-900 rounded-3xl p-4 h-[600px] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-medium">History</h2>
            <button
              onClick={() => setHistory([])}
              className="text-neutral-400 hover:text-white text-sm"
            >
              Clear All
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2">
            {history.length === 0 ? (
              <p className="text-neutral-500 text-center mt-8">No calculations yet</p>
            ) : (
              history.map((entry, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDisplay(entry.result)
                    setWaitingForOperand(true)
                  }}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 rounded-xl p-3 text-right transition-colors"
                >
                  <div className="text-neutral-400 text-sm">{entry.equation}</div>
                  <div className="text-white text-lg font-medium">{entry.result}</div>
                </button>
              ))
            )}
          </div>
        </div>
      )}

      <div className="w-full max-w-xs">
        {/* History Toggle */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            {showHistory ? "Hide History" : "Show History"}
          </button>
        </div>
        
        {/* Display */}
        <div className="h-24 flex items-end justify-end px-4 mb-4">
          <span
            className={`text-white font-light ${
              display.length > 9 ? "text-4xl" : display.length > 6 ? "text-5xl" : "text-6xl"
            }`}
          >
            {display.length > 12 ? parseFloat(display).toExponential(5) : display}
          </span>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <Button onClick={clear} className="bg-neutral-400 text-neutral-900 hover:bg-neutral-300">
            {previousValue ? "C" : "AC"}
          </Button>
          <Button onClick={backspace} className="bg-neutral-400 text-neutral-900 hover:bg-neutral-300">
            ⌫
          </Button>
          <Button onClick={percentage} className="bg-neutral-400 text-neutral-900 hover:bg-neutral-300">
            %
          </Button>
          <Button
            onClick={() => performOperation("÷")}
            className={`${operation === "÷" ? "bg-white text-orange-500" : "bg-orange-500 text-white hover:bg-orange-400"}`}
          >
            ÷
          </Button>

          {/* Row 2 */}
          <Button onClick={() => inputDigit("7")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            7
          </Button>
          <Button onClick={() => inputDigit("8")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            8
          </Button>
          <Button onClick={() => inputDigit("9")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            9
          </Button>
          <Button
            onClick={() => performOperation("×")}
            className={`${operation === "×" ? "bg-white text-orange-500" : "bg-orange-500 text-white hover:bg-orange-400"}`}
          >
            ×
          </Button>

          {/* Row 3 */}
          <Button onClick={() => inputDigit("4")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            4
          </Button>
          <Button onClick={() => inputDigit("5")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            5
          </Button>
          <Button onClick={() => inputDigit("6")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            6
          </Button>
          <Button
            onClick={() => performOperation("-")}
            className={`${operation === "-" ? "bg-white text-orange-500" : "bg-orange-500 text-white hover:bg-orange-400"}`}
          >
            −
          </Button>

          {/* Row 4 */}
          <Button onClick={() => inputDigit("1")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            1
          </Button>
          <Button onClick={() => inputDigit("2")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            2
          </Button>
          <Button onClick={() => inputDigit("3")} className="bg-neutral-700 text-white hover:bg-neutral-600">
            3
          </Button>
          <Button
            onClick={() => performOperation("+")}
            className={`${operation === "+" ? "bg-white text-orange-500" : "bg-orange-500 text-white hover:bg-orange-400"}`}
          >
            +
          </Button>

          {/* Row 5 */}
          <Button
            onClick={() => inputDigit("0")}
            className="col-span-2 bg-neutral-700 text-white hover:bg-neutral-600 rounded-full px-6 text-left"
          >
            0
          </Button>
          <Button onClick={inputDecimal} className="bg-neutral-700 text-white hover:bg-neutral-600">
            .
          </Button>
          <Button onClick={calculate} className="bg-orange-500 text-white hover:bg-orange-400">
            =
          </Button>
        </div>
      </div>
    </div>
  )
}
