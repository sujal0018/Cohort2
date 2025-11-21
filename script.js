let users = [
  {
    username: "AaravSharma",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&auto=format&fit=crop",
    profession: "Frontend Developer",
    description: "Passionate about building responsive UI and creating smooth user experiences."
  },
  {
    username: "SanyaP",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&auto=format&fit=crop",
    profession: "Graphic Designer",
    description: "Loves designing clean, minimal, and modern brand identities."
  },
  {
    username: "RohanV",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&auto=format&fit=crop",
    profession: "Data Analyst",
    description: "Enjoys discovering patterns and insights from large datasets."
  },
  {
    username: "MeeraK",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&auto=format&fit=crop",
    profession: "Content Writer",
    description: "Writes engaging, SEO-friendly content for blogs and digital platforms."
  },
  {
    username: "KabirS",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop",
    profession: "Photographer",
    description: "Captures portraits and lifestyle photos with a cinematic touch."
  },
  {
    username: "IshitaD",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&auto=format&fit=crop",
    profession: "UI/UX Designer",
    description: "Creates intuitive designs and focuses on user-centric product flows."
  }
];
let main = document.querySelector('main')
let sum = ''
users.forEach(function (elem) {
    sum += `<div class="card">
                <img src="${elem.image}" alt="">
                <h1>${elem.username}</h1>
                <h2>${elem.profession}</h2>
                <p>${elem.description}</p>
            </div>`
})
main.innerHTML=sum