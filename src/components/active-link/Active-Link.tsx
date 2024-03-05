'use client'

import Link from "next/link";
import styles from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link 
        href={path} 
        className={`${styles.link} ${(pathName === path) && styles['active-link']}`}
    >
        {text}
    </Link>
  )
}

