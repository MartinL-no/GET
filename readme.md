# Hangman <br />

## Overview

A simple hangman app I created to develop my understanding of the Model-View-Controller design pattern.

From working on the project I developed skills in -

- **Writing code that seperates the user interface from the program logic**
- **Creating a reactive user interface without the use of frameworks/libraries**
- **JavaScript page routing without the use of additional tools**
- **Developing model data strtucture**

#### [LIVE LINK](https://martinlrmr-hangman.netlify.app) <br /><br />

## Features

- The app consist of three pages, a start page, game page and results page

- After clicking the start button the user is provided with a random phrase/word to guess. The word and accompanying hint are drawn from the model, and the user interface created by the gameView file

- The user can select letters via the user interface which is updated by the logic in the game controller to show whether the letter was correct.

- The user remaining tries, cumulative score across games and top score are saved in the model during the game
