

// declearing variables
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let audioElement = new Audio('songs/3.mp3');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [ 
    {songName:"Nazm-Nazm song .mp-3", filePath:"songs/1.mp3", coverPath:"covers/9.jpg"},
    {songName:"2ndSong", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"3rdSong", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"4thsong", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"5thsong", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"6thsong", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Tu hi tu female version (kick)", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"dhoopa vich song by Kaka", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Distance Love punjabi song", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Tera mera Rishta Purana (Awarapan)", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
    {songName:"KGF Ringtone song1", filePath:"songs/11.mp3", coverPath:"covers/4.jpg"},
    {songName:"KGF Rock-theme song2", filePath:"songs/12.mp3", coverPath:"covers/3.jpg"},
    {songName:"Galiyan song (ek-villain)", filePath:"songs/13.mp3", coverPath:"covers/1.jpg"},
    {songName:"jack sparrow Bgm ", filePath:"songs/14.mp3", coverPath:"covers/2.jpg"},
    {songName:"thor-ragnarok-ringtone", filePath:"songs/15.mp3", coverPath:"covers/6.jpg"},
    {songName:"without me - halsey", filePath:"songs/16.mp3", coverPath:"covers/7.jpg"},

]



songItem.forEach((element,i)=>{
// console.log(element,i);
element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


masterPlay.addEventListener("click",()=>{
if(audioElement.paused || audioElement.currentTime<=0){
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play')
  masterPlay.classList.add('fa-circle-pause')
} 

else{
audioElement.pause();
masterPlay.classList.remove('fa-circle-pause')
masterPlay.classList.add('fa-circle-play')  
}
});
 
audioElement.addEventListener("timeupdate",()=>{
let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgress.value = progress;
console.log(myProgress.value);
if(myProgress.value==100){
autoPlay();
}
});

const autoPlay=()=>{
  console.log('calling autoplay');
  if(songIndex<=1){
    songIndex = 16;
  }
  else{
   songIndex -=1;
  }
 
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  audioElement.play();
}



myProgress.addEventListener("change",()=>{
audioElement.currentTime = myProgress.value*audioElement.duration/100;
// console.log(audioElement.currentTime );
})

const playAll = ()=>{
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
element.classList.remove('fa-circle-pause');
element.classList.add('fa-circle-play');
element.innerHTML = ``
});
};


Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
  element.addEventListener("click",(e)=>{
  playAll(); 
  songIndex = e.target.id;
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  e.target.classList.remove('fa-circle-play')
  element.innerHTML = `<img src="playing.gif" alt="load">`
  audioElement.play();
});
})


document.getElementById('previous').addEventListener('click',()=>{
  playAll();
if(songIndex<=1){
  songIndex = 16;
}
else{
 songIndex -=1;
}
// console.log(songIndex);
audioElement.src = `songs/${songIndex}.mp3`;
audioElement.currentTime = 0;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
// element.innerHTML = `<img src="playing.gif" alt="load">`
audioElement.play();


});




document.getElementById('next').addEventListener('click',()=>{
  playAll();
  if(songIndex>=16){
    songIndex = 1;
  }
  else{
    // console.log(songIndex);
  console.log("performing increament operation");
   songIndex = songIndex+1;
  }
  // console.log(songIndex);
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  audioElement.play();
  });
