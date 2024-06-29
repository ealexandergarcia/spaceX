export const videoCapsule = async (data, clase) => {
    const container = document.createElement("div");
    container.id = "youtube-video";
  
    const videoId = data;

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&modestbranding=1&loop=1`;
    iframe.frameborder = '0';
    iframe.allowfullscreen = true;
    
    container.appendChild(iframe);
    const descriptionItem = document.querySelector(clase);
    const loadElement = descriptionItem.querySelector("div.load");
  
    descriptionItem.removeChild(loadElement);
    descriptionItem.appendChild(container);
  }