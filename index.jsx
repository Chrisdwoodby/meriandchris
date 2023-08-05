import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('app');
const build = createRoot(container)
build.render(<App/>)