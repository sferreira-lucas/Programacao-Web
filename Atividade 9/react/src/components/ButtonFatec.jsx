import styles from './ButtonFatec.module.css'

function ButtonFatec(props){
    
    const {type, label} = props

    return(

        <button className={styles.ButtonFatec} type={type}>

            Enviar Mensagem {label}
        
        </button>
    )
}

export default ButtonFatec