var Login = /** @class */ (function () {
    function Login() {
        this.usernameUser = 'user';
        this.passwordUser = 'user';
        this.usernameAdmin = 'admin';
        this.passwordAdmin = 'admin';
    }
    Login.prototype.cekLogin = function (username, password) {
        if (username == this.usernameUser && password == this.passwordUser) {
            return window.location.href = "fituruser.html";
        }
        else if (username == this.usernameAdmin && password == this.passwordAdmin) {
            return window.location.href = "fiturrs.html";
        }
        else {
            alert("Maaf, username atau password anda salah!");
            return window.location.reload();
        }
    };
    return Login;
}());
