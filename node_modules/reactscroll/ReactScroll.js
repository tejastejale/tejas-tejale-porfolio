
import React, { Component, PropTypes } from 'react';

var win = typeof window !== 'undefined' ? window : false;
var doc = typeof document !== 'undefined' ? document : false;

class ReactScroll extends Component {

  state= {
    scrolling: false,
    positionY: 0,
  }

  componentDidMount() {
    if (win) {
      win.addEventListener('scroll', this.onPageScroll);
    }
  }

  componentWillUnmount() {
    if (win) {
      win.removeEventListener('scroll', this.onPageScroll);
    }
  }

  onPageScroll = () => {

    win.removeEventListener('scroll', this.onPageScroll);
    win.clearTimeout(this.pageScrollTimeout);

    const currentPosY = doc.body.scrollTop;
    const lastPosY = this.state.positionY;

    this.pageScrollTimeout = win.setTimeout(this.onPageScrollEnd, this.props.endScrollTimeout || 300);

    this.setState({
      scrolling: true,
      positionY: currentPosY
    });

    if (typeof this.props.onPageScrollCb === 'function') {
      this.props.onPageScrollCb(currentPosY, lastPosY);
    }

  }

  onPageScrollEnd = () => {

    const currentPosY = doc.body.scrollTop;
    const lastPosY = this.state.positionY;

    if (lastPosY === currentPosY) {

      win.clearTimeout(this.pageScrollTimeout);
      this.setState({
        scrolling: false,
      });
      win.addEventListener('scroll', this.onPageScroll);
      return;

    }

    win.addEventListener('scroll', this.onPageScroll);
  }

  render() {
    return(<div />);
  }

}

export default ReactScroll;
