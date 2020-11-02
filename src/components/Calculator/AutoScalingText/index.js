import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { makeStyles } from '@material-ui/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const AutoScalingText = ({ children }) => {
  const classes = useStyles();

  const [scale, setScale] = useState(1);
  const nodeRef = useRef(null);

  // TODO: 瀏覽器大小縮放時，顯示區域需要改變大小
  useEffect(() => {
    const parentNode = nodeRef.current.parentNode; // 取得顯示區域的父類別元素
    const availableWidth = parentNode.offsetWidth; // 取得父類別元素佔用的寬度
    const actualWidth = nodeRef.current.offsetWidth; // 取得顯示數字佔用的寬度
    // 使用父類別元素佔用的寬度除以顯示數字佔用的寬度
    // 如果結果大於 1 表示該空間還夠顯示所有數字
    // 如果結果小於 1 表示數字的寬度已經超過父類別
    // 需要根據超過的比例，等比例縮小
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    if (actualScale < 1) {
      setScale(actualScale);
    } else if (scale < 1) {
      setScale(1);
    }
  });

  return (
    <div
      className={classNames(classes.autoScalingText, 'position-absolute d-inline-block')}
      style={{ transform: `scale(${scale},${scale})` }}
      ref={nodeRef}
    >
      {children}
    </div>
  );
};

export default AutoScalingText;
