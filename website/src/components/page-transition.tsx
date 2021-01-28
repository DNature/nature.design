import * as React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

const PageTransition = (props: HTMLMotionProps<'div'>) => (
  <motion.div
    initial={{ y: -16, opacity: 0, scale: 0.6 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    {...props}
  />
);

export default PageTransition;