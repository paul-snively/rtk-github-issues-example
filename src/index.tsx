import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App.tsx'

import store from './app/store.ts'

<link rel="stylesheet" href="./index.css" />

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

export { render }

/*
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}
*/
