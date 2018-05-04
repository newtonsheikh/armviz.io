import React, { Component } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { styled } from 'theming';

const StyledScrollbars = styled(Scrollbars)`
  > .track {
    opacity: 0;
    > .thumb {
      background: hsla(0, 0%, 47%, 0.4);
    }
    &:active {
      opacity: 1;
    }
  }
  > .track-vertical {
    top: 0;
    right: 0;
    height: 100%;
    width: 14px !important;
  }
  > .track-horizontal {
    bottom: 0;
    left: 0;
    height: 10px !important;
    width: 100%;
  }
  &:hover {
    > .track {
      opacity: 1;
    }
  }
`;

export class ScrollArea extends Component {
  renderView = (props: any) => <div {...props} className="scroll-view" />;

  renderTrackVertical = (props: any) => <div {...props} className="track track-vertical" />;

  renderTrackHorizontal = (props: any) => <div {...props} className="track track-horizontal" />;

  renderThumb = (props: any) => <div {...props} className="thumb" />;

  render() {
    const { props, renderView, renderTrackVertical, renderTrackHorizontal, renderThumb } = this;
    return (
      <StyledScrollbars
        {...props}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
        renderTrackHorizontal={renderTrackHorizontal}
        renderThumbVertical={renderThumb}
        renderThumbHorizontal={renderThumb}
      />
    );
  }
}
