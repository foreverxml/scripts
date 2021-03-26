/* If you do not see the blur in Firefox, visit about:config, accept the "here be dragons" warning, and turn on gfx.webrender.all and layout.css.backdrop-filter.enabled, then restart FIrefox. It should work now!
~*~
About why no JavaScript is here: Because onclick is used it is all in the head.*/
// character/word reference
const lists = {
  un: {
    adj: ["awesome", "bad", "confused", "deadly", "elusive", "flowing", "great", "hilarious", "insincere", "juicy", "keen", "loving", "misty", "new", "orange", "purple", "quick", "red", "stable", "troubled", "underestimated", "velvet", "warm", "xeric", "young", "zesty"],
    noun: ["apple", "blackberry", "cat", "dome", "entry", "flashlight", "grape", "helper", "incentive", "jackhammer", "kangaroo", "lamp", "mother", "ninja", "olive", "pear", "quiz", "raisin", "submarine", "tulip", "umbrella", "viola", "watermelon", "xray", "yard", "zebra"]
  },
  ph: {
    adj: ["awesome", "bad", "confused", "deadly", "elusive", "flowing", "great", "hilarious", "insincere", "juicy", "keen", "loving", "misty", "new", "orange", "purple", "quick", "red", "stable", "troubled", "underestimated", "velvet", "warm", "xeric", "young", "zesty"],
    noun: ["apple", "blackberry", "cat", "dome", "entry", "flashlight", "grape", "helper", "incentive", "jackhammer", "kangaroo", "lamp", "mother", "ninja", "olive", "pear", "quiz", "raisin", "submarine", "tulip", "umbrella", "viola", "watermelon", "xray", "yard", "zebra"],
    nouns: ["apples", "blackberries", "cats", "domes", "entries", "flashlights", "grapes", "helpers", "incentives", "jackhammers", "kangaroos", "lamps", "mothers", "ninjas", "olives", "pears", "quizzes", "raisins", "submarines", "tulips", "umbrellas", "violas", "watermelons", "xrays", "yardsticks", "zebras"],
    adv: ['always','bravely','calmly','dastardly','enviously','fondly','gracefully','helpfully','interestingly','joyfully','kindfully','lightly','mindfully','neatly','openly','painfully','quietly','rarely','scrappily','tenderly','usually','victoriously','warmly','yearly','zestfully'],
    verb: ['amplify','break','crush','dampen','enter','follow','group','hit','imply','jaywalk','keep','lament','mentor','notice','open','prank','quench','run','scrap','turn','undermine','vent','weld','xray','yield','zip']
  },
  ln: {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26},
  pw: ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','1','2','3','4','5','6','7','8','9','0','`','~','!','@','#','$','%','^','&','*','(',')','-','=','_','+','{','}','[',']',';',':','|','\\','/','?','.',',','<','>']
}
var robot = document.getElementById("rb");
var gn = document.getElementById("")
var pressr = 0
// Klaatu barada nikto!
function press() {
  pressr++;
  if (pressr === 1) {
    robot.innerHTML = "You thought?"
  } else if (pressr === 2) {
    robot.innerHTML = "Don't leave Your Plastic Pal Who's Fun To Be With."
  } else if (pressr === 3) {
    robot.innerHTML = "Do not bite my metal posterior."
  } else if (pressr === 4) {
    robot.innerHTML = "And they have a plan."
  } else if (pressr === 5) {
    robot.innerHTML = "Don't press this again."
  } else if (pressr === 6) {
    robot.innerHTML = "The alliance of Cylons will come if you press This Button again."
  } else if (pressr === 7) {
    robot.style.display = "none";
  }
}
// get random from array
function randlist(al) {
  return al[Math.floor(Math.random()*al.length)];
}
// username function
function u(max) {g.innerHTML = randlist(lists.un.adj)+randlist(lists.un.noun)+Math.floor(Math.random()*max);}
// phrase code function
function pc(t) {
  if (t) then {
    g.innerHTML = randlist(lists.ph.adj)+'-'+randlist(lists.ph.noun)+'-'+randlist(lists.ph.adv)+'-'+randlist(lists.ph.verb)+'-'+randlist(lists.ph.adj)+'-'+randlist(lists.ph.noun);
  } else {
    g.innerHTML = randlist(lists.ph.adj)+'-'+randlist(lists.ph.noun)+'-'+randlist(lists.ph.verb)+'-'+randlist(lists.ph.adj)+'-'+randlist(lists.ph.noun);
  }
}
// password function
function pw(len) {
  let pwd = "";
  let n = 0;
  while (n <= len) {
    pwd = pwd + randlist(lists.pw);
    n++;
  }
  g.innerHTML = pwd;
}
// passphrase function

