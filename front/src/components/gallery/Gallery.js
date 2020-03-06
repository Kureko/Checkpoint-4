import React from 'react';
import './Gallery.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Gallery = () => {
    return(
        <div className="gallery-main">
            <Navbar />
            <div>
                <h1 className="gallery-main-title">Links list</h1>
                <div className="sources">
                    <a href="https://0m5ks98kpz-flywheel.netdna-ssl.com/wp-content/uploads/2017/02/Wood-Grain-Background-1.jpg" className="source-one" target="_blank" rel="noopener noreferrer">
                        Link image Navbar, Footer, and separation
                    </a>
                    <a href="https://vignette.wikia.nocookie.net/howtotrainyourdragon/images/6/67/Nightlight3render.png/revision/latest?cb=20190513002915" className="source-two" target="_blank" rel="noopener noreferrer">
                        Night Light
                    </a>
                    <a href="https://img1.wikia.nocookie.net/__cb20140117235734/howtotrainyourdragon/images/3/35/Toothless_insignia.png" className="source-three" target="_blank" rel="noopener noreferrer">
                        Toothless icon
                    </a>
                    <a href="https://66.media.tumblr.com/fd418f7f3c40d674e54ac811278be7f2/tumblr_msgys3ajcv1rjvcklo1_400.png" className="source-four" target="_blank" rel="noopener noreferrer">
                        Stoker icon
                    </a>
                    <a href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d4a8dbf-84c1-46f3-b740-e10dd863774f/d5hwjg5-b2b1199f-ced3-4761-a6ee-e59bd6421568.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkNGE4ZGJmLTg0YzEtNDZmMy1iNzQwLWUxMGRkODYzNzc0ZlwvZDVod2pnNS1iMmIxMTk5Zi1jZWQzLTQ3NjEtYTZlZS1lNTliZDY0MjE1NjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B4BMEgTJVmF2Z5YXtkv0pds9AUatul5OSIWET6lCpSY" 
                    className="source-five" target="_blank" rel="noopener noreferrer">
                        Mystery icon
                    </a>
                    <a href="https://i.pinimg.com/originals/74/0b/c2/740bc2af6a1a13e334af4a09f5c668ee.png" className="source-six" target="_blank" rel="noopener noreferrer">
                        Boulder icon
                    </a>
                    <a href="https://66.media.tumblr.com/a3917dbfa515d24bbe8f76a7c83b1073/tumblr_msgyspAeA21rjvcklo1_400.png" className="source-seven" target="_blank" rel="noopener noreferrer">
                        Tidal icon
                    </a>
                    <a href="https://i.pinimg.com/originals/9d/67/f9/9d67f9b986d090ae81e0b12f1fcf9e2e.png" className="source-eight" target="_blank" rel="noopener noreferrer">
                        Strike icon
                    </a>
                    <a href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d4a8dbf-84c1-46f3-b740-e10dd863774f/d5hwiwi-12f0ed9a-8c65-445f-84ca-23cd95b1cd34.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wZDRhOGRiZi04NGMxLTQ2ZjMtYjc0MC1lMTBkZDg2Mzc3NGYvZDVod2l3aS0xMmYwZWQ5YS04YzY1LTQ0NWYtODRjYS0yM2NkOTViMWNkMzQucG5nIn1dXX0.kCVb7uU6Q0jtsHIJQlwGMhOaOUgq2zrST3JgzqH-IR4" 
                    className="source-nine" target="_blank" rel="noopener noreferrer">
                        Tracker icon
                    </a>
                    <a href="https://vignette.wikia.nocookie.net/how-to-train-your-dragon/images/7/77/Zephyr_haddock.png/revision/latest?cb=20190413190436&path-prefix=fr" className="source-ten" target="_blank" rel="noopener noreferrer">
                        Zephyr
                    </a>
                    <a href="https://vignette.wikia.nocookie.net/how-to-train-your-dragon/images/4/44/Nuffink_haddock.png/revision/latest?cb=20190413191149&path-prefix=fr" className="source-eleven" target="_blank" rel="noopener noreferrer">
                        Nuffink
                    </a>
                    <a href="https://vignette.wikia.nocookie.net/howtotrainyourdragon/images/e/e0/AstridHiddenWorldTop.png/revision/latest?cb=20190224213444" className="source-twelve" target="_blank" rel="noopener noreferrer">
                        Astrid
                    </a>
                    <a href="https://vignette.wikia.nocookie.net/howtotrainyourdragon/images/d/d0/HiccupHiddenWorld.png/revision/latest?cb=20190224210653" className="source-thirteen" target="_blank" rel="noopener noreferrer">
                        Hiccup
                    </a>
                    <a href="https://i.pinimg.com/originals/91/be/1a/91be1a4c07a3c076216b12da129d8fbe.png" className="source-fourteen" target="_blank" rel="noopener noreferrer">
                        Light Fury
                    </a>
                    <a href="https://vignette.wikia.nocookie.net/riseofberk/images/c/c2/Toothless_-_NBG.png/revision/latest/scale-to-width-down/340?cb=20170121205508" className="source-fifteen" target="_blank" rel="noopener noreferrer">
                        Toothless
                    </a>
                    <a href="https://cdna.artstation.com/p/assets/images/images/001/598/698/large/ben-cope-stylized-wood-01.jpg?1449227818"className="source-sixteen" target="_blank" rel="noopener noreferrer">
                        Dragons and characters text frame
                    </a>
                    <a href="https://vignette.wikia.nocookie.net/howtotrainyourdragon/images/2/26/BERK2.png/revision/latest?cb=20140805201717" className="source-seventeen" target="_blank" rel="noopener noreferrer">
                        Home page header image
                    </a>
                    <a href="https://pngimage.net/wp-content/uploads/2018/06/papier-ancien-png.png" className="source-eighteen" target="_blank" rel="noopener noreferrer">
                        Dragons and characters background
                    </a>
                    <a href="https://i.pinimg.com/originals/73/67/9a/73679a517c8a7d67182f0591ba1d0512.png" className="source-nineteen" target="_blank" rel="noopener noreferrer">
                        Button icon
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gallery;