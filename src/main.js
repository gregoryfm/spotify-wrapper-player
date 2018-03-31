import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

const tracks = spotify.album.getTracks('6peEdPVO73WtgGah5sEhX4');
const albumTracks = document.getElementById('album-musics');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo));

tracks
  .then(data => renderAlbumTracks( data.items, albumTracks ));
