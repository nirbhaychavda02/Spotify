console.log('Welcome to Spotify');

// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio ('01.mp3');
let masterPlay  = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar')
let gif =document.getElementById('gif')
let masterSongName =document.getElementById('masterSongName')
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
   { songName : "Tenu Sang Rakhana", filePath:"01.mp3", coverPath : "Cover/01.cover.jpeg"},
   { songName : "Tera Yaar Hoon Main", filePath:"02.mp3", coverPath : "Cover/02.cover.jpeg"},
   { songName : "Shayad", filePath:"03.mp3", coverPath : "Cover/03.cover.jpeg"},
   { songName : "Tu Chhodiyo Na", filePath:"04.mp3", coverPath : "Cover/04.cover.jpeg"},
   { songName : "Ishq Hai", filePath:"05.mp3", coverPath : "Cover/05.cover.jpeg"},
   { songName : "Raanjhan ", filePath:"06.mp3", coverPath : "Cover/06.cover.jpeg"},
   { songName : "O Rangrez", filePath:"07.mp3", coverPath : "Cover/07.cover.jpeg"},
   { songName : "Sajna", filePath:"08.mp3", coverPath : "Cover/08.cover.jpeg"},
   { songName : "Mere Sohneya", filePath:"09.mp3", coverPath : "Cover/09.cover.jpeg"},
   { songName : "Kabira", filePath:"10.mp3", coverPath : "Cover/10.cover.jpeg"},
]

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle Play/Pose Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
         gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
   
    
    //update Seekbar
     
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    
    myProgressBar.value = progress;
}) 

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = () => {
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from (document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songs[songIndex].filePath}`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
       
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{

        songIndex +=1
    }
    audioElement.src = `${songs[songIndex].filePath}`;
    masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{

        songIndex -=1
    }
    audioElement.src = `${songs[songIndex].filePath}`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})