music.ba_ding.play()
game.splash("Give up.")
game.splash("You're not giving up?")
effects.confetti.start_screen_effect()
game.splash("Fine, I'll do it.")
music.magic_wand.play_until_done()
pause(2000)
effects.confetti.end_screen_effect()
game.splash("Happy now?")
effects.smiles.start_screen_effect()
game.splash(":)")
info.start_countdown(10)
scene.set_background_image(assets.image("""
    EVIL
"""))
game.splash("GET READY TO DIE")