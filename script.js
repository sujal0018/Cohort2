let arr = [
  { name: "Chennai Super Kings",      primary: "yellow",     secondary: "blue"    },
  { name: "Delhi Capitals",           primary: "blue",       secondary: "red"     },
  { name: "Gujarat Titans",           primary: "navy",       secondary: "gold"    },
  { name: "Kolkata Knight Riders",    primary: "purple",     secondary: "gold"    },
  { name: "Lucknow Super Giants",     primary: "blue",       secondary: "orange"  },
  { name: "Mumbai Indians",           primary: "deep blue",  secondary: "gold"    },
  { name: "Punjab Kings",             primary: "crimson",    secondary: "silver"  },
  { name: "Rajasthan Royals",         primary: "pink",       secondary: "blue"    },
  { name: "Royal Challengers Bengaluru", primary: "red",     secondary: "black"   },
  { name: "Sunrisers Hyderabad",      primary: "orange",     secondary: "black"   }
];


 
let btn=document.querySelector('button');
let h1 = document.querySelector('h1');
let main = document.querySelector('main');

btn.addEventListener('click', function () {
    let a = Math.floor(Math.random() * arr.length);
    h1.innerHTML = arr[a].name;
    h1.style.color = arr[a].primary;
    main.style.backgroundColor = arr[a].secondary;
})