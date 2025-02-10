"use client"

import { useState } from "react";

export default function Home() {
  const [number1, setNumber1] = useState<number | undefined>(undefined)
  const [number2, setNumber2] = useState<number | undefined>(undefined)
  const [number3, setNumber3] = useState<number | undefined>(undefined)

  const getInt = (n: number) => Math.floor(n * 10) % 10

  const startSlothMachine = async () => {
    let num1, num2, num3;

    const interval1 = setInterval(() => {
      num1 = getInt(Math.random())
      setNumber1(num1)
    }, 500)

    const interval2 = setInterval(() => {
      num2 = getInt(Math.random())
      setNumber2(num2)
    }, 500)
    const interval3 = setInterval(() => {
      num3 = getInt(Math.random())
      setNumber3(num3)
    }, 500)

    await new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(interval1)
        resolve("")
      }, 3000)
    })
    await new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(interval2)
        resolve("")
      }, 3500)
    })
    await new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(interval3)
        resolve("")
      }, 4000)
    })

    if (num1 === num2 && num2 === num3) {
      console.log('win')
    }

    setNumber1(undefined)
    setNumber2(undefined)
    setNumber3(undefined)
  }

  return (
    <div className="">
      <button onClick={startSlothMachine}>start</button>
      <div className="flex gap-2">
        <div>{number1 ?? "-"}</div>
        <div>{number2 ?? "-"}</div>
        <div>{number3 ?? "-"}</div>
      </div>
    </div>
  );
}
