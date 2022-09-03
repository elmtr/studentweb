import Home from './routes/Home.svelte';

// signup
import Basic from './routes/signup/Basic.svelte'
import Phone from './routes/signup/Phone.svelte'
import VerifyCode from './routes/signup/VerifyCode.svelte'
import Grade from './routes/signup/Grade.svelte'
import Password from './routes/signup/Password.svelte'
import Passcode from './routes/signup/Passcode.svelte'

// login
import Login from './routes/login/Login.svelte'
import VerifyLoginCode from './routes/login/VerifyCode.svelte'
import Update from './routes/login/Update.svelte'

// student
import Student from './routes/student/Student.svelte'

export default {
    '/': Home,

    '/signup/basic': Basic,
    '/signup/phone': Phone,
    '/signup/verify-code': VerifyCode,
    '/signup/grade': Grade,
    '/signup/password': Password,
    '/signup/passcode': Passcode,

    '/login': Login,
    '/login/verify-code': VerifyLoginCode,
    '/login/update': Update,

    '/student/:subjectID': Student,
};
