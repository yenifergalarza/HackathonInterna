import React from 'react'
import Chart from 'react-google-charts';
import App from '../Modify/App';

import add from '../../img/add.png'



const Admin = (props) => {
    return (
        <div>
            <div className="col-6 col-md-3 col-lg-3">
                {/* <a onClick={() => { props.history.push("/admin") }}>x</a> */}

                <img onClick={() => { props.history.push("/admin") }} src={add} className="redirect" />
            </div>
            <h5>Hola,name,este es el reporte del mes</h5>
            <div style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Detergente', 11],
                        ['Pasta', 2],
                        ['Aceite', 2],
                        ['Conserva', 2],
                        ['Jabón', 7],
                    ]}
                    options={{
                        title: 'Categoría más Pedida',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Productos', '2019 Population', '2000 Population'],
                        ['Atún', 8175000, 8008000],
                        ['Primor', 3792000, 3694000],
                        ['Opal', 2695000, 2896000],
                        ['Marcio', 2099000, 1953000],
                        ['Aceite', 1526000, 1517000],
                    ]}
                    options={{
                        title: 'El producto más Comprado',
                        chartArea: { width: '50%' },
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'Productos',
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
                />
                {/* <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="BarChart"
                    chartType="Table"
                    loader={<div>Loading Chart</div>}

                    data={[
                        [
                            { type: 'string', label: 'El Resumen General' },

                        ],


                    ]}


                    options={{
                        title: 'El Resumen General',
                        showRowNumber: true,

                    }}                  
                    rootProps={{ 'data-testid': '1' }}
                /> */}
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="BarChart"
                    chartType="Table"
                    loader={<div>Loading Chart</div>}

                    data={[
                        [
                            { type: 'string', label: 'Nombre' },
                            { type: 'number', label: 'DNI' },
                            { type: 'string', label: 'Sede' },
                            { type: 'string', label: 'Resumen' },
                        ],
                        ['Juan', 49763426, ' Nicovita ', ' Aceite F. '],
                        ['Jim', 48608657, ' Teal ', ' Primor '],
                        ['Alice', 64375579, ' Molino Santa Rosa ', ' Bolivar '],
                        ['Bob', 57438087, ' Sidsur ', ' Alianza '],
                    ]}


                    options={{
                        title: 'El Resumen General',
                        showRowNumber: true,

                    }}

                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        </div>
    )
}
export default Admin