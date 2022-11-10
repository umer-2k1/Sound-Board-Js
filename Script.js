
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
sounds.map((snd)=>{
const btn = document.createElement("button")
btn.classList.add("btn")
btn.innerText= snd

btn.addEventListener('click',()=>{
    stopTheSong()
    let new1 = document.getElementById(snd).play()
    console.log(new1)
})

document.querySelector('.buttons-div').appendChild(btn)
}) 

const stopTheSong = () =>{
    sounds.map((snd)=>{
        const song= document.getElementById(snd)
        song.pause()
        song.currentTime = 0
    })
} 