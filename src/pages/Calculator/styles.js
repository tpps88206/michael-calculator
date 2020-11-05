const styles = theme => ({
  /*
    ##Device = Desktops
    ##Screen = 768px to higher resolution desktops
  */
  '@media screen and (min-width: 768px)': {
    calculator: {
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
    calculator: {
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
    content: {
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 56px)',
    },
    mobileContent: {
      height: 'calc(50vh - 56px)',
    },
    modal: {
      height: '50vh',
      margin: 0,
      overflowY: 'auto',
    },
    calculator: {
      // 計算機被隱藏的高度 + 計算機本身的高度
      // (162.5vw - 50vh) + 162.5vw
      width: '100vw',
      height: '162.5vw',
      margin: 0,
      '& #CalculatorMainSection': {
        height: '162.5vw !important',
      },
    },
  },
});

export default styles;
