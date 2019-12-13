import React, { Component } from "react";
import Header from "./Header";
import background_looping from "./background_looping.mp3";
import button_right_sound from "./right_answer.mp3";
import nextlevel_sound from "./next_level.mp3";
import menu_sound from "./menu.mp3";

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const azbuka = {
    consonants: [
        "б",
        "в",
        "г",
        "д",
        "ж",
        "й",
        "к",
        "л",
        "м",
        "н",
        "п",
        "р",
        "с",
        "т",
        "ф",
        "х",
        "ц",
        "ч",
        "ш",
        "щ",
        "ю",
        "я"
    ],
    vowels: ["а", "е", "и", "о", "у", "ъ"]
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 10,
            srichka: "ГЖМЪЦ",
            currentLevel: 1,
            levels: {
                1: {
                    increase: 10,
                    decrease: 5,
                    model: {
                        vowels: 1, // no more then 6
                        consonants: 1,
                        uniqueVowels: true,
                        uniqueConsonants: false
                    }
                },
                2: {
                    increase: 50,
                    decrease: 10,
                    model: {
                        vowels: 1, // no more then 6
                        consonants: 2,
                        uniqueVowels: false,
                        uniqueConsonants: true
                    }
                }
            }
        };
    }

    componentDidMount = () => {
        this.calculateSrichka();
        this.background_music = document.getElementsByClassName(
            "audio-element"
        )[0];
    };

    clickOnIntro = e => {
        this.background_music.play();
    };
    reset = () => {
        console.log("reset");
        this.setState({ currentLevel: 1, score: 0 });
        this.calculateSrichka();

        // sound
        this.menu_sound.play();
    };

    calculateSrichka = () => {
        console.log("calculateSrichka");
        const model = this.state.levels[this.state.currentLevel].model;
        console.info("calculateSrichka model", model);

        // Patch model if it exceeds the limits
        model.vowels =
            model.vowels <= azbuka.vowels.length
                ? model.vowels
                : azbuka.vowels.length;
        model.consonants =
            model.consonants <= azbuka.consonants.length
                ? model.consonants
                : azbuka.consonants.length;

        // vowels
        let vowels = [];
        while (vowels.length < model.vowels) {
            var vowel =
                azbuka.vowels[Math.floor(Math.random() * azbuka.vowels.length)];
            if (model.uniqueVowels) {
                do {
                    vowel =
                        azbuka.vowels[
                            Math.floor(Math.random() * azbuka.vowels.length)
                        ];
                } while (vowels.indexOf(vowel) !== -1);
                // add it to the list
                vowels.push(vowel);
            } else {
                // add it to the list
                vowels.push(vowel);
            }
        }
        console.info("calculateSrichka vowels", vowels);

        // consonants
        let consonants = [];
        while (consonants.length < model.consonants) {
            var consonant =
                azbuka.consonants[
                    Math.floor(Math.random() * azbuka.consonants.length)
                ];
            if (model.uniqueConsonants) {
                do {
                    consonant =
                        azbuka.consonants[
                            Math.floor(Math.random() * azbuka.consonants.length)
                        ];
                } while (consonants.indexOf(consonant) !== -1);
                // add it to the list
                consonants.push(consonant);
            } else {
                // add it to the list
                consonants.push(consonant);
            }
        }

        console.info("calculateSrichka consonants", consonants);

        let allLetters = [...vowels, ...consonants];
        console.info("calculateSrichka allLetters", allLetters);
        shuffleArray(allLetters);
        console.info(
            "calculateSrichka allLetters (affter Shuffle)",
            allLetters
        );

        this.setState({ srichka: allLetters.join("") });
    };

    answerCorrect = () => {
        console.log("answerCorrect");
        const inc = this.state.levels[this.state.currentLevel].increase;
        this.setState({ score: this.state.score + inc });
        this.calculateSrichka();

        // sound
        this.button_right_sound.play();
    };

    answerWrong = () => {
        console.log("answerWrong");
        const dec = this.state.levels[this.state.currentLevel].decrease;
        this.setState({ score: this.state.score - dec });
        this.calculateSrichka();
    };

    nextLevel = () => {
        console.log("nextLevel");
        this.setState({ currentLevel: this.state.currentLevel + 1 });

        // sound
        this.nextlevel_sound.play();
    };

    render() {
        console.info("Game state", this.state);
        return (
            <div className="game_Holder">
                <Header
                    score={this.state.score}
                    handleReset={this.reset}
                    level={this.state.currentLevel}
                />
                <div className="game_Srichka">{this.state.srichka}</div>
                <button className="game_Right" onClick={this.answerCorrect}>
                    ВЯРНО
                </button>
                <button className="game_Wrong" onClick={this.answerWrong}>
                    ГРЕШНО
                </button>

                <button className="game_Button" onClick={this.nextLevel}>
                    NEXT LEVEL
                </button>
                <div className="game_Intro">
                    <button onClick={this.clickOnIntro}>GAME INTRO</button>
                </div>
                <audio className="audio-element" loop>
                    <source src={background_looping} type="audio/mpeg"></source>
                </audio>
                {/* Button Sounds */}
                <audio
                    ref={button_right_sound_ref => {
                        this.button_right_sound = button_right_sound_ref;
                    }}
                >
                    <source src={button_right_sound} type="audio/mpeg" />
                </audio>
                <audio
                    ref={nextlevel_sound_ref => {
                        this.nextlevel_sound = nextlevel_sound_ref;
                    }}
                >
                    <source src={nextlevel_sound} type="audio/mpeg" />
                </audio>
                <audio
                    ref={menu_sound_ref => {
                        this.menu_sound = menu_sound_ref;
                    }}
                >
                    <source src={menu_sound} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default Game;
