'use client'
import { CalculatorIcon, DocumentCheckIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links  =[
    {
        name:"Dashboard",
        href:"/dashboard"  ,
        icon : HomeIcon,
    },
    {
        name:"Recette",
        href:"/dashboard/recette"  ,
        icon : CalculatorIcon,
    },
    {
        name:"Historique",
        href:"/dashboard/historique"  ,
        icon :DocumentCheckIcon,
    }
]
export default function NavLink() {
    const pathname = usePathname()
   
  return (
    <>
       {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  
  )
}

