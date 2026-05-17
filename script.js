const totalFrames = 2;
const framePerMilliseconds = 250;

function updateFrames() {
    const frame = Math.floor(performance.now() / framePerMilliseconds)%totalFrames;

    document.querySelectorAll(".sprite").forEach(element => {
        const spriteName = element.dataset.name;
        
        element.style.backgroundImage = `url("assets/images/${spriteName}-${frame+1}.png")`;
    });

    requestAnimationFrame(updateFrames);
};

requestAnimationFrame(updateFrames);