

const element = document.querySelector(".founder");
const element1=document.querySelector(".hidden-link");

const anıl=document.querySelector(".Anıl");
const anıl1=document.querySelector(".hidden-link-anıl");

const onur=document.querySelector(".Onur");
const onur1=document.querySelector(".hidden-link-onur");

const doga=document.querySelector(".Doga");
const doga1=document.querySelector(".hidden-link-doga");

const hümi=document.querySelector(".Hümi");
const hümi1=document.querySelector(".hidden-link-hümi");

const berfin=document.querySelector(".Berfin");
const berfin1=document.querySelector(".hidden-link-berfin");


element.addEventListener("mouseenter",mouseover)
element.addEventListener("mouseout",mouseout)
element1.addEventListener("mouseover",mouseover1)

anıl.addEventListener("mouseenter",mouseoverAnıl);
anıl.addEventListener("mouseout",mouseoutAnıl);
anıl1.addEventListener("mouseover",mouseoverAnıl1);

onur.addEventListener("mouseenter",mouseoverOnur);
onur.addEventListener("mouseout",mouseoutOnur);
onur1.addEventListener("mouseover",mouseoverOnur1);

doga.addEventListener("mouseenter",mouseoverDoga);
doga.addEventListener("mouseout",mouseoutDoga);
doga1.addEventListener("mouseover",mouseoverDoga1);

hümi.addEventListener("mouseenter",mouseoverHümi);
hümi.addEventListener("mouseout",mouseoutHümi);
hümi1.addEventListener("mouseover",mouseoverHümi);

berfin.addEventListener("mouseenter",mouseoverBerfin);
berfin.addEventListener("mouseout",mouseoutBerfin);
berfin1.addEventListener("mouseover",mouseoverBerfin);


function mouseover(){
    document.getElementById("founder").style.opacity = "0.3";
    document.getElementById("hidden-link").style.opacity = "1";
    
};

function mouseover1(){
    document.getElementById("founder").style.opacity = "0.3";
    document.getElementById("hidden-link").style.opacity = "1";
}


function mouseout(){
    document.getElementById("founder").style.opacity = "1"
    document.getElementById("hidden-link").style.opacity = "0";
};

function mouseoverAnıl(){
    document.getElementById("anıl").style.opacity = "0.3";
    document.getElementById("hidden-link-anıl").style.opacity = "1";
   
};

function mouseoutAnıl(){
    document.getElementById("anıl").style.opacity = "1"
    document.getElementById("hidden-link-anıl").style.opacity = "0";
};

function mouseoverAnıl1(){
    document.getElementById("anıl").style.opacity = "0.3";
    document.getElementById("hidden-link-anıl").style.opacity = "1";
}

function mouseoverOnur(){
    document.getElementById("onur").style.opacity = "0.3";
    document.getElementById("hidden-link-onur").style.opacity = "1";
   
};

function mouseoutOnur(){
    document.getElementById("onur").style.opacity = "1"
    document.getElementById("hidden-link-onur").style.opacity = "0";
};

function mouseoverOnur1(){
    document.getElementById("onur").style.opacity = "0.3";
    document.getElementById("hidden-link-onur").style.opacity = "1";
}


function mouseoverDoga(){
    document.getElementById("doga").style.opacity = "0.3";
    document.getElementById("hidden-link-doga").style.opacity = "1";
   
};

function mouseoutDoga(){
    document.getElementById("doga").style.opacity = "1"
    document.getElementById("hidden-link-doga").style.opacity = "0";
};

function mouseoverDoga1(){
    document.getElementById("doga").style.opacity = "0.3";
    document.getElementById("hidden-link-doga").style.opacity = "1";
}

function mouseoverDoga(){
    document.getElementById("doga").style.opacity = "0.3";
    document.getElementById("hidden-link-doga").style.opacity = "1";
   
};

function mouseoutDoga(){
    document.getElementById("doga").style.opacity = "1"
    document.getElementById("hidden-link-doga").style.opacity = "0";
};

function mouseoverDoga1(){
    document.getElementById("doga").style.opacity = "0.3";
    document.getElementById("hidden-link-doga").style.opacity = "1";
}

function mouseoverHümi(){
    document.getElementById("hümi").style.opacity = "0.3";
    document.getElementById("hidden-link-hümi").style.opacity = "1";
   
};

function mouseoutHümi(){
    document.getElementById("hümi").style.opacity = "1"
    document.getElementById("hidden-link-hümi").style.opacity = "0";
};

function mouseoverHümi1(){
    document.getElementById("hümi").style.opacity = "0.3";
    document.getElementById("hidden-link-hümi").style.opacity = "1";
}

function mouseoverBerfin(){
    document.getElementById("berfin").style.opacity = "0.3";
    document.getElementById("hidden-link-berfin").style.opacity = "1";
   
};

function mouseoutBerfin(){
    document.getElementById("berfin").style.opacity = "1"
    document.getElementById("hidden-link-berfin").style.opacity = "0";
};

function mouseoverHümi1(){
    document.getElementById("berfin").style.opacity = "0.3";
    document.getElementById("hidden-link-berfin").style.opacity = "1";
}









