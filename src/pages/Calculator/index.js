import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
  const nodeRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleRWD); // 解析度改變時，檢查裝置類型和裝置大小
    handleRWD(); // 第一次進到頁面先做一次

    return () => {
      window.removeEventListener('resize', handleRWD);
    };
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
    if (mobile) {
      document.addEventListener('click', handleOutsideClick, true);
    }
    setOpen(true);
  };

  const handleClose = () => {
    if (mobile) {
      document.removeEventListener('click', handleOutsideClick, true);
    }
    setOpen(false);
  };

  const handleOutsideClick = e => {
    if (nodeRef.current.contains(e.target)) handleClose();
  };

  const PaperComponent = ({ className, ...props }) => {
    return (
      <Draggable>
        <div className={classNames(className, classes.calculator)} {...props} />
      </Draggable>
    );
  };

  const ContentComponent = () => {
    return (
      <React.Fragment>
        <Card className="mx-2 my-2">
          <CardContent>
            <h1 id="react-calculator">React Calculator</h1>
            <p>
              <img src="https://github.com/tpps88206/calculator/workflows/CI/CD/badge.svg" alt="CI/CD" />
              <a href="https://codecov.io/gh/tpps88206/calculator">
                <img src="https://img.shields.io/codecov/c/github/tpps88206/calculator" alt="Codecov" />
              </a>
              <img src="https://img.shields.io/github/license/tpps88206/calculator" alt="License" />
            </p>
          </CardContent>
        </Card>
        <Card className="mx-2 my-2">
          <CardContent>
            <h2 id="demo">Demo</h2>
            <p>
              <a href="https://tpps88206.github.io/calculator/">https://tpps88206.github.io/calculator/</a>
            </p>
          </CardContent>
        </Card>
        <Card className="mx-2 my-2">
          <CardContent>
            <h2 id="setup">Setup</h2>
            <pre>
              <code>
                <span className="hljs-variable">$ </span>git clone <span className="hljs-symbol">https:</span>/
                <span className="hljs-regexp">/github.com/tpps</span>88206/calculator.git
                <span className="hljs-variable">$ </span>cd calculator/
                <span className="hljs-variable">$ </span>yarn install
                <span className="hljs-variable">$ </span>yarn start
              </code>
            </pre>
          </CardContent>
        </Card>
        <Card className="mx-2 my-2">
          <CardContent>
            <h2 id="technologies">Technologies</h2>
            <ul>
              <li>
                Use <strong>React Hook</strong>
              </li>
              <li>
                Develop state management with <a href="https://redux.js.org/">Redux</a> and{' '}
                <a href="https://redux-toolkit.js.org/">Redux Toolkit</a>.
              </li>
              <li>
                Develop CSS style with <a href="https://material-ui.com/styles/basics/">@material-ui/styles</a>
              </li>
              <li>
                Develop router management with <a href="https://github.com/ReactTraining/react-router">React Router</a>.
              </li>
              <li>
                Write unit test with <strong>testing-library</strong>.
              </li>
              <li>
                Use <a href="https://github.com/features/actions">Github Actions</a> to implement CI/CD and deploy on{' '}
                <strong>Github Page</strong>.
              </li>
              <li>
                Use <a href="https://material-ui.com/zh/">Material UI</a> to generate the beautiful components with
                Material Design.
              </li>
              <li>
                Use <strong>OOCSS</strong> to manage the general CSS style, it is following{' '}
                <a href="https://getbootstrap.com/">Bootstrap</a>.
              </li>
              <li>
                Use <a href="https://github.com/ReactTraining/react-point">react-point</a> to handle touch events.
              </li>
              <li>
                Use <a href="https://github.com/STRML/react-draggable">react-draggable</a> to handle Drag and Drop.
              </li>
              <li>
                Use <a href="https://lodash.com/">Lodash</a> to control logic methods.
              </li>
              <li>
                Use <a href="https://github.com/JedWatson/classnames">Classnames</a> to manage CSS class name.
              </li>
              <li>
                Use <a href="https://typicode.github.io/husky/#/">Husky</a> to handle pre-commit event.
              </li>
              <li>
                All icons are using <a href="https://material-ui.com/components/material-icons/">Material Icon</a> or{' '}
                <strong>SVG</strong>.
              </li>
              <li>
                Define coding style with <a href="https://prettier.io/">Prettier</a> and <strong>Eslint</strong>.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mx-2 my-2">
          <CardContent>
            <h2 id="features">Features</h2>
            <ul>
              <li>Implement the general functions of calculator.</li>
              <li>
                In the desktop
                <ul>
                  <li>
                    The width of calculator will fix in <code>480px</code>.
                  </li>
                  <li>
                    But when the browser width is smaller than 768px, the width of calculator will fix in{' '}
                    <code>360px</code>.
                  </li>
                  <li>We can drag and drop the calculator to everywhere.</li>
                </ul>
              </li>
              <li>
                In the mobile{' '}
                <ul>
                  <li>
                    Calculator will fix below, and the height is <code>50%</code> of the browser.
                  </li>
                  <li>We can not drag and drop but we can scroll it.</li>
                </ul>
              </li>
              <li>We can open calculator with clicking button and close it with clicking outside.</li>
            </ul>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className={classNames(classes.content, 'vw-100', { [classes.mobileContent]: mobile && open })} ref={nodeRef}>
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
        {ContentComponent()}
      </div>
      {mobile ? (
        open && (
          <div className={classes.paper}>
            <div className={classNames(classes.calculator, 'position-relative')}>
              <Calculator />
            </div>
          </div>
        )
      ) : (
        <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} hideBackdrop>
          <Calculator />
        </Dialog>
      )}
    </React.Fragment>
  );
};

export default CalculatorPage;
