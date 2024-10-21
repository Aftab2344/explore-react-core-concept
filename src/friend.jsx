export default function Friend({friend}){
    console.log(friend)
    const {name,email}=friend;
    return(
        <div className="box">
            <h3>Name:{name}</h3>
            <h3>E-mail:{email}</h3>
        </div>
    )
}