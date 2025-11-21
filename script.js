let arr = [
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop",
    story: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    story: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1974&auto=format&fit=crop",
    story: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1974&auto=format&fit=crop",
    story: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop",
    story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop",
    story: "https://images.unsplash.com/photo-1506086679525-9d1975332d88?q=80&w=1200&auto=format&fit=crop"
  }
];
let clutter=''
arr.forEach(function (elem,idx) {
    clutter+=`<div class="story">
                <img  id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
let stories = document.querySelector('.stories')
let fullscreen = document.querySelector('.fullscreen')
stories.innerHTML = clutter
stories.addEventListener('click', function (dets) {
    fullscreen.style.display= "block " 
    fullscreen.style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(() => {
        fullscreen.style.display= "none " 
    }, 3000);
})