import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="show992">#551</td>
                        <td className="show576">08/09/2022</td>
                        <td>Igor</td>
                        <td className="show992">15</td>
                        <td className="show992">30</td>
                        <td>R$ 1000.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                            <NotificationButton />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#500</td>
                        <td className="show576">10/09/2022</td>
                        <td>Bruno</td>
                        <td className="show992">22</td>
                        <td className="show992">44</td>
                        <td>R$ 2000.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#490</td>
                        <td className="show576">09/09/2022</td>
                        <td>Marcelo</td>
                        <td className="show992">10</td>
                        <td className="show992">50</td>
                        <td>R$ 3000.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                            <NotificationButton />
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default SalesCard
