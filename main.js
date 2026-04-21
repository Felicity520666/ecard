const site_cursor = document.querySelector('.custom-cursor.site');


document.addEventListener('mouseenter', () => {
    site_cursor.style.display = 'block';
 });
document.addEventListener('mouseleave', () => {
    site_cursor.style.display = 'none';
});

document.addEventListener('mousemove', TrackCursor);

document.addEventListener('mousedown', () => site_cursor.classList.add('active'));
document.addEventListener('mouseup', () => site_cursor.classList.remove('active'));


function TrackCursor(evt) {
    site_cursor.style.left = `${evt.clientX}px`;
    site_cursor.style.top = `${evt.clientY}px`;
}

const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

if (bgMusic && musicToggle) {
    bgMusic.volume = 0.45;

    const syncMusicLabel = () => {
        musicToggle.textContent = bgMusic.paused ? 'Play Music ♬⋆𑣲' : 'Pause Music ᯓ𝄞';
    };

    musicToggle.addEventListener('click', async () => {
        try {
            if (bgMusic.paused) {
                await bgMusic.play();
            } else {
                bgMusic.pause();
            }
        } catch (err) {
            alert('Add your music file at media/music.mp3, then click Play Music again.');
        }

        syncMusicLabel();
    });

    bgMusic.addEventListener('play', syncMusicLabel);
    bgMusic.addEventListener('pause', syncMusicLabel);
    syncMusicLabel();
}