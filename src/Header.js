import React, { useState } from 'react';

import { AppHeader } from './styled-elements';

export const Header = ({ selectedItem }) => (
  <AppHeader>
    <h1>Pale Visual - {selectedItem}</h1>
  </AppHeader>
);
