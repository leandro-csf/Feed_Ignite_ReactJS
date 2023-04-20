import styles from "./Sidebar.module.css"
import {PencilLine} from "phosphor-react"
import { Avatar } from "./Avatar"

export function Sidebar() {

    return (
        
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=350&h=150&dpr=1" alt="" 
            />
            
            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/leandro-csf.png"/>
                <strong>Leandro Cesar</strong>
                <span>Web Developer</span>
            
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    )
}

