let viewLoginPwd = false;

function changePwdType() {
    let getPwdType = $('#viewPwdLogin');

    if (viewLoginPwd === false) {
        console.log();
        getPwdType.attr('type', 'text');
        viewLoginPwd = true;
    } else if (viewLoginPwd === true) {
        getPwdType.attr('type', 'password');
        viewLoginPwd = false;
    }
}
