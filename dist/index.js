import _regeneratorRuntime from "/Users/michelkansou/Github/react-coinhive-captcha/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/michelkansou/Github/react-coinhive-captcha/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/michelkansou/Github/react-coinhive-captcha/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/michelkansou/Github/react-coinhive-captcha/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/michelkansou/Github/react-coinhive-captcha/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/michelkansou/Github/react-coinhive-captcha/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/michelkansou/Github/react-coinhive-captcha/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import './style.scss';
import RoundCheckbox from './rounded-checkbox.svg';
import loadScript from 'load-script';

var CoinhiveCaptcha =
/*#__PURE__*/
function (_Component) {
  _inherits(CoinhiveCaptcha, _Component);

  function CoinhiveCaptcha(props) {
    var _this;

    _classCallCheck(this, CoinhiveCaptcha);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoinhiveCaptcha).call(this, props));
    _this.miner = null;
    _this.barRef = React.createRef();
    _this.state = {
      progressBar: 0,
      miningIsActive: false
    };
    return _this;
  }

  _createClass(CoinhiveCaptcha, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.buildMiner();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "buildMiner",
    value: function () {
      var _buildMiner = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.miner && this.miner.isRunning()) {
                  this.miner.stop();
                }

                _context2.next = 3;
                return new Promise(function (resolve) {
                  loadScript(_this2.props.minerUrl, function () {
                    if (_this2.props.userName) {
                      return resolve(window.CoinHive.User(_this2.props.siteKey, _this2.props.userName));
                    }

                    return resolve(window.CoinHive.Anonymous(_this2.props.siteKey));
                  });
                });

              case 3:
                this.miner = _context2.sent;
                this.handleProps(this.props);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function buildMiner() {
        return _buildMiner.apply(this, arguments);
      };
    }()
  }, {
    key: "handleProps",
    value: function handleProps(_ref) {
      var throttle = _ref.throttle,
          threads = _ref.threads,
          autoThreads = _ref.autoThreads;

      if (this.miner != null) {
        this.miner.setThrottle(throttle);

        if (autoThreads) {
          this.miner.setAutoThreadsEnabled(autoThreads);
        } else {
          this.miner.setNumThreads(threads);
        }
      }
    }
  }, {
    key: "startMining",
    value: function () {
      var _startMining = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4() {
        var _this3 = this;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setState({
                  miningIsActive: true
                });
                _context4.next = 3;
                return this.miner.start();

              case 3:
                this.miner.on('accepted',
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regeneratorRuntime.mark(function _callee3(data) {
                    var progress;
                    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            progress = data.hashes / _this3.props.maxHash * 100;

                            _this3.setState({
                              progressBar: progress
                            }, function () {
                              if (data.hashes >= _this3.props.maxHash) {
                                _this3.miner.stop();

                                _this3.props.onComplete();

                                setTimeout(function () {
                                  _this3.setState({
                                    miningIsActive: false
                                  });
                                }, 2000);
                              }
                            });

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function startMining() {
        return _startMining.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          miningIsActive = _this$state.miningIsActive,
          progressBar = _this$state.progressBar;
      return React.createElement("div", {
        className: "captcha-container"
      }, miningIsActive ? React.createElement("div", {
        className: "bar"
      }, React.createElement("div", {
        className: "progress",
        style: {
          width: progressBar + '%'
        }
      })) : progressBar === 100 ? React.createElement("span", {
        className: "verified-column"
      }, React.createElement("img", {
        src: RoundCheckbox
      }), React.createElement("p", null, "verified")) : React.createElement("div", {
        className: "captcha-btn-container"
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this4.startMining();
        }
      }), React.createElement("p", null, "Verify me")), React.createElement("div", {
        className: "aside-column"
      }, "Proof of work", React.createElement("a", {
        href: "https://coinhive.com/info/captcha-help"
      }, "What is this?")));
    }
  }]);

  return CoinhiveCaptcha;
}(Component);

export { CoinhiveCaptcha as default };
CoinhiveCaptcha.defaultProps = {
  autoThreads: true,
  siteKey: 'EiQYufg9i1OKaZ8mSoSZrjui9ahcbfjG',
  maxHash: 1024,
  throttle: 0,
  threads: 2,
  username: null,
  minerUrl: 'https://coinhive.com/lib/coinhive.min.js',
  onComplete: function onComplete() {
    return console.log('mining completed');
  }
};