import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';

describe('AlbumTracks', () => {
  it('should exist', () => {
    expect(renderAlbumTracks).to.exist;
  });

  const data = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const data2 = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    },
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const markup = `
    <div class="music">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${data[0].duration_ms}</p>
    </div>`;

  const markup2 = `
    <div class="music">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${data[0].duration_ms}</p>
    </div>
    <div class="music">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${data[0].duration_ms}</p>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement( 'div' );
    renderAlbumTracks( data, element );

    expect( element.innerHTML ).to.be.eql( markup );
  });

  it('should create and append when more than one music', () => {
    const element2 = document.createElement( 'div' );
    renderAlbumTracks( data2, element2 );

    expect( element2.innerHTML ).to.be.eql( markup2 );
  });
});
