import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import { all } from '@/middlewares/index'
import { updateUserById, findAndDeleteTokenByIdAndType } from '@/db/index'


const EmailVerifyPage = ({ success }) => {
    return (
        <>
          <Head>
              <title>Sign up</title>
          </Head>
          <p>{success ? 'Than you for verifying your email address. You may close this page.' : 'This link may have expired.'}</p>
        </>
    )
}

export async function getServersideProps(ctx) {
    const handler = nc()
    handler.use(all)
}
export default EmailVerifyPage