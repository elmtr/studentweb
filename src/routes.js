import Home from './routes/Home.svelte';
import Welcome from './routes/Welcome.svelte';

import Timetable from './routes/timetable/Timetable.svelte'

// signup
import Basic from './routes/signup/Basic.svelte'
import Phone from './routes/signup/Phone.svelte'
import VerifyCode from './routes/signup/VerifyCode.svelte'
import Grade from './routes/signup/Grade.svelte'
import Password from './routes/signup/Password.svelte'
import Passcode from './routes/signup/Passcode.svelte'
import CheckPasscode from './routes/signup/CheckPasscode.svelte'

// login
import Login from './routes/login/Login.svelte'
import VerifyLoginCode from './routes/login/VerifyCode.svelte'

// profile
import Profile from './routes/profile/Profile.svelte'
import Account from './routes/profile/Account.svelte'

import ChangePassword from './routes/profile/ChangePassword.svelte'
import ChangePasscode from './routes/profile/ChangePasscode.svelte'
import Logout from './routes/profile/Logout.svelte'


// student
import Subject from './routes/student/Subject.svelte'

export default {
    '/': Home,
    '/welcome': Welcome,
    '/timetable': Timetable,

    '/signup/basic': Basic,
    '/signup/phone': Phone,
    '/signup/verify-code': VerifyCode,
    '/signup/grade': Grade,
    '/signup/password': Password,
    '/signup/passcode': Passcode,
    '/signup/check-passcode': CheckPasscode,

    '/login': Login,
    '/login/verify-code': VerifyLoginCode,

    '/student/:subjectKey': Subject,

    '/profile': Profile,
    '/profile/account': Account,

    '/profile/account/change-password': ChangePassword,
    '/profile/account/change-passcode': ChangePasscode,

    '/profile/logout': Logout,
};
