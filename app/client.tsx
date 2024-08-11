import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'

const router = createRouter()

console.log('hydrating on the client')
hydrateRoot(document.getElementById('root')!, <StartClient router={router} />)
