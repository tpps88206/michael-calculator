const styles = theme => ({
  functionKeys: {
    display: 'flex',
    background: 'linear-gradient(to bottom, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%)',
  },
  operatorKeys: {
    background: 'linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%)',
  },
  digitKeys: {
    background: '#e0e0e7',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  inputKeys: {
    width: 240,
  },
  calculatorKeypad: {
    height: 400,
    display: 'flex',
  },
  calculator: {
    width: '100%',
    height: '100%',
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 20px 0px #aaa',
  },
  keyDot: {
    paddingTop: '1em',
    fontSize: '0.75em',
  },
  key0: {
    width: 160,
    textAlign: 'left',
    paddingLeft: 32,
  },
  keyMultiply: {
    lineHeight: '50px',
  },
});

export default styles;
