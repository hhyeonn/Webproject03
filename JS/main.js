/* main.js */

// 주메뉴_완
const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const headerWrap = document.querySelector(".header_wrap");
const Body = document.querySelector(".body");

for(var i=0;i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',(e) => {
        e.currentTarget.classList.add('on');
        var ht = e.currentTarget.children[1].offsetHeight;//이벤트.가 발생된. li에. 높이 지정
        headerWrap.style.height = 70 + ht + 'px';

        Body.classList.add("on");
    });//mouseover

    gnbMenu[i].addEventListener('mouseout',(e) => {
        e.currentTarget.classList.remove('on');
        headerWrap.style.height = '70px';

        Body.classList.remove("on");
    });//mouseout

    gnbMenu[i].children[0].addEventListener('focus', (e) => {//li>a
        e.currentTarget.parentElement.classList.add('on');
        var ht = e.currentTarget.nextElementSibling.offsetHeight; //li>div
        headerWrap.style.height = 70 + ht + 'px';
    });

    gnbMenu[i].children[0].addEventListener('blur', (e) => {
        e.currentTarget.parentElement.classList.remove('on');
        headerWrap.style.height = '70px';
    });
};

// 검색박스_완
const srchWrap = document.querySelector(".srch_wrap");
const btnSrch = document.querySelector(".btn_srch");
const btnSrchClose = document.querySelector(".srch_close");


btnSrch.addEventListener("click", (e) => {
    e.preventDefault();
    srchWrap.classList.add("on");
    Header.classList.add("on");

    Body.classList.add("on");
    subMenu.forEach(item => {
      item.classList.add("on");
    });
});

btnSrchClose.addEventListener("click", (e) => {
    e.preventDefault();
    srchWrap.classList.remove("on");

    Body.classList.remove("on");
    subMenu.forEach(item => {
      item.classList.remove("on");
    });
});

// 스크롤 주메뉴_완
const Header = document.querySelector(".header");
window.addEventListener('scroll',() => {
  let scroll = document.querySelector('html').scrollTop;
  console.log(scroll);
  if(scroll <= 5){
    Header.classList.remove("on");
   }else{
    Header.classList.add("on");
   }

});

// faq_완
const faqList = document.querySelectorAll(".faq_list > ul > li");

for(let k=0; k<faqList.length; k++){
    faqList[k].addEventListener("click", e=>{
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
        if(e.currentTarget.classList.contains("on")){
            activation(k,faqList);
        }
    })
}


// footer-Language
/*const Language = document.querySelector('dl.footer_link>.language');
Language.addEventListener('click', e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");

  if(e.currentTarget.classList.contains("on")) {
    e.currentTarget.children[0].setAttribute("title", "언어 닫기");
  }else {
    e.currentTarget.children[0].setAttribute("title", "언어 열기");
  }
 
})*/

/* ---------------------------------------------------------------------------- */

// banner  이벤트  및 애니메이션
let BannerArrow_l =null;
let BannerArrow_r =null;
if(document.getElementsByClassName("banner_arrow")[0] != null){
  BannerArrow_l = document.getElementsByClassName("banner_arrow")[0].children[0];
  BannerArrow_r = document.getElementsByClassName("banner_arrow")[0].children[1];


BannerArrow_l.addEventListener("click",e=>{
  let banner =document.getElementsByClassName("home-article")[0];

  if(banner.style.marginLeft == ""){
    banner.style.marginLeft = "-100%";
    changeOn(1);
  }else if(banner.style.marginLeft == "-100%"){
    banner.style.marginLeft = "-200%";
    changeOn(2);
  }else if(banner.style.marginLeft == "-200%"){
    banner.style.marginLeft = "-300%";
    changeOn(3);
  }
  else if(banner.style.marginLeft == "-300%"){
    banner.style.marginLeft = "";
    changeOn(0);
  }
  
});

BannerArrow_r.addEventListener("click",e=>{
  let banner =document.getElementsByClassName("home-article")[0];

  if(banner.style.marginLeft == "-300%"){
    banner.style.marginLeft = "-200%";
    changeOn(2);
  }else if(banner.style.marginLeft == "-200%"){
    banner.style.marginLeft = "-100%";
    changeOn(1);
  }else if(banner.style.marginLeft == "-100%"){
    banner.style.marginLeft = "";
    changeOn(0);
  }
  else if(banner.style.marginLeft == ""){
    banner.style.marginLeft = "-100%";
    changeOn(1);
  }
  
});
}

let bannerAni = setInterval(function(){
  let banner =document.getElementsByClassName("home-article")[0];

  if(banner.style.marginLeft == ""){
    banner.style.marginLeft = "-100%";
    changeOn(1);
  }else if(banner.style.marginLeft == "-100%"){
    banner.style.marginLeft = "-200%";
    changeOn(2);
  }else if(banner.style.marginLeft == "-200%"){
    banner.style.marginLeft = "-300%";
    changeOn(3);
  }else{
    banner.style.marginLeft = "";
    changeOn(0);
  }

},8000);

if(document.getElementsByClassName("play")[0] !=null){

let bannerPlay = document.getElementsByClassName("play")[0];

bannerPlay.addEventListener("click",e=>{
  if(bannerPlay.innerText ==">"){
    bannerPlay.innerText ="||";

    bannerAni = setInterval(function(){
      let banner =document.getElementsByClassName("home-article")[0];
    
      if(banner.style.marginLeft == ""){
        banner.style.marginLeft = "-100%";
        changeOn(1);
      }else if(banner.style.marginLeft == "-100%"){
        banner.style.marginLeft = "-200%";
        changeOn(2);
      }else if(banner.style.marginLeft == "-200%"){
        banner.style.marginLeft = "-300%";
        changeOn(3);
      }else{
        banner.style.marginLeft = "";
        changeOn(0);
      }
    
      console.log("1111");
    },8000);

  }else{
    bannerPlay.innerText =">";
    clearInterval(bannerAni);
  }
});

}


if( document.getElementsByClassName("banner_rolling")[0] != null){
let bannerBtnList = document.getElementsByClassName("banner_rolling")[0].children[1];

bannerBtnList.addEventListener("click",e=>{
  let banner = document.getElementsByClassName("home-article")[0];

  e.target.parentElement.parentElement.children[0].classList.remove("on");
  e.target.parentElement.parentElement.children[1].classList.remove("on");
  e.target.parentElement.parentElement.children[2].classList.remove("on");
  e.target.parentElement.parentElement.children[3].classList.remove("on");

  e.target.parentElement.className="on";


  if(e.target.parentElement.parentElement.children[0] == e.target.parentElement){
    banner.style.marginLeft = "";
  }else if(e.target.parentElement.parentElement.children[1] == e.target.parentElement){
    banner.style.marginLeft = "-100%";
  }else if(e.target.parentElement.parentElement.children[2] == e.target.parentElement){
    banner.style.marginLeft = "-200%";
  }else if(e.target.parentElement.parentElement.children[3] == e.target.parentElement){
    banner.style.marginLeft = "-300%";
  }

});

}

const changeOn = function(num){
  bannerBtnList.children[0].classList.remove("on");
  bannerBtnList.children[1].classList.remove("on");
  bannerBtnList.children[2].classList.remove("on");
  bannerBtnList.children[3].classList.remove("on");

  bannerBtnList.children[num].className="on";
};


// content3  slide

if(document.getElementsByClassName("controls")[0] != null){

let rightBtn = document.getElementsByClassName("controls")[0];
rightBtn.addEventListener("click",e=>{
  document.getElementsByClassName("list_pic")[0].style.marginLeft


  let gal =document.getElementsByClassName("list_pic")[0];
  if(gal.style.marginLeft == ""){
    gal.style.marginLeft = "-25%";
  }else if(gal.style.marginLeft == "-25%"){
    gal.style.marginLeft = "-50%";
  }else if(gal.style.marginLeft == "-50%"){
    gal.style.marginLeft = "-75%";
  }
});
}


// footer Language
if(document.getElementsByClassName("language")[0].children[0] != null){
let LanguageBtn = document.getElementsByClassName("language")[0].children[0];

LanguageBtn.addEventListener("click",e=>{
  if(document.getElementsByClassName("language")[0].children[1].style.display =="block"){
    document.getElementsByClassName("language")[0].children[1].style.display ="none";
  }else{
    document.getElementsByClassName("language")[0].children[1].style.display ="block";
  }
});
}

// 햄버거 버튼 클릭
const mobBtn = document.querySelector(".mobBtn");
const mobBtn_Close = document.querySelector(".mobBtn_close");
const mob_gnb = document.querySelector(".mob_gnb");

mobBtn.addEventListener('click', e => {
  e.preventDefault();
  mob_gnb.classList.add('on');
  mobBtn_Close.classList.add('on');
});
mobBtn_Close.addEventListener('click', e => {
  e.preventDefault();
  mob_gnb.classList.remove('on');
  mobBtn_Close.classList.remove('on');
});

// 모바일 메뉴
const mobDds = document.querySelectorAll("div.mob dd");

for(let f=0; f<mobDds.length; f++){
    mobDds[f].addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle("on");
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.children[0].setAttribute("title", "메뉴 닫기");
        }else{
            e.currentTarget.children[0].setAttribute("title", "메뉴 열기");
        }
    });
};


// 모바일 gnb 메뉴
const mobLis = document.querySelectorAll("nav.mob_gnb>ul>li");

for(let p=0; p<mobLis.length; p++){
    mobLis[p].addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle("on");
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.children[0].setAttribute("title", "메뉴 닫기");
        }else{
            e.currentTarget.children[0].setAttribute("title", "메뉴 열기");
        }
    });
};