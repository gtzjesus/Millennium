import styled from 'styled-components';
import millenniumvideo from '/videos/millennium.mp4';

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
  max-width: 100vw;
  max-height: 100vh;
  object-fit: contain;
  z-index: 0;
  // BLURRY
  -webkit-filter: blur(5px);
  filter: blur(5px);
  // BLACK AND WHITE
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  // REMOVE CONTROLS DISPLAY AT BEGINNING OF video
  video::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }
`;

function VideoComponent() {
  return (
    <StyledVideo>
      <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={millenniumvideo} type="video/mp4" />
      </video>
    </StyledVideo>
  );
}

export default VideoComponent;
