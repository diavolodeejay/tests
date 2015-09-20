var aNote= document.getElementById('aAudio'),
    bNote= document.getElementById('bAudio'),
    cNote= document.getElementById('cAudio'),
    dNote= document.getElementById('eAudio'),
    eNote= document.getElementById('dAudio'),
    fNote= document.getElementById('fAudio'),
    gNote= document.getElementById('gAudio');

$('#ak').mousedown(function(){
    aNote.play();
    aNote.currentTime = 0;
  	aNote.volume=0.1;
  
});

$('#bk').mousedown(function(){
    aNote.play();
    aNote.currentTime = 0;
  	bNote.volume=0.1;
});

$('#ck').mousedown(function(){
    cNote.play();
    cNote.currentTime = 0;
  	cNote.volume=0.1;
});

$('#dk').mousedown(function(){
    dNote.play();
    dNote.currentTime = 0;
  	dNote.volume=0.1;
});

$('#ek').mousedown(function(){
    eNote.play();
    eNote.currentTime = 0;
  	eNote.volume=0.1;
});

$('#fk').mousedown(function(){
    fNote.play();
    fNote.currentTime = 0;
  	fNote.volume=0.1;
});

$('#gk').mousedown(function(){
    gNote.play();
    gNote.currentTime = 0;
  	gNote.volume=0.1;
});