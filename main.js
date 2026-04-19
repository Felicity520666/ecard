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