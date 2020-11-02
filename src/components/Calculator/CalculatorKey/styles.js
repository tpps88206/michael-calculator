const styles = theme => ({
  operatorKey: {
    color: 'white',
    fontSize: '3em',
    backgroundColor: '#3091FD',
  },
  digitKey: {
    color: 'white',
    fontSize: '3em',
    backgroundColor: '#333333',
  },
  functionKey: {
    fontSize: '2.5em',
    backgroundColor: '#AFAFAF',
    '& .MuiIcon-root': {
      display: 'flex',
    },
  },
  calculatorKey: {
    borderRadius: '50%',
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&:active': {
      boxShadow: 'inset 0px 0px 80px 0px rgba(0,0,0,0.25)',
    },
    '& .MuiIcon-root': {
      width: 'max-content',
      height: 'max-content',
      margin: 'auto',
    },
  },
});

export default styles;
