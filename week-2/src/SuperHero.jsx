function SuperHero(props) {
    return (
    <div className="card">
    <div className="card-body">
        <img src={props.imgLink} alt={props.name} />
        <h4 className="card-title">Имя: {props.name}</h4>
        <p className="card-superpowers">Характеристики: {props.superpowers}</p>
        <p className="card-info">Подробная информация: {props.info}</p>
    </div>
    </div>
);
}

export default SuperHero;
