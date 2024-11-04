/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 31 2024
 * This program moves pixels
*/

// Setting the varibels
let sprite: game.LedSprite = null
let loopCounter = 0
let xcnt = 0
let ycnt = 0

// Setting the screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Setting the while loop for button a.
 input.onButtonPressed(Button.A,function(){
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    // Setting the loop for 
    while (loopCounter < 5){
        sprite.set(LedSpriteProperty.X ,xcnt)
        game.createSprite(4 ,0)
        xcnt = xcnt++

        while (loopCounter < 5) {
            sprite.set(LedSpriteProperty.X, xcnt)
            sprite.set(LedSpriteProperty.Y, ycnt)
            game.createSprite(4, 4)
            ycnt = ycnt++
        }
        while(loopCounter>-1)
        sprite.set(LedSpriteProperty.X, xcnt)
        game.createSprite(5, 2)
        xcnt = xcnt--
    }
    while(loopCounter >-1){
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        game.createSprite(5, 4)
        ycnt--
    }
   
})