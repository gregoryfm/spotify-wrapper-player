const albumTracks = document.getElementById('album-musics');

let audio = null;
export default function playMusicTrigger() {
  albumTracks.addEventListener( 'click', event => {
    const target = event.target.parentNode;

    if ( target.classList.contains( 'active' )) {
      audio.pause();
    } else {
      if ( audio ) {
        audio.pause();
      }

      audio = new Audio( target.getAttribute( 'data-track-preview' ) );
      audio.play();
      target.classList.add( 'active' );

      audio.addEventListener( 'pause', event => {
        target.classList.remove( 'active' );
      });
    }

  });
}
