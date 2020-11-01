const styles = theme => ({
  operatorKey: {
    color: 'white',
    fontSize: '3em',
    backgroundColor: '#3091FD',
    paddingTop: '12px',
  },
  digitKey: {
    color: 'white',
    fontSize: '3em',
    backgroundColor: '#333333',
  },
  functionKey: {
    fontSize: '2.5em',
    backgroundColor: '#AFAFAF',
    paddingTop: '12px',
  },
  calculatorKey: {
    margin: 10,
    display: 'block',
    borderRadius: '50%',
    fontFamily: 'inherit',
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    width: 100,
    height: 100,
    textAlign: 'center',
    '&:active': {
      boxShadow: 'inset 0px 0px 80px 0px rgba(0,0,0,0.25)',
    },
  },
});

export default styles;
