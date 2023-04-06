import React, {useState} from 'react'
import Invoice from '../../components/Invoice/Invoice'
import InvoiceForm from '../../components/InvoiceForm/InvoiceForm'


export default function Invoices() {
  const [invoices, setInvoices] = useState([])
  console.log(invoices)

    const mappedInvoices = invoices.map(invoice => <Invoice {...invoice}  /> )

  return (
    <div>
      <h2>Invoices</h2>

      <InvoiceForm setInvoices={setInvoices} />
        {mappedInvoices}
    </div>
  )
}
