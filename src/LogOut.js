

export function LogOut(){                             // Step: 2
    localStorage.removeItem("token");
    window.location.href="/"
}