import React, { useReducer } from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'




export default function App() {
  
  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
        deleteQuote={deleteQuote}
        editQuoteAuthenticity={editQuoteAuthenticity}
        setHighlightedQuote={setHighlightedQuote}
        toggleVisibility={toggleVisibility}
        displayAllQuotes={state.displayAllQuotes}
        highlightedQuote={state.highlightedQuote}
        quotes={state.quotes}
      />
      <QuoteForm
        createQuote={createQuote}
      />
    </div>
  )
}
