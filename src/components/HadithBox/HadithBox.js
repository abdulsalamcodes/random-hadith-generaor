import classes from './HadithBox.module.css'
import React from 'react'
import { FaFacebook, FaQuoteLeft, FaQuoteRight, FaQuran, FaTwitter } from 'react-icons/fa';
import { FacebookButton, TwitterButton } from "react-social";

function HadithBox({ hadith, action, color }) {
    const styles = {color: color }
    const Button = ({ children, handleClick }) => {
        return <button style={{ backgroundColor: color }} className={classes.Button} onClick={handleClick}>{children}</button>
    }

    let url = "https://hadith-generator.vercel.app";


    return (
        <div className={classes.HadithBox} style={styles}>
            <div>
                <div className={classes.Hadith}>
                    <FaQuoteLeft />
                    <span className={classes.Text}>{hadith && hadith.hadith}</span>
                    <FaQuoteRight />
                </div>
                <div className={classes.Reference}><FaQuran /> {hadith && hadith.reference}</div>

            </div>
            <footer className={classes.BoxFooter}>
                <div>
                    <Button >
                        <TwitterButton url={url}  element="i" message={hadith && hadith.hadith + "Reference" + hadith.reference}>
                            <FaTwitter />
                        </TwitterButton>
                    </Button>
                    <Button>
                        <FacebookButton url={url} element="i" appId={907782143292298}>
                            {<FaFacebook />}
                        </FacebookButton>
                    </Button>
                </div>

                <Button handleClick={action}>New Hadith</Button>
            </footer>
        </div>
    )
}

export default HadithBox
