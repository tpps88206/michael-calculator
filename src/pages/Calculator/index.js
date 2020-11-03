import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import GradientIcon from '@material-ui/icons/Gradient';
import { makeStyles } from '@material-ui/styles';

import Calculator from '../../components/Calculator';
import constant from '../../constants/constant';
import styles from './styles';

const useStyles = makeStyles(styles);

const CalculatorPage = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false); // 是否開啟計算機
  const [mobile, setMobile] = useState(false); // 是否為行動裝置

  useEffect(() => {
    handleRWD();
  }, []);

  const handleRWD = () => {
    const isMobileDevice = constant.MOBILE_LIST.some(e => navigator.userAgent.match(e));
    if (window.innerWidth < 768 && isMobileDevice) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const PaperComponent = ({ className, ...props }) => {
    return (
      <Draggable>
        <div className={classNames(className, classes.paper)} {...props} />
      </Draggable>
    );
  };

  return (
    <div>
      <Button
        className="mt-2 ml-2"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<GradientIcon />}
        onClick={handleClickOpen}
      >
        打開計算機
      </Button>
      <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent}>
        {mobile ? (
          <div className={classNames(classes.calculator, 'position-absolute')}>
            <Calculator />
          </div>
        ) : (
          <Calculator />
        )}
      </Dialog>
    </div>
  );
};

export default CalculatorPage;
