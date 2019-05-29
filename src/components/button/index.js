import React, { Component } from 'react';
import './index.scss';

import classNames from 'classnames';
import _ from 'underscore';

import Icon from '../icon';

const SIZES = {
  default: 'default',
  small: 'small',
  large: 'large',
  xs: 'xs',
};

const TYPES = {
  primary: 'primary',
  danger: 'danger',
};

export default class Button extends Component {

  static defaultProps = {
    type: TYPES.primary,
    size: SIZES.default,
    round: false, // true
    icon: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      inputHeight: 160,
      manualClose: false,
    };
  }

  componentDidMount() {}

  handleBtnClick = (e) => {
    e.persist();

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const {
      children,
      type,
      size,
      round,
      icon,
      className,
    } = this.props;

    const isString = _.isString(children);
    const isIconOnly = icon && _.isUndefined(children);
    const buttonClazz = classNames({
      'oli-button': true,
      'round': round,
      'icon-only': isIconOnly,
    }, type, size, className);

    return (
      <button
        className={buttonClazz}
        type="button"
        onClick={this.handleBtnClick}
      >
        {!!icon && <Icon type={icon} />}
        {
          isString
            ? <span>{children}</span>
            : children
        }
      </button>
    );
  }

}