import React, { useState } from 'react';

import { AppHeader } from './styled-elements';

export const Header = ({ vertical, toggleVertical, selectedItem }) => (
  <AppHeader>
    <h1>Pale Visual - {selectedItem}</h1>
  </AppHeader>
);
