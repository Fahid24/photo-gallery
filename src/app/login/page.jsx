"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [value, setValue] = useState({
        email: " ",
        pass: " "
    })
    console.log(value)
    const handleValue = () => {

    }

    return (
        <div><div className="hero min-h-screen  pt-48">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et Link id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input value={value.email} onChange={(e) => { setValue({ ...value, email: e.target.value }) }} type="email" placeholder="Enter email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input value={value.pass} onChange={(e) => { setValue({ ...value, pass: e.target.value }) }} type="password" placeholder="Enter password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="/singup" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={() => { handleValue }} className="btn text-white hover:text-black bg-black">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control ">
                            <button className="btn text-white hover:text-black bg-black">Login With google</button>
                        </div>
                    </form>

                </div>
            </div>
        </div></div>
    )
}

export default page