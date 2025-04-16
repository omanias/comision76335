import { useState } from 'react'
import { Checkbox } from 'primereact/checkbox';

const ContactForm = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [checked, setChecked] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" || apellido === "" || email === "" ? alert("Los campos están vacío") : alert(`Registrado ${nombre} ${apellido} con el correo electrónico ${email}`)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="card p-fluid flex flex-wrap gap-3">

                    <div className="flex-auto">
                        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="flex-auto">
                        <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="flex-auto">
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="flex-auto">
                        Quiero suscribirme
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                    </div>

                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
