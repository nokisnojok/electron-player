const React = require('react');
const { Component } = require('react');
const { remote } = require('electron');

const BrowserWindow = remote.BrowserWindow;

module.exports = class extends Component {

	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return React.createElement(
			'div',
			{ id: 'playerContent' },
			React.createElement(
				'video',
				{ id: 'player', width: '100%', src: '' },
				'./video/Adele-Rolling-in-the-Deep.mp4'
			),
			React.createElement(
				'div',
				{ id: 'playerControl' },
				React.createElement(
					'div',
					{ className: 'play-progress', id: 'progress', max: '100', value: '20' },
					React.createElement('div', { id: 'progress-left' })
				),
				React.createElement(
					'button',
					{ className: 'play-btn' },
					React.createElement(
						'svg',
						{ height: '100%', version: '1.1', viewBox: '0 0 40 40', width: '100%' },
						React.createElement('use', { className: 'ytp-svg-shadow', xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#ytp-svg-67' }),
						React.createElement('path', { className: 'ytp-svg-fill', d: 'M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z', id: 'ytp-svg-67' })
					)
				),
				React.createElement(
					'span',
					{ className: 'play-time', id: 'time' },
					React.createElement(
						'span',
						{ id: 'current' },
						'0:00'
					),
					'/',
					React.createElement(
						'span',
						{ id: 'duration' },
						'0:00'
					)
				),
				React.createElement(
					'button',
					{ className: 'play-mute', id: 'mute' },
					React.createElement(
						'svg',
						{ width: '100%', height: '100%', version: '1.1', viewBox: '0 0 36 36' },
						React.createElement('use', { className: 'ytp-svg-shadow', xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#ytp-svg-13' }),
						React.createElement('use', { className: 'ytp-svg-shadow', xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#ytp-svg-14' }),
						React.createElement('path', { className: 'ytp-svg-fill ytp-svg-volume-animation-speaker', clipPath: 'url(#ytp-svg-volume-animation-mask)', d: 'M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z', fill: '#fff', id: 'ytp-svg-13' }),
						React.createElement('path', { className: 'ytp-svg-fill ytp-svg-volume-animation-hider', clipPath: 'url(#ytp-svg-volume-animation-slash-mask)', d: 'M 9.25,9 7.98,10 7.98,10 l 0,0 Z', fill: '#fff', id: 'ytp-svg-14' })
					)
				),
				React.createElement(
					'div',
					{ className: 'play-volume', id: 'volume' },
					React.createElement('div', { id: 'volumeleft' })
				),
				React.createElement(
					'button',
					{ id: 'fullscreen' },
					React.createElement(
						'svg',
						{ height: '100%', version: '1.1', viewBox: '0 0 36 36', width: '100%' },
						React.createElement(
							'g',
							null,
							React.createElement('use', { className: 'ytp-svg-shadow', xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#ytp-svg-90' }),
							React.createElement('path', { className: 'ytp-svg-fill', d: 'm 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z', id: 'ytp-svg-90' })
						),
						React.createElement(
							'g',
							null,
							React.createElement('use', { className: 'ytp-svg-shadow', xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#ytp-svg-91' }),
							React.createElement('path', { className: 'ytp-svg-fill', d: 'm 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z', id: 'ytp-svg-91' })
						),
						React.createElement(
							'g',
							null,
							React.createElement('use', { className: 'ytp-svg-shadow', xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#ytp-svg-92' }),
							React.createElement('path', { className: 'ytp-svg-fill', d: 'm 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z', id: 'ytp-svg-92' })
						),
						React.createElement(
							'g',
							null,
							React.createElement('use', { className: 'ytp-svg-shadow', xmlnsXlink: 'http://www.w3.org/1999/xlink', xlinkHref: '#ytp-svg-93' }),
							React.createElement('path', { className: 'ytp-svg-fill', d: 'M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z', id: 'ytp-svg-93' })
						)
					)
				)
			)
		);
	}
};