let current = "a";
const slides = ["a", "b", "c", "d", "e", "f"];
const base_url = "http://127.0.0.1:5501/index.html"

function snext() {
    console.log("current="+current);
    for (let i=0; i < slides.length; i++) {
        console.log("slides[i]="+slides[i]);
        
        if (current == "f") {
            current = "a";
            window.location.href = base_url + "#" + current;
            break;
        }
        
        else if (slides[i] == current) {
            current = slides[i+1];
            window.location.href = base_url + "#" + current;
            break;
        }
    }       
}

// addeventlistener, rightarrow, nextslide