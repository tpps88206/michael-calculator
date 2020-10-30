import React, { useEffect, useRef, useState } from 'react';

import { makeStyles } from '@material-ui/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const AutoScalingText = ({ children }) => {
  const classes = useStyles();

  const [scale, setScale] = useState(1);
  const nodeRef = useRef(null);

  useEffect(() => {
    const parentNode = nodeRef.current.parentNode;
    const availableWidth = parentNode.offsetWidth;
    const actualWidth = nodeRef.current.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    if (actualScale < 1) {
      setScale(actualScale);
    } else if (scale < 1) {
      setScale(1);
    }
  });

  return (
    <div className={classes.autoScalingText} style={{ transform: `scale(${scale},${scale})` }} ref={nodeRef}>
      {children}
    </div>
  );
};

export default AutoScalingText;
