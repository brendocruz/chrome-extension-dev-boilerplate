import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';

import { Options } from '../components/Pages/Options';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Options />);
