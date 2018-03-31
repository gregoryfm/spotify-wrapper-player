import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  it('should receive 0ms and convert to 0:00', () => {
    expect( convertToHumanTime( 0 ) ).to.be.equal( '0:00' );
  });

  it('should receive 5000ms and convert to 0:05', () => {
    expect( convertToHumanTime( 5000 ) ).to.be.equal( '0:05' );
  });

  it('should receive 10000ms and convert to 0:10', () => {
    expect( convertToHumanTime( 10000 ) ).to.be.equal( '0:10' );
  });

  it('should receive 60000ms and convert to 1:00', () => {
    expect( convertToHumanTime( 60000 )).to.be.equal( '1:00' );
  });
});
