import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '../src';

export default {
  decorators: [withKnobs],
  title: 'Button',
};

export const Default = () => {
  return <Button>Button</Button>;
};

export const Outlined = () => {
  return (
    <Button text='teal-500' variant='outline'>
      Button
    </Button>
  );
};

export const Ghost = () => {
  return (
    <Button text='teal-500' variant='ghost'>
      Button
    </Button>
  );
};

export const Link = () => {
  return (
    <Button text='teal-500' variant='link'>
      A Link
    </Button>
  );
};

export const Sizes = () => {
  return (
    <div>
      <Button size='xs' className='mr-4' color='blue-500' variant='solid'>
        Button
      </Button>
      <Button size='sm' className='mr-4' color='blue-500' variant='solid'>
        Button
      </Button>
      <Button size='md' className='mr-4' color='blue-500' variant='solid'>
        Button
      </Button>
      <Button size='lg' className='mr-4' color='blue-500' variant='solid'>
        Button
      </Button>
    </div>
  );
};

export const IsDisabled = () => {
  return (
    <Button color='teal-500' variant='solid' isDisabled>
      Button
    </Button>
  );
};

export const IsLoading = () => {
  return (
    <>
      <Button
        color='teal-500'
        variant='solid'
        isLoading
        loadingText='loading...'
        size='lg'
      >
        Button
      </Button>
      <Button
        color='teal-500'
        variant='solid'
        isLoading
        className='ml-4'
        loadingText='load'
      />
    </>
  );
};

export const Red = () => {
  return (
    <Button color='red-500' variant='solid'>
      Button
    </Button>
  );
};
