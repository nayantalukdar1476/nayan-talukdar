var arr=[
    {
        fullName: "Mumbai Indians",
        shortName: "MI",
        primaryColor: "#004ba0",
        secondaryColor: "#fdb913",
        trophies: 5,
        captain: "Hardik Pandiya"
    },
    {
        fullName: "Chennai Super Kings",
        shortName: "CKR",
        primaryColor: "#f1c40f",
        secondaryColor: "#2c3e50",
        trophies: 5,
        captain: "Ruturaj Gaikwad"
    },
    {
        fullName: "Royal Challengers Bengaluru",
        shortName: "RCB",
        primaryColor: "#d50032",
        secondaryColor: "#000",
        trophies: 0,
        captain: "Faf du Plessis"
    },
    {
        fullName: "Kolkata Knight Riders",
        shortName: "KKR",
        primaryColor: "#3a225d",
        secondaryColor: "#d4af37",
        trophies: 3,
        captain: "Shreyas Iyer"
    },
    {
        fullName: "Rajesthan Royals",
        shortName: "RR",
        primaryColor: "#ea1a7f",
        secondaryColor: "#004ba0",
        trophies: 1,
        captain: "Sanju Samson"
    },
    {
        fullName: "Sunrisers Hyderabad",
        shortName: "SRH",
        primaryColor: "#ff822a",
        secondaryColor: "#000",
        trophies: 1,
        captain: "Pat Cummins"
    },
    {
        fullName: "Delhi Capitals",
        shortName: "DC",
        primaryColor: "#004c93",
        secondaryColor: "#e41b23",
        trophies: 0,
        captain: "Rishabh Pant"
    },
    {
        fullName: "Punjab Kings",
        shortName: "PBKS",
        primaryColor: "#aa2a2a",
        secondaryColor: "#d4af37",
        trophies: 0,
        captain: "Shikhar Dhawan"
    },
    {
        fullName: "Gujrat Titans",
        shortName: "GI",
        primaryColor: "#0b1f47",
        secondaryColor: "#e6c15a",
        trophies: 1,
        captain: "Shubham Gill"
    },
    {
        fullName: "Lakhnow Super Giants",
        shortName: "LSG",
        primaryColor: "#0057b7",
        secondaryColor: "#f58220",
        trophies: 0,
        captain: "KL Rahul"
    }
]

var btn = document.querySelector("button")
var div = document.querySelector("div")
var t = document.querySelector(".t")
var tr = document.querySelector(".tr")
var c = document.querySelector(".c")
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click',function(){
    
    
    var winner = arr[Math.floor(Math.random()*arr.length)]
    
    console.log(winner)

    h1.innerHTML = winner.fullName
    div.style.backgroundColor = winner.secondaryColor
    main.style.backgroundColor = winner.primaryColor
    t.textContent = "Team : " + winner.shortName
    tr.textContent = "Trophies : " + winner.trophies
    c.textContent = "Captain : " + winner.captain
})