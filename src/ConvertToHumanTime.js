export default function convertToHumanTime( time ) {
  let seconds = parseInt(( time / 1000 ) % 60, 10 );
  seconds = ( seconds < 10 ) ? `0${seconds}` : seconds;

  const minutes = parseInt(( time / ( 1000 * 60 )) % 60, 10 );

  return `${minutes}:${seconds}`;
}
