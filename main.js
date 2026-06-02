document.addEventListener('DOMContentLoaded', () => {
    const siteCursor = document.querySelector('.custom-cursor.site');
    const fallingEffects = document.querySelector('.falling-effects');
    const envelope = document.querySelector('.card-wrapper');
    const heart = document.querySelector('.heart');
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');

    const particleSymbols = ['❤️', '💕', '🩵', '💙', '💝', '💓', '💖', '🫶🏻', '💗', '😍', '😻', '🥰', '😘', '💋', '☘️', '🍀', '💐', '🌷', '🌹', '🪻', '🪷', '🌺', '🌸', '🌼', '🌻', '💫', '⭐️', '🌟', '✨', '🌈', '☀️', '💞'];
    const particleCount = 24;

    if (fallingEffects) {
        for (let index = 0; index < particleCount; index += 1) {
            const particle = document.createElement('span');
            particle.className = 'falling-particle';
            particle.textContent = particleSymbols[index % particleSymbols.length];
            particle.style.setProperty('--start-x', `${Math.random() * 100}vw`);
            particle.style.setProperty('--size', `${16 + Math.random() * 18}px`);
            particle.style.setProperty('--duration', `${6 + Math.random() * 7}s`);
            particle.style.setProperty('--delay', `${Math.random() * 8}s`);
            particle.style.setProperty('--drift', `${-10 + Math.random() * 20}vw`);
            particle.style.setProperty('--spin', `${-180 + Math.random() * 360}deg`);
            fallingEffects.appendChild(particle);
        }
    }

    if (siteCursor) {
        const trackCursor = (evt) => {
            siteCursor.style.left = `${evt.clientX}px`;
            siteCursor.style.top = `${evt.clientY}px`;
        };

        document.addEventListener('mouseenter', () => {
            siteCursor.style.display = 'block';
        });
        document.addEventListener('mouseleave', () => {
            siteCursor.style.display = 'none';
        });
        document.addEventListener('mousemove', trackCursor);
        document.addEventListener('mousedown', () => siteCursor.classList.add('active'));
        document.addEventListener('mouseup', () => siteCursor.classList.remove('active'));
    }

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

    if (heart && envelope) {
        heart.addEventListener('click', () => {
            envelope.classList.toggle('flap');
        });
    }
});
