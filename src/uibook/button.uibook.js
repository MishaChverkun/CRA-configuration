import UibookCase from 'uibook/case';
import Button from '../button.js';
import React from 'react';

export default {
  background: 'light',
  component: Button,
  cases: [
    () => <UibookCase props={{ text: 'Button' }}></UibookCase>,
    () => <UibookCase props={{  text: 'Button 2' }}></UibookCase>
  ]
}
