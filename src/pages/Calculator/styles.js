const styles = theme => ({
  /*
    ##Device = Desktops
    ##Screen = 768px to higher resolution desktops
  */
  '@media screen and (min-width: 768px)': {
    paper: {
      width: 480,
      height: 780,
      maxHeight: 'none',
    },
  },
  /*
    ##Device = Desktops
    ##Screen = B/w 0px to 767px
  */
  '@media screen and (max-width: 767px)': {
    paper: {
      width: 360,
      height: 585,
      maxHeight: 'none',
      minWidth: 360,
      margin: 0,
    },
  },
  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 0px to 767px
  */
  '@media screen and (min-device-width: 0px) and (max-device-width: 767px)': {
    paper: {
      width: '100vw',
      height: '162.5vw',
      margin: 0,
      transform: 'none !important', // 取消 DnD
      top: '81.25vw', // 計算機中心點與計算機上方邊界的距離
      overflowY: 'auto',
    },
    calculator: {
      // 計算機被隱藏的高度 + 計算機本身的高度
      // (162.5vw - 50vh) + 162.5vw
      height: 'calc(325vw - 50vh)',
      '& #calculator-main-section': {
        height: '162.5vw !important',
      },
    },
  },
});

export default styles;
