const styles = theme => ({
  operatorKey: {
    color: 'white',
    borderRight: 0,
    fontSize: '3em',
  },
  digitKey: {
    fontSize: '2.25em',
  },
  functionKey: {
    fontSize: '2em',
  },
  calculatorKey: {
    display: 'block',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'inherit',
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    width: 80,
    height: 80,
    borderTop: '1px solid #777',
    borderRight: '1px solid #666',
    textAlign: 'center',
    lineHeight: '80px',
    '&:active': {
      boxShadow: 'inset 0px 0px 80px 0px rgba(0,0,0,0.25)',
    },
  },
});

export default styles;
