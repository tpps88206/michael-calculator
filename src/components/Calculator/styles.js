const styles = theme => ({
  functionKeys: {
    display: 'flex',
  },
  operatorKeys: {
    display: 'grid',
  },
  digitKeys: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  inputKeys: {
    width: 360,
  },
  calculatorKeypad: {
    height: 600,
    display: 'flex',
  },
  calculator: {
    background: 'linear-gradient(#84BAFF, #0B0E1C)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 20px 0px #aaa',
  },
  keyDot: {
    paddingTop: '1em !important',
    fontSize: '0.75em !important',
    lineHeight: '106px !important',
  },
  key0: {
    width: '220px !important',
    textAlign: 'left !important',
    paddingLeft: '40px !important',
    borderRadius: '40px !important',
  },
});

export default styles;
