import React, { Component } from "react";
import Header from "./Header";
import background_looping from "./background_looping.mp3";
import button_right_sound from "./right_answer.mp3";
import button_wrong_sound from "./wrong_answer.mp3";
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
            score: 0,
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
                    },
                    maxscore: 100
                },
                2: {
                    increase: 20,
                    decrease: 10,
                    model: {
                        vowels: 1, // no more then 6
                        consonants: 2,
                        uniqueVowels: false,
                        uniqueConsonants: true
                    },
                    maxscore: 500
                },
                3: {
                    increase: 50,
                    decrease: 10,
                    model: {
                        vowels: 2, // no more then 6
                        consonants: 3,
                        uniqueVowels: true,
                        uniqueConsonants: true
                    }
                }
            },
            hideIntro: false,
            anim_Srichka: false
        };
    }

    componentDidMount = () => {
        this.calculateSrichka();
        this.background_music = document.getElementsByClassName(
            "audio-element"
        )[0];
    };

    clickOnIntro = e => {
        this.setState({ hideIntro: true });
        this.background_music.play();
    };
    reset = () => {
        console.log("reset");
        this.setState({ currentLevel: 1, score: 0, hideIntro: false });

        // force state update
        //this.setState({});

        //this.calculateSrichka();

        // sound
        this.menu_sound.play();
    };

    calculateSrichka = () => {
        console.info(
            "calculateSrichka this.state.currentLevel",
            this.state.currentLevel
        );
        const levels = this.state.levels;
        const currentLevel = this.state.currentLevel;
        const model = levels[currentLevel].model;
        console.info("calculateSrichka model", model);

        this.setAnimationForTime("game_Srichka", "game_anim_Flyin", 1000);

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

        this.setAnimationForTime("game_Right", "game_anim_Press", 1000);

        const inc = this.state.levels[this.state.currentLevel].increase;

        const new_score = this.state.score + inc;
        if (new_score >= this.state.levels[this.state.currentLevel].maxscore) {
            this.nextLevel();
            this.setState({ score: new_score });
            return true;
        }

        this.setState({ score: new_score });
        this.calculateSrichka();

        // sound
        this.button_right_sound.play();
    };

    answerWrong = () => {
        console.log("answerWrong");

        this.setAnimationForTime("game_Wrong", "game_anim_Press", 1000);

        const dec = this.state.levels[this.state.currentLevel].decrease;
        let new_score = this.state.score - dec;
        new_score = new_score < 0 ? 0 : new_score;
        this.setState({ score: new_score });
        this.calculateSrichka();

        // sound
        this.button_wrong_sound.play();
    };

    setAnimationForTime = (elementClass, animName, animTime) => {
        document
            .getElementsByClassName(elementClass)[0]
            .classList.add(animName);
        setTimeout(function() {
            document
                .getElementsByClassName(elementClass)[0]
                .classList.remove(animName);
        }, animTime);
    };

    nextLevel = () => {
        console.log("nextLevel");
        this.setState({ currentLevel: this.state.currentLevel + 1 });

        setTimeout(
            function(that) {
                that.calculateSrichka();
            },
            50,
            this
        );

        // sound
        this.nextlevel_sound.play();
    };

    render() {
        console.info("Game state", this.state);
        const gameClass = `game_Holder game_Level${this.state.currentLevel}`;
        return (
            <div className={gameClass}>
                <div className="game_Wallpaper">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="game_Container">
                    <Header
                        score={this.state.score}
                        handleReset={this.reset}
                        level={this.state.currentLevel}
                    />
                    <div
                        className={
                            this.anim_Srichka
                                ? "game_Srichka game_anim_Bounce"
                                : "game_Srichka"
                        }
                    >
                        <span>{this.state.srichka}</span>
                    </div>
                    <div className="game_ButtonsHolder">
                        <button
                            className="game_Right"
                            onClick={this.answerCorrect}
                        >
                            ВЯРНО
                        </button>
                        <button
                            className="game_Wrong"
                            onClick={this.answerWrong}
                        >
                            ГРЕШНО
                        </button>
                    </div>

                    {/* <button className="game_Button" onClick={this.nextLevel}>
                        NEXT LEVEL
                    </button> */}
                </div>

                {!this.state.hideIntro ? (
                    <div className="game_Intro">
                        <h1>Сричка</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Vel eveniet amet repellat fugiat rem officiis
                            maiores, debitis sint sed dolorum blanditiis
                            accusantium recusandae esse quos voluptates minima
                            voluptatem, obcaecati voluptas.
                        </p>
                        <button onClick={this.clickOnIntro}>СТАРТ</button>
                    </div>
                ) : null}

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
                    ref={button_wrong_sound_ref => {
                        this.button_wrong_sound = button_wrong_sound_ref;
                    }}
                >
                    <source src={button_wrong_sound} type="audio/mpeg" />
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
