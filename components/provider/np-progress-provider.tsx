"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { Suspense } from "react"

type NPProgresBarProviderProps = {
  children: React.ReactNode
}

const NPProgresBarProvider = ({
  children,
}: Readonly<NPProgresBarProviderProps>) => {
  return (
    <>
      {children}
      <Suspense>
        <ProgressBar
          height="4px"
          color={"#FF0000"}
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  )
}

export default NPProgresBarProvider
