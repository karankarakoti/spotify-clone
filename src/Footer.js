import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

function Footer() {
    return (
        <div className="footer">

            <div className="footer__left">
                <img className="footer__albumLogo" src="data:image/jpeg;base64,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" alt="" />
                <div className="footer__songInfo">
                    <h4>Cradles</h4>
                    <p>Author name</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
