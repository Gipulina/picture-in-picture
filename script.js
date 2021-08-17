// Uso esto para chequear que esté conectada la hoja JS al HTML console.log('testing'); 
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select  media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        const MediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = MediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        // Catch error Here.
        console.log('whoops, error here:',error);
    }
}
button.addEventListener('click',async () => {
    // Disable button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Resert Button
    button.disabled = false;

});
//On Load
selectMediaStream();