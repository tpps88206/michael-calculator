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
    ##Screen = B/w 321px to 767px
  */
  '@media screen and (min-width: 321px) and (max-width: 767px)': {
    paper: {
      width: 360,
      height: 585,
      maxHeight: 'none',
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
      transform: 'none !important',
      top: '81.25vw', // 50vh - (100vh - 162.5vw) / 2
      overflowY: 'auto',
    },
  },
});

export default styles;
