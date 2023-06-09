import './button.css';

export function Button(props){
    return <button type={props.submit} onClick={props.handleClick}>{props.children}</button>
}