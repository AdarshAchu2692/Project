// LOGIN / SIGNUP
function openAuth(){
  document.getElementById("authModal").style.display="flex";
}
function closeAuth(){
  document.getElementById("authModal").style.display="none";
}

let isLogin = true;
function toggleAuth(){
  isLogin = !isLogin;
  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("switchText").innerText =
    isLogin ? "Don’t have an account?" : "Already have an account?";
}

// NAVBAR SCROLL BEHAVIOR
let lastScroll = 0;
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if(currentScroll > lastScroll && currentScroll > 100){
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
  lastScroll = currentScroll;
});
