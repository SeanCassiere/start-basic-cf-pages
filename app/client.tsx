import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'

const router = createRouter()

console.log('hydrating')
// hydrateRoot(document.getElementById('root')!, <StartClient router={router} />)
hydrateRoot(document, <StartClient router={router} />)
