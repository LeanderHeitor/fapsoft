import './row.css'

export default function Row({img, name, email}) {
    return ( 
    <section className='row'>
       <div>
        <img className='row-img' src={img} alt=''/>
       </div>
       <div className='row-content'>
        <h3 className='row-title'>{name}</h3>
        <p className='row-subtitle'>{email}</p>
       </div>
    </section>
    )
}