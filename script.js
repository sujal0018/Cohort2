let jobs = [
    {
    logo:'./amazon.png',
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    pay: "$120/hr",
    location: "Mumbai, India",
    saved: false
  },
    {
      logo:'./google.png',
    company: "Google",
    posted: "30 days ago",
    role: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    pay: "$150–220k",
    location: "Kochi, India",
    saved: true
  },
    {
      logo:'./dribble.png',
    company: "Dribbble",
    posted: "18 days ago",
    role: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    pay: "$85/hr",
    location: "Chennai, India",
    saved: false
  },
  {logo:'./figma.png',
    company: "Figma",
    posted: "5 days ago",
    role: "UX Designer",
    tags: ["Full-Time", "In office"],
    pay: "$200–250k",
    location: "Bangalore, India",
    saved: true
  },
  {logo:'./airbnb.png',
    company: "Airbnb",
    posted: "5 days ago",
    role: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    pay: "$100/hr",
    location: "Delhi, India",
    saved: false
  },
  {logo:'./apple.png',
    company: "Apple",
    posted: "5 days ago",
    role: "Graphic Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    pay: "$85–120k",
    location: "Kerala, India",
    saved: true
  }
];
let main=document.querySelector('main')
let sum = '';
jobs.forEach(function (elem) {
    let saveIcon = elem.saved 
        ? `<i class="ri-bookmark-fill"></i>` 
        : `<i class="ri-bookmark-line"></i>`;
    sum += `<div class="card">
				<div class="top">
					<img src="${elem.logo}" alt="" />
					<h2>${elem.saved ? 'Saved' : 'Save'} ${saveIcon}</h2>
				</div>
				<div class="mid">
					<h2>${elem.company}<span> 5days ago</span></h2>
					<h1>${elem.role}</h1>
					<div class="role">
						<h2>${elem.tags[0]}</h2>
						<h2>${elem.tags[1]}</h2>
					</div>
				</div>

				<div class="bottom">
					<div class="pay-loc">
						<h2>${elem.pay}</h2>
						<h3>${elem.location}</h3>
					</div>
					<button>Apply Now</button>
				</div>
			</div>`
})
main.innerHTML = sum;
