/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 31 2024
 * This program moves pixels
*/

// Setting the varibels
let sprite: game.LedSprite = null
//let loopCounter = 0
let xcnt = 0
let ycnt = 0

// Setting the screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Setting the while loop for button a.
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    xcnt = 0
    ycnt = 0
    sprite = game.createSprite(0, 0)
    // Setting the loop for 
    while (xcnt <= 5) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        xcnt++
        basic.pause(500)
    }
    basic.pause(500)
    while (ycnt <= 5) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        ycnt++
        basic.pause(500)
    }
    basic.pause(500)
    while (xcnt > -1) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        xcnt--
        basic.pause(500)
    }
    basic.pause(500)
    while (ycnt > -1) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        ycnt--
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    xcnt = 4
    ycnt = 4
    sprite = game.createSprite(5, 5)
    while (ycnt > 0) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        ycnt--
        basic.pause(500)
    }
    while (xcnt > 0) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        xcnt--
        basic.pause(500)
    }
    while (ycnt < 5) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        ycnt++
        basic.pause(500)
    }
    while (xcnt < 5) {
        sprite.set(LedSpriteProperty.X, xcnt)
        sprite.set(LedSpriteProperty.Y, ycnt)
        xcnt++
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})