//playlist object
const playlist = [
    {
        hits: 'Love hits',
        movieName: 'Tollywood party',
        track: 'Elankaathu...',
        id: '1',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KR50cm7tgZr7HxUyVO56GiPBEn8qNP5bzQ&usqp=CAU',
        path: "/music/1.mp3"
    },
    {
        hits: 'Rock hits',
        path: "/music/2.mp3",
        movieName: 'Hollywood party',
        track: 'kannana kanne...',
        id: '2',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahgQNsCzexuH8X0KpTC-3RXsYIGE66BhvFg&usqp=CAU'
    },
    {
        hits: 'Dance hits',
        track: 'kannalane...',
        id: '3',
        movieName: 'Mollywood party',
        path: "/music/3.mp3",
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST06CA15esePRMhz3pKOfb65U1kAm-NAzWMQ&usqp=CAU'
    },
    {
        hits: 'party hits',
        movieName: 'Bollywood party',
        track: 'Nee paartha..',
        path: "/music/4.mp3",
        id: '4',
        year: '2023',
        img: 'https://source.boomplaymusic.com/group10/M00/11/10/6fbe9a10e5904f1b9d889c9b719fb086_320_320.jpg'
    },
    {
        track: 'oru paathi..',
        movieName: 'Kollywood party',
        hits: 'Melody hits',
        id: '5',
        path: "/music/5.mp3",
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqmL2ikyo6iUBj3xRYz11nemRwwJeE7lLTA&usqp=CAU'
    },
    {
        movieName: 'AR Rahman',
        track: 'Simtangaara..',
        hits: 'Peaceful piano to help you slow down, breath...',
        year: '2023',
        id: "6",
        path: "/music/6.mp3",
        img: 'data:image/jpeg;base64,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'
    },
    {
        movieName: 'GV.Prakash',
        hits: 'Keep calm with ambient and post-..',
        year: '2023',
        track: "Sirikkathy..",
        id: "7",
        path: "/music/7.mp3",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsKijP9Z3mjr55dqeyqhJJMUj4piAw5YEaQ&usqp=CAU'
    },
    {
        movieName: 'Anirudh',
        hits: 'Focus with soft study music in the background.',
        year: '2023',
        track: "Thalli pogathy..",
        id: "8",
        path: "/music/8.mp3",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCJfFTFgfXzVUHf-7hYfgIJZfFnlP0c_6sA&usqp=CAU'
    },
    {
        movieName: 'Illayaraja',
        hits: 'Kick back to the best new and recent chill hits',
        year: '2023',
        track: "Unakul naane..",
        id: "9",
        path: "/music/9.mp3",
        img: 'data:image/jpeg;base64,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'
    },
    {
        movieName: 'D.Imman',
        hits: 'Rock Legends & epic songs that continue to...',
        year: '2023',
        track: "Unnavidaa...",
        id: "10",
        path: "/music/10.mp3",
        img: 'data:image/jpeg;base64,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'
    }
]
const bottomPlayer = document.getElementById('bottomPlay')

bottomPlayer.innerHTML = `   
    <ul class="recentUl">
    <li>
        <img src="${playlist[0].img}" class='recentImg bottomImg' alt="">
    </li>
    <li class="recentlist">
        <div class="col-md-auto">${playlist[0].track}</div>
    </li>`

//audio tag define
const audio = new Audio("/music/1.mp3")
const songArray = new Array()

//display each play list like a card
const recentList = document.getElementById('div')
playlist.forEach((s, i) => {
    const row1 = document.getElementById('row1')
    const cardBody = createSongCard(s, i);
    row1.innerHTML += cardBody;
    songArray.push(cardBody)    
});

function createSongCard(arrayDetails, i) {
    return `
    <div class="col-mg-5 displayList">
    <div class="card card1" style="width: 11rem; background: rgba(128, 128, 128, 0.103) !important;">
    <img src=${arrayDetails.img} class="card-img-top" alt="...">
    <i class="fa-regular fa-heart fav" id="${arrayDetails.id}" data-index="${i}" style="backgroundcolor:white"></i>
    <i class="fa-solid fa-play playButton" id="${arrayDetails.id}" data-index="${i}"></i>
  <div class="card-body">
    <h5 class="card-title">${arrayDetails.movieName}</h5>
    <p class="card-text songTrack">${arrayDetails.track}</p>
  </div>
</div>
</div>`
}

//show all and show less playlist

let hide=document.querySelectorAll('.displayList')
//console.log(hide)
const show = document.getElementById('showAll')
hide.forEach((element,index)=>{
    if(index<5){
        element.style.display="block";
    }else{
        element.style.display="none";
    }
    show.innerHTML=`Show all`

})


show.addEventListener('click',()=>{
    if(show.innerHTML=="Show all"){
        hide.forEach((element)=>{
            element.style.display="block";
            show.innerHTML=`Show less`
        })
    }else{
        hide.forEach((element,index)=>{
            if(index<5){
                element.style.display="block";
            }else{
                element.style.display="none";
            }
            show.innerHTML=`Show all`
        
        })
        
    }

})

//show all and show less favorite list cards


favShowAll.addEventListener('click',()=>{
    const favShow=document.querySelectorAll('.displayFavList')
    const favShowAll=document.getElementById('favShowAll')
    console.log('f',favShow)

    favShow.forEach((element,index)=>{
        if(index<5){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
        favShow.innerHTML=`Show all`

    })

    if(favShowAll.textContent=="Show all"){
        favShow.forEach((element)=>{
            element.style.display="block";
        })
        favShowAll.innerHTML=`Show less`
    }else{
        
    }

})





// const hide = playlist.filter((data) => {
//     //console.log(data.id>5)
//     return data.id > 4
// })
// // const showHide=hide
// console.log(hide)
// hide.forEach((element) => {
//     // const h=document.getElementById(`id${element.id}`).style.display="none"

// })
// 
// show.addEventListener('click', () => {
//     alert('hi')
//     hide.forEach((element) => {
//         const h1 = document.getElementById(`id${element.id}`)
//         h1.style.display = "block"
//         console.log(h1)
//     })
// })


const recentPlayed = new Array()
//play function start
const getSongIndex = document.querySelectorAll('.playButton').forEach((a) => {
    a.addEventListener('click', (event) => {
        const index = event.target.id
        playSong(index, a)  //=> call masterplay function
        recentlyPlay()   //=> call recently play fuction 
        nextSongPlay(a)  //=> call nextplay song function
        preSongPlay(a)   //=> call previous song play function
    })
})
let masterPlay = document.getElementById('masterPlay')

//declare masterplay function
function playSong(index, event) {
//    console.log('e', event)
    audio.src = `./music/${index}.mp3`
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    audio.play();
    recentPlayed.unshift(index)
    range()
    const bottomPlayer = document.getElementById('bottomPlay')
    const bottomSet = playlist.filter(data => data.id == index)
    console.log('b', bottomSet)
    bottomPlayer.innerHTML = `   
                      <ul class="recentUl">
                        <li>
                            <img src="${bottomSet[0].img}" class='recentImg bottomImg' alt="">
                        </li>
                        <li class="recentlist">
                            <div class="col-md-auto">${bottomSet[0].track}</div>
                        </li>
                        </ul>`

}
//master play play and pause
masterPlay.addEventListener('click', () => {
    if (masterPlay.classList[1] == "fa-circle-play") {
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        audio.play();
    } else {
        audio.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')

    }
})

//recently add
function recentlyPlay() {
    div.innerHTML = "";
    recentPlayed.forEach((e) => {
        const r = playlist.find((i) => i.id == e)
        console.log('r', r)
        if (r) {
            div.innerHTML += `
   <ul class="recentUl">
      <li>
          <img src="${r.img}" class='recentImg' alt="">
      </li>
      <li class="recentlist">
          <div class="col-md-auto">${r.track}</div>
      </li>
      <li class="recentlist">
          <i class="fa-regular fa-circle-play recentButton" id="${r.id}" data-index="${r.id}"></i>
      </li>
  `
            const recentSongIndex = document.querySelectorAll('.recentButton').forEach((a) => {
                a.addEventListener('click', (event) => {
                    const x = event.target.id
                    playSong(x)
                })
            })
        }
    })
}

const row = document.getElementById('row3')
const likedSongs = document.querySelectorAll('.fav')
const likeSong = []

//add to favorite list function

likedSongs.forEach((like) => {
    like.addEventListener('click', (data) => {
        const SongId = data.target.id
        row.innerHTML = '';
        if (like.classList.contains('fa-regular')) {
            like.classList.remove('fa-regular')
            like.classList.add('fa-solid')
            //  alert('hi')
            const favCard = playlist.filter((data) => {
                return data.id == SongId
            })
            // console.log(favCard)
            likeSong.push(favCard[0])
            console.log(likeSong)
            favSongUpdate()
        } else {
            like.classList.remove('fa-solid')
            like.classList.add('fa-regular')
            const favCard1 = playlist.filter((data) => {
                return data.id == SongId
            })
            console.log(favCard1)
            const find = likeSong.findIndex((e) => e.movieName == favCard1[0].movieName)
            console.log(find)
            console.log(likeSong)
            likeSong.splice(find, 1)
            console.log(likeSong)
            favSongUpdate()
        }
    })
})

function favSongUpdate() {
    likeSong.forEach((data1, index) => {
        row.innerHTML += `
        <div class="col-mg-5 displayFavList" >
<div class="card card1" style="width: 11rem; background: rgba(128, 128, 128, 0.103) !important;">
<img src="${data1.img}" class="card-img-top" alt="...">
<div class="card-body">
<i class="fa-solid fa-play playButton button" id="${data1.id}"></i>
<h5 class="card-title">${data1.movieName}</h5>
<p class="card-text">${data1.track}</p>
</div>
</div>
</div>`
        const b = document.querySelectorAll('.button').forEach((a) => {
            a.addEventListener('click', (event) => {
                const i = event.target.id
                playSong(i)
            })
        })
    })

}

//slider control
function range() {
    const slide = document.getElementById('range')
    setInterval(() => {
        slide.max = audio.duration;
        slide.value = audio.currentTime
    }, 500)
    slide.onchange = function () {
        audio.currentTime = slide.value;
    }
}
const next = document.getElementById('nextSong')
const pre = document.getElementById('preSong')


//next song play event
function nextSongPlay(i) {
    next.addEventListener('click', () => {
        console.log(i.id)
        audio.src = `./music/${parseInt(i.id) + 1}.mp3`
        audio.play();
        //    recentPlayed.unshift(index)
        range()
        if (i.id < playlist.length - 1) {
            i.id = parseFloat(i.id) + 1
            next.style.color = 'white'
            pre.style.color = 'white'

        } else {
            //i.id=1;
            next.style.color = 'grey'
        }
    })
}

//preveious songs play event
function preSongPlay(i) {
    pre.addEventListener('click', () => {
        audio.src = `./music/${i.id - 1}.mp3`
        audio.play();
        range()
        if (i.id > 1) {
            i.id = parseFloat(i.id) - 1
            pre.style.color = 'white'
            next.style.color = 'white'

        } else {
            //i.id=1
            pre.style.color = 'grey'
        }
    })
}

//start time setup
const start = document.getElementById('startTime')
const end = document.getElementById('endTime')
audio.addEventListener('timeupdate', () => {
    //    console.log(audio.currentTime)
    if (audio.duration) {
        let minTime = Math.floor(audio.currentTime / 60)
        let secTime = Math.floor(audio.currentTime - minTime * 60)
        //  console.log('time',minTime,secTime)  
        let minduration = Math.floor(audio.duration / 60)
        let secduration = Math.floor(audio.duration - minduration * 60)

        if (secduration < 10) {
            secduration = "0" + secduration
        }
        if (minduration < 10) {
            minduration = "0" + minduration
        }
        if (minTime < 10) {
            minTime = "0" + minTime
        }
        if (secTime < 10) {
            secTime = "0" + secTime
        }
        start.innerHTML = `${minTime}:${secTime}`
        end.innerHTML = `${minduration}:${secduration}`
    } else {
        start.innerHTML = `00:00`
        end.innerHTML = `00:00`
    }
})

let vol = document.getElementById('volume')
console.log(vol.value)
vol.onchange = () => {
    console.log(vol.value)
    //alert('hi')
    audio.volume = parseInt(vol.value) / 100
}
let mute = document.getElementById('mute')
console.log(mute)

// mute.onclick=()=>{
// console.log(mute.classList)
//     if(mute.classList[1]=="fa-volume-low"){
//         console.log(mute)
//         audio.volume=0;
//     mute.classList.remove('fa-volume-low')
//     mute.classList.add('fa-volume-xmark')
//     console.log('l',mute.classList)

//    }
//    else{
//     console.log(mute)
//     audio.volume=0.5;
//     mute.classList.add('fa-volume-low')
//     mute.classList.remove('fa-volume-xmark"')
// }
// }



let sug=document.getElementById('sug')
playlist.forEach((song)=>{
 let list=document.createElement('a')
 list.classList.add('addList')
 list.innerHTML=`
 <div class="content ${song.id}" id=id${song.id} >
 ${song.track}
 </div>`
 sug.appendChild(list)
list.addEventListener('click',(event)=>{
  event.preventDefault();
  let content=event.currentTarget.querySelector('.content').textContent
})
})
let input=document.getElementsByTagName('input')[0]
console.log('input',input)
const search=document.getElementById('search')

search.addEventListener('input',()=>{
 //console.log(search.value)
 let v=search.value.toLowerCase()
let item=search.getElementsByTagName('a')
Array.from(item).forEach((e)=>{
    let ele=e.querySelector('content')
    let eleValue=ele.textContent||ele.innerHTML
    if(eleValue.toLowerCase().includes(input.value)){
        e.style.display="block";
    }else{
        e.style.display="none";
    }
    search.style.display=input.value?'':"none"
})
//console.log(songArray) 
songArray.forEach((data)=>{
    let searchSong=document.querySelectorAll('.displayList')
  searchSong.forEach((item)=>{
    let trackName=item.querySelector('.songTrack').textContent.toLowerCase()
if(trackName.includes(v)){
    item.style.display="block";
  }else{
    item.style.display="none";
  }

  })
}) 
 
})
sug.addEventListener('onmouseout',()=>{
    alert('hi')
    sug.style.display="none";
})

search.addEventListener('click',()=>{
    document.getElementById('sug').style.display="block";

})


let searchId=document.querySelectorAll('.content')
playlist.forEach((data)=>{
    searchId.forEach((e)=>{
        if(e.classList[2]==data.id){
            search.value=e.textContent
            console.log(search.value)
        }

    })
    
})

search.addEventListener('onmouseout',()=>{
    sug.style.display="none"
 
})
audio.onplay=()=>{
    let ani=document.getElementById('animation')
    ani.style.visibility="visible" 
}
audio.onpause=()=>{
    document.getElementById('animation').style.visibility="hidden"
}





