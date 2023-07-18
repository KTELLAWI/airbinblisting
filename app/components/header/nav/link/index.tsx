import styles from './style.module.scss';
import Link from 'next/link';
import { slide, scale } from '../../anim';
import { motion } from 'framer-motion';
import { signOut,signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import MenuItem from '@/app/components/navbar/MenuItem';
import useCLient from '@/app/hooks/useClient';
import useCountries from '@/app/hooks/useCountries';

export default  function Index({data, isActive, setSelectedIndicator,currentUser }: any) {
  
    const { title, href, index} = data;
    // const session = useCLient();
     //const { getByValue } = useCountries();

    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <div><Link href={href}>{title}</Link></div>
        
      </motion.div>
    )
}