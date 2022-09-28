![sailer_moon](https://user-images.githubusercontent.com/108706408/192653625-95d62b30-ba38-495a-8ad5-02355e8c2fdc.gif) 
# ✨ Sailor Scout Battle! ✨


https://user-images.githubusercontent.com/108706408/192657442-be388ddf-3ea6-4070-a26d-620da04ba939.mp4

[Play Sailor Scout Battle here!](https://tricia-holmes.github.io/rock-paper-scissors/)

## How to Play: 

I created a rock, paper, scissors game with a `Sailor Moon` themed twist called ✨**Sailor Scout Battle!✨**

- Players will be greeted to a home page with an illuminating moon and stars background and upon  `clicking` in the app will be able to hear an `8bit` version of the `Sailor Moon` theme song!

- There are two game modes to **Sailor Scout Battle**, `classic` and `difficult.`

### Classic Mode 🌊 🔥 🌙
___

- If a player chooses to play `classic` mode, they will be taken to the classic game page (dark purple background) and see `three Sailor Scout fighters` for their battle. 

<p align="center">
<img src="https://user-images.githubusercontent.com/108706408/192675579-d342965e-020a-4978-a4be-c4c32c1fc318.png" />
</p>


- The Sailor Scouts for classic are:

    1. Sailor Mercury 🌊, 
    1. Sailor Mars 🔥, 
    1. Sailor Moon 🌙
    

- The player's side will be on the left and their score will be kept in the `wins` under`Human 🌙`. 

- The opponent is a computer and their score will be kept on the right side in the `wins` under `Computer 👾`. 

- In order to start a round, a player must select the `fighter` of their choice by clicking on one of the Sailor Scouts in the center of the page. Once a player has selected a fighter, then the round will play out. 

- The player's fighter will go up against the computer's fighter and will see who wins by watching the `Sailor Scouts` battle in the middle. 

- Whoever `attacks` wins and whoever `falls` loses. The winner will then `celebrate` 🎉 

- If it's a `draw`, the chosen Sailor Scout fighters will stand idly by waiting for another scout battle to commence. 

- The results will also be displayed in the `subtitle` under `Classic Battle`.

- After a round had been played the `wins` will be updated for the winner and the board will reset. It's now time to play another round!

- Want to change it up? There's a `Change Game?` button in the bottom right-hand corner. A player can click on this button to go back to the `home page` and select a different game mode.

### Difficult Mode 🌊 🔥 🌙 💕 ⚡️
___

- If a player chooses to play `difficult` mode, they will be taken to the difficult game page (pastel purple blue background) and see `five Sailor Scout fighters` for their battle. 

- The game is setup the same as `classic` with more fighters to choose from and more outcomes.

<p align="center">
<img src="https://user-images.githubusercontent.com/108706408/192675479-8526ef86-aef6-4455-a415-fe82533ab616.png" />
</p>


- The Sailor Scouts for difficult are:

    1. Sailor Venus 💕, 
    1. Sailor Mercury 🌊, 
    1. Sailor Mars 🔥, 
    1. Sailor Moon 🌙, 
    1. Sailor Jupiter ⚡️

- Just like with `classic`, a player can go back to the `home page` using the `Change Game?` button on the bottom right hand side.

### Win Map <img src="https://user-images.githubusercontent.com/108706408/192685203-ae70ae42-9218-48b0-92ce-de5c912b17f4.gif" width="25" height="25"/>
___ 
<p align="center">
<img src="https://user-images.githubusercontent.com/108706408/192673918-56f07c16-98de-488a-8e18-8185dc4a4c1e.png" />
</p>

# Context + Resources:

I am currently a 2208 Mod 1 student at Turing in the frontend program. This is the final solo project of Mod 1. The technologies used for it were `HTML`, `CSS`, and `Vanilla Javascript`. The project was to create a rock, paper, scissors game where a player went up against a computer. 

Early on in developement, I knew I would like for the game to have a `Sailor Moon` theme with an animated background in an `8bit` retro game aesthetic. A very specific style, but I was very hopeful it could all come together!

I was so lucky to find the sprites of my dreams on [The Spriters Resource](https://www.spriters-resource.com/ds_dsi/sailormoonlalunasplende/). Someone had uploaded a spritesheet from an old Nintendo DS Italian Sailor Moon game called `Sailor Moon: La Luna Splende`. 

<p align="center">
<img src="https://user-images.githubusercontent.com/108706408/192678748-28d28885-86ef-4598-a966-9c6dab77f8f8.jpeg" />
</p>


Besides setting up the initial data model for the game, finding these sprites was my first huge win!

<p align="center">
<img src="https://user-images.githubusercontent.com/108706408/192687395-974893f1-1544-4e01-890d-c9bb989c647e.png" />
</p>

Along with finding the sprites, another amazing find was this [animated background](https://www.etsy.com/listing/1274934700/pixel-starry-sky-screen-animated-screen?click_key=778c1fffd2c97c08de1061b7180ab3d7b579e5a8%3A1274934700&click_sum=82335c9b&ref=shop_home_recs_6) on Etsy by `KaeriCorner`. Originally, it was created with text for Twitch Strems. They were so kind and updated the background to not have any text so it could be used as the background for the game. I ended up getting 3 varying color schemes of this background so each screen in the game has a subtly different background.


After getting the game logic setup and the placeholder `CSS` and `HTML`, I focused on getting the `CSS Animations` created. The Sailor Scouts are animated using `CSS Keyframes`. In order to get the flow right, I used `Figma` to splice out the sprites I needed from the original spritesheets and then created my own spritesheets. Each Sailor Scout needed to have the same dimensions in order to have a minimal amount of CSS classes and keyframes. Below is an example of a spritesheet I created in Figma. The Sailor Scout first got spliced out of the original sheet, then was equally spaced out and placed with colorful squares to help visualize. Once all the frames were completed for the Sailor Scout, the spritesheet was exported with a transparent background. 

<p align="center">
<img src="https://user-images.githubusercontent.com/108706408/192682609-726dcfc8-0236-4918-916a-e3177983900d.png" />
</p>

The final fun find for this project was discovering that there is an awesome 8bit version of the Sailor Moon theme song on [Amazon by 8 Bit Universe](https://www.amazon.com/Sailor-Moon-Theme-Bit-Version/dp/B01HC4MOPU). <img src="https://user-images.githubusercontent.com/108706408/192684763-842f336b-a941-47b1-b0c2-6dc1e11f3ad7.gif" width="25" height="25"/>


# Installation Instructions

- `Fork` this repo to your own Github account
- `Clone` the repository to your local machine
- `cd` into the repo
- View the project in the browser by running `open index.html` in your terminal

# Contributors:
[Tricia Holmes](https://github.com/tricia-holmes)

# Learning Goals:

The `Learning Goals` were: 
- Solidify and demonstrate your understanding of:
    DRY JavaScript    
    event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

# Wins + Challenges:
- A huge `win` for me was having a specific aesthetic in mind and getting to see it come together!
- I really wanted to challenge myself with `CSS` for this project. My ohter `win` as well as biggest `challenge` would be the `CSS animations` for all of the Sailor Scouts. All scouts had to have `spritesheets` created with even dimensions in order to sucessfully use `CSS keyframes`. It took a lot of work both with `Figma` and `CSS` to get the animations to work. 
