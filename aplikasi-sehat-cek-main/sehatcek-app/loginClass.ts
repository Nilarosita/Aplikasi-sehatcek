class Login {
    protected usernameUser = 'user';
    protected passwordUser = 'user';
    protected usernameAdmin = 'admin';
    protected passwordAdmin = 'admin';

    cekLogin(username:string, password:string) {
        if(username == this.usernameUser && password == this.passwordUser) {
            return window.location.href = "fituruser.html";
        } else if(username == this.usernameAdmin && password == this.passwordAdmin) {
            return window.location.href = "fiturrs.html";
        } else {
            alert("Maaf, username atau password anda salah!");
            return window.location.reload();
        }
    }

}