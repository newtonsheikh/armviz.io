import { Children, cloneElement, Component, MouseEventHandler } from 'react';

interface DraggableProps {
  onDragStart?: DraggableEventHandler;
  onDragMove?: DraggableEventHandler;
  onDragEnd?: DraggableEventHandler;
}

interface DraggableState {
  initX: number;
  initY: number;
}

export interface DraggableEvent {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
}

export type DraggableEventHandler = (event: DraggableEvent) => any;

export class Draggable extends Component<DraggableProps, DraggableState> {
  state = { initX: NaN, initY: NaN };

  handleMouseDown: MouseEventHandler<HTMLElement> = e => {
    // Left-clicks only
    if (e.button === 0) {
      e.preventDefault();

      document.addEventListener('mouseup', this.handleMouseUp);
      document.addEventListener('mousemove', this.handleMouseMove);

      this.setState({ initX: e.clientX, initY: e.clientY });
      this.fireEvent(this.props.onDragStart, {
        x: e.clientX,
        y: e.clientY,
        offsetX: 0,
        offsetY: 0
      });
    }
  };

  handleMouseUp = (e: MouseEvent) => {
    e.preventDefault();

    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('mousemove', this.handleMouseMove);

    this.setState({ initX: NaN, initY: NaN });
    this.fireEvent(this.props.onDragEnd, {
      x: e.clientX,
      y: e.clientY,
      offsetX: 0,
      offsetY: 0
    });
  };

  handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();

    const { initX, initY } = this.state;
    this.fireEvent(this.props.onDragMove, {
      x: e.clientX,
      y: e.clientY,
      offsetX: e.clientX - initX,
      offsetY: e.clientY - initY
    });
  };

  fireEvent(handler: DraggableEventHandler, event: DraggableEvent) {
    if (handler) {
      handler(event);
    }
  }

  render() {
    const { children } = this.props;
    const { handleMouseDown } = this;
    return cloneElement(Children.only(children), {
      onMouseDown: handleMouseDown
    });
  }
}
