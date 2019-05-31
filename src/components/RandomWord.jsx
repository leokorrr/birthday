import React from 'react';
import '../css/random-word.css';

export default class RandomWord extends React.Component {
    state = {
        left: 50,
        top: 50,
        displayTimeMs: undefined,
        displayTimeSec: undefined
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const left = Math.floor(Math.random() * 90);
            const top = Math.floor(Math.random() * 90);

            this.setState({ left, top })
        },  4500)    
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { left, top } = this.state;

        var style = {
            left: left + '%',
            top: top + '%',
            fontWeight: 'bold',
            padding: '8px',
            animation: 'animate 4.5s linear infinite',
            textTransform: 'uppercase',
            transform: 'rotate(25deg)'
        }

        var cuteArr = [
            'joy',
            'love',
            'cute',
            'beautifull',
            'cheers',
            'laugh',
            'smell',
            'hearth',
            'kind',
            'funny',
            'smile',
            'smart',
            'body',
            'hug',
            'kiss',
            'sleep'
        ]
        return (
            <span className="random-word" style={style}>{cuteArr[Math.floor(Math.random() * cuteArr.length )]}</span>
        )
    }
}