import { setupCounter } from './counter.ts'

import './style.css';

const app = document.getElementById('app');

// Add an image to be displayed full-screen
const img = document.createElement('img');
img.src = '../assets/nyxia.png'; // Adjust path if necessary
img.alt = 'Nyxia Ladies Planet';
img.className = 'fullscreen';

if (app) {
  app.appendChild(img);
}


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
