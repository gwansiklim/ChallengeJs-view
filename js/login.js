const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginId = document.querySelector("#login-id");

const HIDDEN = "hidden";
const USERNAME = "username";

function clickLogIn(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const user = loginInput.value;
    localStorage.setItem(USERNAME, user);
    useLogin(user);
}

function useLogin(user) {
    loginId.innerText = `Wellcome To ${user}`;
    loginId.classList.remove(HIDDEN);
}

const userName = localStorage.getItem(USERNAME);

if (userName === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", clickLogIn);
} else {
    useLogin(userName);
}