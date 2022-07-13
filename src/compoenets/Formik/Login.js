//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Login page
//    DESCRIPTION - Login Page to authenticate user credentails
//////////////////////////////////////////////////////////////////////////////////////
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../Components/Data/User'
import logo from '../Components/Media/logo1.png'
import { connect } from "react-redux";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    username: Yup.string().required('Enter Username'),
    password: Yup.string().required('Enter Password')
})

function Login2(props) {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            // console.log('form data', values)
            authUser()
        },
        validationSchema
    })

    let authState = 0 //authStatus state variable to check authetication state
    const userList = useMemo(() => User, [])  //useMemo hook to get the static data and reutrn memoized date when needed
    const navigate = useNavigate()
    //authUser function which authenticate user credentials
    const authUser = (e) => {


        userList.map((user) => {  //mapping through userList to check wheather userName and password exists or not
            if (user.userName === formik.values.username) { //checking if user exists or not
                if (user.password === formik.values.password) { //checking if password matched or not for specific user
                    authState++ //authStaus increment to claim login
                }
            }
        })
        if (authState > 0) { //checking user is logged in or not
            window.localStorage.setItem('user', JSON.stringify({ 'username': formik.values.username, 'password': formik.values.password }))
            props.LOGIN()
            // console.log('login value after change',props.isLoggedIn)
            authState = 0
            navigate('/home')
        } else {
            alert('Wrong Credentials!!')  //action if user is not logged in
        }
    }
  
    return (
        <>
            <div className="grid mt-12 ml-48">
                <div className="text-3xl font-semibold w-96 text-center text-gray-700 ">Sign in to your account</div>

                <div className="w-96 bg-white  p-12 pt-4 shadow-2xl mt-10">
                    <div className="flex mb-6 gap-1"><div className="flex-initial"><img className='w-10' src={logo} /></div>
                        <div className="flex-initial grid items-center text-center text-lg font-semibold ">Ranchi Municipal Corporation</div></div>


                    <form onSubmit={formik.handleSubmit}>
                        {/* single input filed component */}
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                            <input {...formik.getFieldProps('username')} type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder=""  />
                            <span className='text-red-600'>{formik.touched.username && formik.errors.username ? formik.errors.username:null}</span>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input {...formik.getFieldProps('password')} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder=""  />
                            <span className='text-red-600'>{formik.touched.password && formik.errors.password ? formik.errors.password:null}</span>


                        </div>

                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center ">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

//for redux
const mapStateToProps = (state) => {
    return {
        RightNavCloseStatus: state.RightNavCloseStatus,
        isLoggedIn: state.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // buyCake: () => dispatch(buyCake())
        LOGIN: (data2) => dispatch({ type: "LOGIN" }),
    };
};



// export default HeaderIcons
export default connect(mapStateToProps, mapDispatchToProps)(Login2);