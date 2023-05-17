'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { signIn, signOut, useSession, getProviders } from "next-auth/react"


type Props = {}

const Nav = (props: Props) => {

  const isUserLoggedIn = true
  return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href={"/"} className="flex gap">
				<Image
					src="/images/logo.svg"
					alt="Promptopia logo"
					width={30}
					height={30}
					className="object-contain"
				/>
				<p className="logo_text">Promptopia</p>
			</Link>

			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				{isUserLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link href={"/create-prompt"} className="black_btn">
							Create Post
						</Link>
						<button type="button" onClick={signOut} className="outline_btn">
							Sign Out
						</button>

						<Link href="/profile">
							<Image
								src='/images/joss.png'
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"
							/>
						</Link>
					</div>
				) : (
					<></>
				)}
			</div>
		</nav>
	)
}

export default Nav