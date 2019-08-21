import React,
{useEffect} from 'react'
import Chart from 'react-google-charts';
import Header from '../header'
import { useCollection } from 'react-firebase-hooks/firestore';
import { ordersData } from '../../controller/Firebase/authentication';
import L from 'leaflet';
import $ from 'jquery'; 
const Admin = () => {
    const [value, loading, error] = useCollection(
        ordersData,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const reciclaje = [{
        longitud: -12.130137, 
        latitud: -77.006225,
        titulo: "Molino Santa Rosa",
        parrafo: "Pedro Ruiz 418. Callao",
    }, {
        longitud: -12.134081, 
        latitud: -77.017040,
        titulo: "Molino Santa Rosa",
        parrafo: "Pedro Ruiz 418. Callao",
    }, {
        longitud: -12.136808, 
        latitud: -77.007341,
      titulo: "Molino Santa Rosa",
        parrafo: "Pedro Ruiz 418. Callao",
    }, {
        longitud: -12.135675, 
        latitud: -77.000173,
        titulo: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa)",
        parrafo: "Av. Argentina 4793 Carmen de la Legua Reynoso / Callao.",
    }, {
        longitud: -12.151409, 
        latitud: -77.011031,
        titulo: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa)",
        parrafo: "Av. Argentina 4793 Carmen de la Legua Reynoso / Callao.",
    }, {
        longitud: -12.168420, 
        latitud: -76.995281,
         titulo: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa)",
        parrafo: "Av. Argentina 4793 Carmen de la Legua Reynoso / Callao.",
    }, {
        longitud: -12.171963, 
        latitud: -76.968893,
       titulo: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa)",
        parrafo: "Av. Argentina 4793 Carmen de la Legua Reynoso / Callao.",
    }, {
        longitud: -12.064703, 
        latitud: -77.018675,
        titulo: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa)",
        parrafo: "Av. Argentina 4793 Carmen de la Legua Reynoso / Callao.",
    }, {
        longitud: -12.008941, 
        latitud: -77.078783,
        titulo: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa)",
        parrafo: "Av. Argentina 4793 Carmen de la Legua Reynoso / Callao.",
    }, {
        longitud: -12.046992, 
        latitud: -77.094595,
         titulo: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa)",
        parrafo: "Av. Argentina 4793 Carmen de la Legua Reynoso / Callao.",
    }, {
        longitud: -12.198673, 
        latitud: -76.995690,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.210034, 
        latitud: -76.976732,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.201717, 
        latitud: -76.986110,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.095738, 
        latitud: -77.055440,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.171852, 
        latitud: -76.971463,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.047541, 
        latitud: -77.013092,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -11.983529, 
        latitud: -77.071369,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.047687, 
        latitud: -77.125783,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.083847, 
        latitud: -77.090195,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }, {
        longitud: -12.129759, 
        latitud: -76.994037,
        titulo: "Planta Teal",
        parrafo: "Av. Nicol?s Ayll?n N? 1179, Ate Vitarte y Metales",
    }];

  
     
    return (
        <>
            <Header />
            <div className="container-fluid">  <h5>Hola,name,este es el reporte del mes</h5>
                <div className="container  col-12 col-sm-12 col-md-12">
                <div className="container-fluid" style={{"display":"flex","flex-wrap": "wrap"}}>
                    <Chart className=" col-12 col-sm-12 col-md-12"
                        width={'300px'}
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
                    <Chart className=" col-12 col-sm-12 col-md-12"
                        width={'300px'}
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
                  </div>
                    <div class="table-responsive">
                        {error && <strong>Error: {JSON.stringify(error)}</strong>}
                        {loading && <span>Collection: Loading...</span>}
                        {value && (
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">nombre</th>
                                        <th scope="col">DNI</th>
                                        <th scope="col">Sede</th>
                                        <th scope="col">resumen</th>
                                        <th scope="col">Monto</th>
                                        <th scope="col">Hora</th>
                                    </tr>
                                </thead>
                                <tbody>   {value.docs.map(doc => (

                                    <tr key={doc.id}>
                                        <th scope="row">1</th>
                                        <td>{doc.data().name}</td>
                                        <td>{doc.data().dni}</td>
                                        <td>{doc.data().sede}</td>
                                        <td>{doc.data().cart.map(prod=>(<p>{prod.name}</p>) )}</td>
                                        <td>{doc.data().bill}</td>
                                        <td>{doc.data().name}</td>
                                    </tr>


                                ))}
                                </tbody>
                            </table>)}
                    </div>
<div class="contenedor">
         
          <div class="uk-container uk-margin-top">
              <div class="uk-grid">
                <div class="uk-width-1-1">
                  <div class="uk-panel uk-panel-box uk-panel-box-secondary uk-panel-header">
                    <h3 class="uk-panel-title">Leaflet Geolocation Simple</h3>
                    <div id="mapa"></div> 
                    <button id="locate-position" class="uk-button uk-button-success">geolocalizap<i class="uk-icon-map-marker"></i></button>
                 
                  
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
                </div>
            </div>
        </>
    )
}
export default Admin;


/* <Chart
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
             /> */
/*    <Chart
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
   /> */
