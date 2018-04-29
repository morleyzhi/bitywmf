import React, { Fragment, Component } from "react";
import styled from "styled-components";

const PLAYER_SIZE = 30;

const Player = styled.button`
  position: absolute;
  top: 0;
  right: -${PLAYER_SIZE}px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: ${PLAYER_SIZE}px;
  height: ${PLAYER_SIZE}px;
  line-height: ${PLAYER_SIZE}px;

  text-align: center;

  text-shadow: 0 1px 0 ${({ theme }) => theme.shadow};
  font-size: 25px;

  color: white;
`;

export default class Audio extends Component {
  state = {
    isPlaying: false,
  };

  _handleClick = () => {
    if (this.state.isPlaying) {
      this.el.pause();
    } else {
      this.el.play();
    }
  };

  _onEnd = () => {
    this.setState({ isPlaying: false });
  };

  render() {
    const { lang } = this.props;
    const { isPlaying } = this.state;
    return (
      <Fragment>
        <Player isPlaying={isPlaying} onClick={this._handleClick}>
          {isPlaying ? (
            <i class="fas fa-volume-up" />
          ) : (
            <i class="fas fa-play-circle" />
          )}
        </Player>

        <audio
          controls=""
          ref={(el) => {
            this.el = el;
          }}
          onPlay={() => this.setState({ isPlaying: true })}
          onPause={() => this.setState({ isPlaying: false })}
          onEnded={() => this.setState({ isPlaying: false })}
        >
          <source
            src={`static/assets/audio/${lang}.ogg`}
            type="audio/ogg; codecs=vorbis"
          />
        </audio>
      </Fragment>
    );
  }
}
