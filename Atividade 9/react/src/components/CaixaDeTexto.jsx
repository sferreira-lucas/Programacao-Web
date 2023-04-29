import styles from './CaixaDeTexto.module.css'

function CaixaDeTexto(props){
    
    const {type, value, placeholder} = props

    return(

        <input className={styles.CaixaTexto} type={type} value={value} placeholder={placeholder}>
        </input>
        
    )
}

export default CaixaDeTexto