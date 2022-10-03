import Image from 'next/image'
import { urlFor } from '../lib/client'
import Link from 'next/link'
import css from '../styles/Menu.module.css'
export default function Menu({pizzas}) {
    
    return(
        <div className={css.container}>
            <div className={css.heading}>
                <span>OUR MENU</span>
                <span>Menu That Always</span>
                <span>Make you Fall In Love</span>
            </div>
            {/* Pizzas  */}
            <div className={css.menu}>
               {pizzas.map((pizzas,id)=>{
                const src= urlFor(pizzas.image).url()
                return(
                    <div className={css.pizza} key={id}>
                        <Link href={`./pizza/${pizzas.slug.current}`}>
                      <div className={css.ImageWrapper}>
                        <Image loader={()=>src} src={src} alt=''
                        objectFit='cover' layout='fill'/>
                      </div>
                      </Link>
                      <span>{pizzas.name}</span>
                      <span> <span style={{color:'var(--themeRed)'}}>Rs</span> {pizzas.price[1]}</span>
                    </div>
                )
               })}
            
        </div>
        </div>
    )

}