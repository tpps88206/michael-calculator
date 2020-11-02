const styles = theme => ({
  autoScalingText: {
    padding: '0 30px',
    right: 0,
    transformOrigin: 'right',
  },
  '@media screen and (max-width: 768px)': {
    autoScalingText: {
      padding: '0 10px',
      right: 0,
      transformOrigin: 'right',
    },
  },
});

export default styles;
