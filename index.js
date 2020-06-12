
$(document).ready( function() {

    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    var eNote = document.getElementById('eAudio');
    var fNote = document.getElementById('fAudio');
    var gNote = document.getElementById('gAudio');
    var aNote = document.getElementById('aAudio');
    var bNote = document.getElementById('bAudio');

    $('body').on('keydown', function(e) {
        if (e.keyCode == 67) {
            playNote(cNote);
            $('#c').addClass("cDown");
        } else if (e.keyCode == 68) {
            playNote(dNote);
            $('#d').addClass("dDown");
        } else if (e.keyCode == 69) {
            playNote(eNote);
            $('#e').addClass("eDown");
        } else if (e.keyCode == 70) {
            playNote(fNote);
            $('#f').addClass("fDown");
        } else if (e.keyCode == 71) {
            playNote(gNote);
            $('#g').addClass("gDown");
        } else if (e.keyCode == 65) {
            playNote(aNote);
            $('#a').addClass("aDown");
        } else if (e.keyCode == 66) {
            playNote(bNote);
            $('#b').addClass("bDown");
        }
    })

    $('body').on('keyup', function(e) {
        if (e.keyCode == 67) {
            $('#c').removeClass("cDown");
        } else if (e.keyCode == 68) {
            $('#d').removeClass("dDown");
        } else if (e.keyCode == 69) {
            $('#e').removeClass("eDown");
        } else if (e.keyCode == 70) {
            $('#f').removeClass("fDown");
        } else if (e.keyCode == 71) {
            $('#g').removeClass("gDown");
        } else if (e.keyCode == 65) {
            $('#a').removeClass("aDown");
        } else if (e.keyCode == 66) {
            $('#b').removeClass("bDown");
        }
    })

    function playNote(note) {
        note.currentTime = 0;
        note.play();
    }
    
    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#c').on('mousedown', function(e){
        playNote(cNote);
    });
    
    $('#d').on('mousedown',function(){
        playNote(dNote);
    });
    
    $('#e').on('mousedown',function(){
        playNote(eNote);
    });
 
    $('#f').on('mousedown',function(){
        playNote(fNote);
    });
    
    
    $('#g').on('mousedown',function(){
        playNote(gNote);
    });
    
    $('#a').on('mousedown',function(){
        playNote(aNote);
    });
    
    $('#b').on('mousedown',function(){
        playNote(bNote);
    });
});