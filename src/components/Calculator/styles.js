// TODO: use OOCSS

const styles = theme => ({
  functionKeys: {
    height: '20%',
  },
  digitKeys: {
    height: '80%',
  },
  calculatorKeypad: {
    height: '80%',
  },
  calculator: {
    background: 'linear-gradient(#84BAFF, #0B0E1C)',
    boxShadow: '0px 0px 20px 0px #aaa',
    height: 'inherit', // TODO: fix height value for overflow-y
  },
  keyDot: {
    fontSize: '0.75em !important',
  },
  key0: {
    borderRadius: '40px !important',
  },
});

export default styles;
