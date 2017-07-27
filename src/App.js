import React, { Component } from 'react';
import cn from 'classnames';

class App extends Component {
  constructor() {
    super();
    this.state = {
      on: false,
      radioText: 'Hello, friend'
    };
  }

  toggleBoombox() {
    const { on } = this.state;
    this.setState({on: !on});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({radioText: 'Press the red button'});
    }, 3000);

    setTimeout(() => {
      this.setState({radioText: 'And we\'ll go to the music world'});
    }, 5000);

    setTimeout(() => {
      this.setState({radioText: 'Let\'s go fun!'});
    }, 8000);

    setTimeout(() => {
      this.setState({radioText: '---'});
    }, 10000);
  }

  render() {
    const { on, radioText } = this.state;

    return (
      <div className="layout">
        <div className="boombox">
          <div className={cn('boombox_indicator', {
            'boombox_indicator_on': on
          })} />

          <div className={cn('boombox_tumbler', {
            'boombox_tumbler_on': on
          })} onClick={this.toggleBoombox.bind(this)} />

          <div className="radio">
            <div className="radio_deck">
              {radioText}
            </div>

            <div className="radio_switch">
              <div className="radio_switch-dot" />
            </div>
          </div>

          <div className={cn('accoustic accoustic_left', {
            'bounce': on
          })}>
            <div className="accoustic_cern" />
            <div className="accoustic_grid" />
          </div>

          <div className="deck-block">
            <div className="deck_playback-text">
              Hi-fi playdeck system
            </div>
            <div className="deck_eject-btn" />
            <div className="deck_meter">
              <span>0</span>
              <span>0</span>
              <span>1</span>
            </div>
            <div className="deck">
              <div className="deck_window">
                <div className={cn('deck_window_circle deck_window_circle_left', {
                  'spin': on
                })}>
                  <div className="deck_window_circle_inner" />
                </div>
                <div className={cn('deck_window_circle deck_window_circle_right', {
                  'spin': on
                })}>
                  <div className="deck_window_circle_inner" />
                </div>
              </div>
            </div>

            <div className="deck-btns">
              <div className="deck-btn-grad" />
              <div className="deck-btn-grad" />
              <div className="deck-btn-grad" />
              <div />
              <div className="deck-btn-grad" />
              <div />
            </div>
          </div>

          <div className={cn('accoustic accoustic_right', {
            'bounce': on
          })}>
            <div className="accoustic_cern" />
            <div className="accoustic_grid" />
          </div>

          <div className="leg leg_left" />
          <div className="leg leg_right" />
        </div>
      </div>
    );
  }
}

export default App;
