music.baDing.play()
game.splash("Give up.")
game.splash("You're not giving up?")
effects.confetti.startScreenEffect()
game.splash("Fine, I'll do it.")
music.magicWand.playUntilDone()
pause(2000)
effects.confetti.endScreenEffect()
game.splash("Happy now?")
effects.smiles.startScreenEffect()
game.splash(":)")
info.startCountdown(10)
scene.setBackgroundImage(assets.image`
    EVIL
`)
game.splash("GET READY TO DIE")
