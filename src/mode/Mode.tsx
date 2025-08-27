import { useState } from 'react'
import "./mode.css"

export default function Mode() {
    const moods = ["😀 Happy", "😡 Angry", "😢 Sad", "😐 Neutral"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];

    const [mood, setMode] = useState("😐 Neutral")
    const [listMood, setModeed] = useState<string[]>([])
    const [count, setCont] = useState({ count1: 0, count2: 0, count3: 0 })

    return (
        <div>
            <header className='header'>mood page</header>
            <div className='mode'>{mood}</div>
            <button onClick={() => {
                setMode(" Angry 😡");
                setModeed(() => [" Angry 😡", ...listMood]);
                setCont(c => ({ ...c, count1: c.count1 + 1 }));

            }}>{count.count1} Angry 😡</button>
            <button onClick={() => {
                setMode(" Happy 😀");
                setModeed(() => ["  Happy 😀", ...listMood]);
                setCont(c => ({ ...c, count2: c.count2 + 1 }));
            }}>{count.count2} Happy 😀</button>

            <button onClick={() => {
                setMode(" Sad 😢");
                setModeed(() => ["Sad 😢", ...listMood]);
                setCont(c => ({ ...c, count3: c.count3 + 1 }));
            }}>{count.count3} Sad 😢</button>

            <h2>
                3 least
            </h2>

            {listMood.slice(1, 4).map(e =>
                <div id='leastMode'>{e}</div>
            )}
            <div className='a' >
            <button className='butoon' onClick={() => {
                setMode("😐 Neutral");
                setModeed(() => [""]);
                setCont({ count1: 0, count2: 0, count3: 0 })
            }}>reset</button>

            <button className='butoon' onClick={() => {
                setMode(randomMood)
                    ; setModeed(() => [randomMood, ...listMood]);
                setCont(c => {
                    if (randomMood.includes("Angry")) return { ...c, count1: c.count1 + 1 }
                    if (randomMood.includes("Happy")) return { ...c, count2: c.count2 + 1 }
                    if (randomMood.includes("Sad")) return { ...c, count3: c.count3 + 1 }
                    return c;
                })
            }}>random</button>
            </div>

        </div>
    )
}
