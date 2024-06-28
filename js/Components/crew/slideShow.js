export const slideCrew = async (capsule) => {
    try {
        // Desestructuración simplificada
        const { launches: [{ links: { flickr: { original }, patch: { small } } }] } = capsule;
        console.log(small);

        const slideshowContainer = document.createElement('div');
        slideshowContainer.className = 'slider';
        slideshowContainer.style.maxWidth = '500px';

        if (original && original.length > 0) {
            original.forEach((imageSrc) => {
                const img = document.createElement('img');
                img.className = 'mySlides';
                img.src = imageSrc;
                img.style.width = '100%';
                slideshowContainer.appendChild(img);
            });
        } else if (small) {
            const img = document.createElement('img');
            img.className = 'mySlides';
            img.src = small;
            img.style.width = '100%';
            slideshowContainer.appendChild(img);
        } else {
            console.error("No images available to display");
            return;
        }

        // Agrega el contenedor de la slideshow al DOM
        const descriptionItem = document.querySelector("#section__information__1");
        if (!descriptionItem) {
            console.error("#section__information__1 not found");
            return;
        }
        
        const loadElement = descriptionItem.querySelector("div.load");
        if (loadElement) {
            descriptionItem.removeChild(loadElement);
        }
        
        descriptionItem.appendChild(slideshowContainer);
        
        const slider = descriptionItem.querySelector(".slider");
        if (!slider) {
            console.error("Slider not found");
            return;
        }

        var myIndex = 0;

        let carousel = () => {
            var i;
            var x = slider.getElementsByClassName("mySlides");
            if (x.length > 0) {
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                myIndex++;
                if (myIndex > x.length) { myIndex = 1; }
                x[myIndex - 1].style.display = "block";
                setTimeout(carousel, 2000);
            } else {
                console.error("No slides found");
            }
        };
        carousel();
    } catch (error) {
        console.error("An error occurred while creating the slideshow", error);
    }
}
