import React, { useState } from 'react'

export default function InvoiceForm({setInvoices}) {

  const initInputs = ({
    fromStreetAddress: '',
    fromCity: '',
    fromState: '',
    fromZipCode: '',
    toName: '',
    toEmail: '',
    toStreetAddress: '',
    toCity: '',
    toState: '',
    toZipCode: '',
    toDate: ''

  })

  const [ inputs, setInputes ] = useState(initInputs)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputes(prevInputs => ({ ...prevInputs, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInvoices(prevInvoices => [...prevInvoices, inputs])

    setInputes(initInputs)
  }

  return (
    <div>InvoiceForm
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Bill From</label>
            <br />
            <input type='text' name='fromStreetAddress' placeholder='street address' value={inputs.fromStreetAddress} onChange={handleChange} />
            <input type='text' name='fromCity' placeholder='city' value={inputs.fromCity} onChange={handleChange} />
            <input type='text' name='fromState' placeholder='state' value={inputs.fromState} onChange={handleChange} />
            <input type='text' name='fromZipCode' placeholder='zip code' value={inputs.fromZipCode} onChange={handleChange} />
            <br />
            <label htmlFor="">Bill To</label>
            <br />
            <input type='text' name='toName' placeholder='client name' value={inputs.toName} onChange={handleChange} />
            <input type='email' name='toEmail' placeholder='client email' value={inputs.toEmail} onChange={handleChange} />
            <input type='text' name='toStreetAddress' placeholder='street address' value={inputs.toStreetAddress} onChange={handleChange} />
            <input type='text' name='toCity' placeholder='city' value={inputs.toCity} onChange={handleChange} />
            <input type='text' name='toState' placeholder='state' value={inputs.toState} onChange={handleChange} />
            <input type='text' name='toZipCode' placeholder='zip code' value={inputs.toZipCode} onChange={handleChange} />
            <input type='date' name='toDate' placeholder='date' value={inputs.toDate} onChange={handleChange} />
            <br />
            <button>Save & Send</button>
        </form>
    </div>
  )
}
