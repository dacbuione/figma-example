import { StrictMode } from 'react'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('React version:', React.version);
console.log('Rendering app...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');
  
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  
  console.log('App rendered successfully');
} catch (error) {
  console.error('Failed to render app:', error);
}
