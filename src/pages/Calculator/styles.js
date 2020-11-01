const styles = theme => ({
  calculator: {
    width: 480,
    height: 780,
    position: 'relative',
  },
  '@media screen and (max-width: 768px)': {
    calculator: {
      width: 360,
      height: 585,
      position: 'relative',
    },
  },
});

export default styles;
