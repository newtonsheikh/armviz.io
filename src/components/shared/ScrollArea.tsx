import React, { Component } from 'react';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import { styled } from 'theming';

interface ScrollAreaProps {
  className?: string;
}

const ScrollAreaWrapper = styled.div`
  .simplebar-track.vertical {
    width: 12px;
    .simplebar-scrollbar {
      right: 0;
      width: 100%;
    }
    .simplebar-scrollbar::before {
      top: 0;
      bottom: 0;
      border-radius: 0;
      background: hsla(0, 0%, 47%, 0.4);
    }
    .simplebar-scrollbar.visible::before {
      opacity: 1;
    }
  }
  .simplebar-track.horizontal {
    height: 10px;
    .simplebar-scrollbar {
      top: 0;
      height: 100%;
    }
    .simplebar-scrollbar::before {
      left: 0;
      right: 12.5px;
      border-radius: 0;
      background: hsla(0, 0%, 47%, 0.4);
    }
    .simplebar-scrollbar.visible::before {
      opacity: 1;
    }
  }
`;

export class ScrollArea extends Component<ScrollAreaProps> {
  render() {
    const { className, children } = this.props;
    return (
      <ScrollAreaWrapper className={className} data-simplebar={true}>
        {children}
      </ScrollAreaWrapper>
    );
  }
}
