const If = props =>{

    // const filhos = [props["children"]]

    // const eleElse = (Array.isArray(filhos)) ? filhos.filter((filho)=> filho.type && filho.type.nome === 'Else')[0] : ""
    // const eleIf = (Array.isArray(filhos)) ? filhos.filter((filho) => filho !== eleElse) : filhos

    // if(props['test']){
    //     return eleIf
    // }else if(eleElse){
    //     return eleElse
    // }else{
    //     return false
    // }
    
    const elseChild = props.children.filter(child =>{
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child =>{
            return child !== elseChild
        })
    
        if(props.test){
        return ifChildren
        }else if(elseChild){
            return elseChild
        }else{
        return false
    }

}


export default If

export const Else = props => (props["children"])