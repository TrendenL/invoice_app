import React from 'react'

const InvoiceContext = React.createContext()

function InvoiceContextProvider(props) {
  return (
    <InvoiceContext.Provider>
      {props.children}
    </InvoiceContext.Provider>
  )
}

export { InvoiceContextProvider, InvoiceContext }