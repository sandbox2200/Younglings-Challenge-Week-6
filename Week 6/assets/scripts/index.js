// This function requests audio access 
requestAudio = () => {
    /* 
        mediaDevices is used to access both the camera and microphone
        getUserMedia accepts an argument, if true then it'll prompt the user for access. 
    */
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(() => {
    })
    .catch((err) => {
        console.log('Error: ', err)
    });
}

// This function requests access to the camera for video capture
requestVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(() => {
    })
    .catch((err) => {
        console.log('Error: ', err)
    });
}

// This function requests access to the users' location
requestLocation = () => {
    // getCurrentPosition prompts the user for their location, if granted it'll get the user's co-ords
    navigator.geolocation.getCurrentPosition((position) => {
        yourFunction(position.coords.latitude, position.coords.longitude);
      });
}

// This function requests access to display notifications on the website
requestNotification = () => {
    Notification.requestPermission()
    .then(() => {
    });
}