import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './link';
import Curve from './curve';
import MenuItem from '../../navbar/MenuItem';
import { signIn, signOut } from 'next-auth/react';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
// import { signOut } from "next-auth/react";
const navItems = [
  {
    title: "Trips",
    href: "/trips",
  },
  {
    title: "Favorite",
    href: "/favorites",
  },
  {
    title: "Reservations",
    href: "/reservations",
  },
  {
    title: "Properties",
    href: "/properties",
  },
]

export default function Nav({ currentUser }: any) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          {/* <div className={styles.header}>
                        
                    </div> */}
          {
            navItems.map((data, index) => {
              return <Link
                currentUser={currentUser}
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}>
              </Link>

            })
          }
        </div>
        {
          currentUser ? (
            <MenuItem
              label="log Out"
              onClick={signOut}
            />
          ) : (
            <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
          )
        }
        {/* <div className={styles.footer}>
                <a>Awwwards</a>
                <a>Instagram</a>
                <a>Dribble</a>
                <a>LinkedIn</a>
            </div> */}
      </div>
      <Curve />
    </motion.div>
  )
}