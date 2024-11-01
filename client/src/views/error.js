import Snabbdom from 'snabbdom-pragma'
import layout from './layout'

const formatError = err =>
  (err.message && err.message.startsWith('Request has been terminated'))
? 'We encountered an error. Please try again later.'
: (err.status && err.status === 502)
? 'Esplora is currently unavailable, please try again later.'
: (err.message || err.toString())

export const error = ({ t, error, ...S }) => layout(<div>
    <div className="container text-center"><h1>{ t(formatError(error)) }</h1></div>
  </div>
, { t, ...S })

export const notFound = S => error({ ...S, error: 'Page Not Found' })
