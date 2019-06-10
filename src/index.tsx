import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'reflect-metadata'
import 'typeface-roboto'
import registerServiceWorker from './registerServiceWorker'
import config from './config'

import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import { ConnectedRouter } from 'connected-react-router/immutable'

// Actions
import * as localActions from './store/actions/localeActions'
import * as globalActions from './store/actions/globalActions'

// Import App components
import Master from './'