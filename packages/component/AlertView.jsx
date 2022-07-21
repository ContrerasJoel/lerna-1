export const AlertView = (props) => {
    return <>
      <div className={`alert alert-${props.type}`} role="alert">
        {props.text}
      </div>
    </>
}